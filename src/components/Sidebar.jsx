import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style.css';

function Sidebar() {
  return (
    <>
      <div className='nav-container w-[20%] bg-amber-900 h-[95vh] px-4'>
        <div className='brand-container gap-2 h-20 flex items-center'>
          <img className='h-6 w-6' src='../../public/book-logo.png' alt='' />
          <div>
            <h2 className='text-white font-semibold text-sm'>
              Life Spend application
            </h2>
            <p className='text-[10px] text-yellow-100'>
              Manage your App in Easy way
            </p>
          </div>
        </div>

        {/* Menue */}

        <div className='flex flex-col justify-center gap-3.5'>
          <Link to='home' className='menu-link'><i className="fa-solid fa-house mr-2"></i>Home</Link>
          <Link to='all-course' className='menu-link'><i className="fa-solid fa-book mr-2"></i>All Course</Link>
          <Link to='add-course' className='menu-link'><i className="fa-solid fa-plus mr-2"></i>Add Course</Link>
          <Link to='add-student' className='menu-link'><i className  ="fa-solid fa-circle-user mr-2"></i>Add Student</Link>
          <Link to='all-student' className='menu-link'><i className='fa-solid fa-user-group mr-2'></i>All Student</Link>
          <Link to='collect-fee' className='menu-link'><i className='fa solid fa-money-bill mr-2'></i> Collect Fee</Link>
          <Link to='payment-history' className='menu-link'><i className='fa-solid fa-list mr-2'></i>Payment History</Link>
        </div>
        <div className='absolute bottom-8 text-white text-xs'>
          <p className='font-semibold text-sm'>Contact Developer</p>
          <p className='pointer'><i className='fa-solid fa-phone my-2 mr-2'></i>8709338363</p>
          <p><i className="fa-solid fa-square-envelope mr-2"></i>surajshk1995@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
