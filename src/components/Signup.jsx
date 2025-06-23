import React, { useState } from 'react';
import axios from 'axios';
import '../components/style.css';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import img from '../assets/book-logo.png'


const Signup = () => {
  const [instituteName, setInstituteName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isloader, setisLoader] = useState(false)
  const navigte = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    setisLoader(true)
    console.log(instituteName, email, phone, password, image);
    const formData = new FormData();
    formData.append('instituteName', instituteName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('image', image);
    axios.post('https://institute-management-system-backend.onrender.com/user/signup', formData)
      .then((res) => {
        setisLoader(false)
        navigte('/login')
        toast.success('Register successfull')
        console.log(res);
      })
      .catch((err) => {
        setisLoader(false)
        toast.error('Some things wrong')
        console.log(err);
      });
  };

  const fileHandler = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='w-full h-screen flex justify-center md:items-center'>
      <div className='flex flex-col w-full md:flex-row md:w-[90%] md:h-[90%] lg:h-[80%] bg-white md:rounded-lg md:overflow-hidden'>
        <div className='w-full md:w-[50%]  py-10 md:py-0 bg-violet-600 flex flex-col md:pt-30 items-center'>
          <img src={img} alt='book img' className='w-44 lg:w-60' />
          <h2 className='text-xs lg:text-lg px-1.5 md:px-0 text-center text-zinc-100'>
            Here Easly to track student & course Detailas
          </h2>
          <p className='text-yellow-200 text-xs md:text-sm'>
            Manage own Institute Data
          </p>
        </div>

        <div className='signup-form bg-zinc-100 md:w-[50%] py-8 md:py-0 h-full flex flex-col items-center justify-center'>
          <h1 className='font-bold text-xl pb-10'>Create your Account</h1>
          <form
            onSubmit={submitHandler}
            className='flex flex-col gap-4 w-[80%]'
          >
            <input
              required
              onChange={(e) => {
                setInstituteName(e.target.value);
              }}
              type='text'
              placeholder='Institute Name'
              name=''
              className='border'
            />
            <input
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type='email'
              placeholder='Email'
              autoComplete='email'
              name=''
              className='border'
            />
            <input
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type='password'
              placeholder='Password'
              autoComplete='new-password'
              name='password'
              className='border'
            />
            <input
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type='text'
              placeholder='phone no.'
              name='number'
              className='border'
            />
            <input
              required
              onChange={fileHandler}
              type='file'
              name='file'
              className='border'
            />
            {imageUrl && (
              <img
                className='h-30 w-30 rounded-full'
                src={imageUrl}
                alt='your logo'
              />
            )}
            <button
              type='submit'
              className='bg-slate-700 py-1 cursor-pointer rounded-lg text-white text-xl flex items-center justify-center'
            >
              {isloader && <i className="loader fa-solid fa-spinner fa-spin-pulse"></i>}
              Submit
            </button>
            <Link className='text-xs text-center' to="/login">if you have allready Account <span className='text-blue-500'>Login</span> Here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
