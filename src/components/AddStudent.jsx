import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AddStudent() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [courseId, setCourseId] =useState('')
  const [isloader, setisLoader] = useState(false);
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [courseList, setCourseList] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    findCourse();
  }, []);

  //***************** */      access course       **********


  const findCourse = () => {
    axios.get('https://institute-management-system-backend.onrender.com/course/all-courses',{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then(
        (course) => (
          // console.log(course),
          setCourseList(course.data.allCourses),
          console.log(course.data.allCourses)
        )
      )
      .catch((error) => {
        console.log('course notfound', error);
        toast.error('some things wrong....');
      });
  };

  // ***********     Add Student    **********

  const fileHandler = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setisLoader(true);
    const formData = new FormData();

    formData.append('fullName', fullName)
    formData.append('email', email);
    formData.append('phone', phone)
    formData.append('address', address)
    formData.append('image', image);
    formData.append('courseId', courseId)
    axios
      .post(
        'https://institute-management-system-backend.onrender.com/student/add-student',
        formData,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setisLoader(false);
        toast.success('New Student added');
        navigate('/dashboard/all-student')
      })
      .catch((error) => {
        setisLoader(false);
        console.log('Error hai', error);
        toast.error('Some things Wrong.');
      });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='flex flex-col mt-8 md:mt-0 gap-3 justify-center items-center w-full md:w-[70vw] h-full md:h-[87vh] 3xl:text-4xl'
      >
        <h1 className='mb-2 text-xl font-semibold hover:underline transition duration-800 3xl:text-6xl'>
          Add New Student
        </h1>
        <input
          onChange={(e) => setFullName(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='text'
          required
          name='Studentname'
          placeholder='Student Name'
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='email'
          required
          name='email'
          placeholder='Email'
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='Number'
          required
          name='phone'
          placeholder='Phone no.'
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='text'
          required
          name='address'
          placeholder='Address'
        />
        <select onChange={(e)=>{setCourseId(e.target.value)}} className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'>
          <option value="Select Course">Select Course</option>
          {courseList.map((course)=>(
            <option value={course._id} key={course._id}>{course.courseName}</option>
          ))}
        </select>

        <input
          onChange={fileHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='file'
          name='file'
          required
          // value={formData.file}
        />
        {imageUrl && (
          <img
            className='h-30 w-30'
            src={imageUrl}
            alt='course image 3xl:p-6'
          />
        )}
        <button
          type='submit'
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6 bg-pink-600 text-white hover:bg-pink-800 hover:font-semibold transition duration-800'
        >
          {isloader && (
            <i className='loader fa-solid fa-spinner fa-spin-pulse'></i>
          )}
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
