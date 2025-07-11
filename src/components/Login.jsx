import React, { useState } from 'react';
import axios from 'axios';
import '../components/style.css';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import img from '../assets/book-logo.png'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloader, setisLoader] = useState(false)
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    setisLoader(true)
    console.log(email, password);
    axios.post('https://institute-management-system-backend.onrender.com/user/login', {email:email, password:password})
      .then((res) => {
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('instituteName', res.data.instituteName)
        localStorage.setItem('imageUrl', res.data.imageUrl)
        localStorage.setItem('imageId', res.data.imageId)
        localStorage.setItem('email', res.data.email)
        navigate('/dashboard')
        toast.success('Login successfull')
        setisLoader(false)
        console.log(res);
      })
      .catch((err) => {
        setisLoader(false)
         toast.error('Some things wrong')
        console.log(err);
      });
  };


  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col md:flex-row w-full h-full md:w-[80%] md:h-[80%] bg-white  rounded-lg md:overflow-hidden'>
        <div className='md:w-[50%] bg-violet-600 flex flex-col pt-4 pb-8 md:pt-18 items-center'>
          <img src={img} alt='book logo' className='w-60' />
          <h2 className='text-xs px-2 md:text-lg text-center text-zinc-100'>
            Here Easly to track student & course Detailas
          </h2>
          <p className='text-yellow-200 pt-2 text-xs md:text-sm'>
            Manage own Institute Data
          </p>
        </div>

        <div className='signup-form bg-zinc-100 md:w-[50%] h-full flex flex-col items-center justify-center'>
          <h1 className='font-bold text-xl pb-10'>Login your Account</h1>
          <form
            onSubmit={submitHandler}
            className='flex flex-col gap-4 w-[80%]'
          >
            <input
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type='email'
              placeholder='Email'
              autoComplete='email'
              name='email'
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
           
            <button
              type='submit'
              className='bg-slate-700 py-1 rounded-lg text-white text-xl flex items-center justify-center cursor-pointer '
            >
              {isloader && <i className="loader fa-solid fa-spinner fa-spin-pulse"></i>}
              Login
            </button>
            <Link className='text-xs text-center' to="/signup">if you have not Account <span className='text-blue-500'>Register</span> Here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

