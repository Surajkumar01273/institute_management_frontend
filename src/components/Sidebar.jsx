import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/style.css';
import img from '../assets/book-logo.png'

function Sidebar() {
  const location = useLocation();


  return (
    <>
      <div className='nav-container mt-4 md:mt-0 md:w-[33vw] lg:w-[20vw] h-[87vh] px-4'>
         
        <div className='brand-container gap-2 flex items-center py-3'>
          <img className='h-6 w-6 3xl:h-12 3xl:w-12' src={img} alt='' />
          <div className='3xl:pt-3'>
            <h2 className='text-white font-semibold text-sm 3xl:text-4xl'>
              LMS application
            </h2>
            <p className='text-[10px] 3xl:text-2xl text-yellow-100'>
              Manage your Institute in Easy way
            </p>
          </div>
        </div>

        {/* Menue */}

        <div className='flex flex-col justify-center gap-3.5'>
          <Link to='home' className={location.pathname === '/dashboard/home' ? 'menu-active-link 3xl:text-4xl' : 'menu-link 3xl:text-4xl'}><i className="fa-solid fa-house mr-2"></i>Home</Link>
          <Link to='all-course' className={location.pathname === '/dashboard/all-course' ? 'menu-active-link 3xl:text-4xl' : 'menu-link 3xl:text-4xl'}><i className="fa-solid fa-book mr-2"></i>All Course</Link>
          <Link to='add-course' className={location.pathname === '/dashboard/add-course' ? 'menu-active-link 3xl:text-4xl' : 'menu-link 3xl:text-4xl'}><i className="fa-solid fa-plus mr-2"></i>Add Course</Link>
          <Link to='add-student' className={location.pathname === '/dashboard/add-student' ? 'menu-active-link 3xl:text-4xl' : 'menu-link 3xl:text-4xl'}><i className  ="fa-solid fa-circle-user mr-2"></i>Add Student</Link>
          <Link to='all-student' className={location.pathname === '/dashboard/all-student' ? 'menu-active-link 3xl:text-4xl' : 'menu-link 3xl:text-4xl'}><i className='fa-solid fa-user-group mr-2'></i>All Student</Link>
          <Link to='collect-fee' className={location.pathname === '/dashboard/collect-fee' ? 'menu-active-link 3xl:text-4xl' : 'menu-link 3xl:text-4xl'}><i className='fa solid fa-money-bill mr-2'></i> Collect Fee</Link>
          <Link to='payment-history' className={location.pathname === '/dashboard/payment-history' ? 'menu-active-link 3xl:text-4xl' : 'menu-link 3xl:text-4xl'}><i className='fa-solid fa-list mr-2'></i>Payment History</Link>
        </div>
        <div className='absolute bottom-10 3xl:bottom-20 text-white text-xs'>
          <p className='font-semibold text-sm 3xl:text-4xl'>Contact Developer</p>
          <p className='pointer 3xl:text-3xl'><i className='fa-solid fa-phone my-2 mr-2  3xl:text-3xl'></i>8709338363</p>
          <p className='3xl:text-3xl'><i className="fa-solid fa-square-envelope mr-2 3xl:text-3xl"></i>surajshk1995@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
