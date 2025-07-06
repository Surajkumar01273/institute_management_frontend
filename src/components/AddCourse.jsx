import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function AddCourse() {
  // const [formData, setformData] = useState({
  //   courseName: '',
  //   description: '',
  //   price: '',
  //   startDate: '',
  //   endDate: '',
  // });
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isloader, setisLoader] = useState(false);
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // const changeHandler = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setformData({ ...formData, [name]: value });
  // };
  const fileHandler = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setisLoader(true);
    const formData = new FormData();
    formData.append('courseName', courseName)
    formData.append('description', description)
    formData.append('price', price) 
    formData.append('startingDate', startDate)
    formData.append('endDate', endDate)
    formData.append('image', image)
    axios.post('https://institute-management-system-backend.onrender.com/course/add-course',
        formData,
        {
          headers: {
            Authorization: 'Bearer '+localStorage.getItem('token')
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setisLoader(false);
        toast.success('New Course added');
      })
      .catch((error) => {
        setisLoader(false);
        console.log('Error hai', error);
        toast.error('Some things Error');
      });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='flex flex-col mt-8 md:mt-0 gap-3 justify-center items-center w-full md:w-[70vw] h-full md:h-[87vh] 3xl:text-4xl'
      >
        <h1 className='mb-2 text-xl font-semibold hover:underline transition duration-800 3xl:text-6xl'>
          Add New Course
        </h1>
        <input
          onChange={(e)=>setCourseName(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='text'
          required
          name='courseName'
          // value={formData.courseName}
          placeholder='Course Name'
        />
        <input
          onChange={(e)=>setDescription(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='text'
          required
          placeholder='Description'
          name='description'
          // value={formData.description}
        />
        <input
          onChange={(e)=>setPrice(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='number'
          required
          placeholder='Pricce'
          name='price'
          // value={formData.price}
        />
        <input
          onChange={(e)=>setStartDate(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='text'
          required
          placeholder='Start Date (DD-MM-YY)'
          name='startDate'
          // value={formData.startDate}
        />
        <input
          onChange={(e)=>setEndDate(e.target.value)}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='text'
          required
          placeholder='End Date (DD-MM-YY)'
          name='endDate'
          // value={formData.endDate}
        />
        <input
          onChange={fileHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6'
          type='file'
          name='file'
          required
          // value={formData.file}
        />
        {imageUrl && (
          <img className='h-30 w-30' src={imageUrl} alt='course image 3xl:p-6' />
        )}
        <button
          type='submit'
          className='border border-slate-500 rounded-md w-[80%] p-2.5 3xl:p-6 bg-pink-600 text-white hover:bg-pink-800 hover:font-semibold transition duration-800'
        >
          {isloader && (
            <i className='loader fa-solid fa-spinner fa-spin-pulse'></i>
          )}
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
