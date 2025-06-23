import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function AddCourse() {
  const [formData, setformData] = useState({
    courseName: '',
    description: '',
    price: '',
    startDate: '',
    endDate: '',
  });
  const [isloader, setisLoader] = useState(false);
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData({ ...formData, [name]: value });
  };
  const fileHandler = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setisLoader(true);
    axios
      .post(
        'https://institute-management-system-backend.onrender.com/course/add-course',
        formData,
        image,
        {
          headers: {
            Authorization: 'Bearer '+localStorage.getItem('token'),
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
        console.log(error);
        toast.error('Some things Error');
      });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className='flex flex-col gap-3 justify-center items-center h-[80vh]'
      >
        <h1 className='mb-2 text-xl font-semibold hover:underline transition duration-800'>
          Add New Course
        </h1>
        <input
          onChange={changeHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5'
          type='text'
          required
          name='courseName'
          value={formData.courseName}
          placeholder='Course Name'
        />
        <input
          onChange={changeHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5'
          type='text'
          required
          placeholder='Description'
          name='description'
          value={formData.description}
        />
        <input
          onChange={changeHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5'
          type='number'
          required
          placeholder='Pricce'
          name='price'
          value={formData.price}
        />
        <input
          onChange={changeHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5'
          type='text'
          required
          placeholder='Start Date (DD-MM-YY)'
          name='startDate'
          value={formData.startDate}
        />
        <input
          onChange={changeHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5'
          type='text'
          required
          placeholder='End Date (DD-MM-YY)'
          name='endDate'
          value={formData.endDate}
        />
        <input
          onChange={fileHandler}
          className='border border-slate-500 rounded-md w-[80%] p-2.5'
          type='file'
          name='file'
          required
          value={formData.file}
        />
        {imageUrl && (
          <img className='h-30 w-30' src={imageUrl} alt='course image' />
        )}
        <button
          type='submit'
          className='border border-slate-500 rounded-md w-[80%] p-2.5 bg-pink-600 text-white hover:bg-pink-800 hover:font-semibold transition duration-800'
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
