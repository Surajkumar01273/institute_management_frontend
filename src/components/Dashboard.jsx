import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../components/style.css';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [humburger, setHumburger] = useState(true);

  function logoutHandler() {
    navigate('/login');
    localStorage.clear();
  }

  function handleHumburger() {
    setHumburger(!humburger);
  }

  return (
    <div className='dashboard-main-container'>
      <div className='md:w-[97%] w-full h-full md:h-[95%] md:overflow-hidden rounded-sm'>
        <div className='top-bar py-1 h-[8vh] w-[100%] bg-slate-400'>
          <div className='flex justify-end mr-4 items-center'>
            <div className='bg-slate-300 rounded-full w-10 h-10 mb-3 flex justify-center items-center mr-2'>
              <img
                className='h-8 w-8 rounded-full'
                src={localStorage.getItem('imageUrl')}
                alt=''
              />
            </div>

            <div>
              <p className='text-xs font-semibold pb-2'>
                {localStorage.getItem('instituteName')}
              </p>
              <button
                onClick={logoutHandler}
                className='bg-pink-600 px-3 text-white font-semibold hover:bg-pink-800 py-1 rounded-sm text-xs cursor-pointer'
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main container */}

        <div className='main-container w-[100%] md:h-[87vh] flex flex-col md:flex-row'>
          <div className=''>
            <div
              onClick={handleHumburger}
              className='py-2 bg-slate-200 md:hidden'
            >
              {humburger ? (
                <i className='pl-2 pt-2 fa-solid fa-bars'></i>
              ) : (
                <i className='w-full fa-solid fa-xmark'><Sidebar /></i>
              )}
            </div>
            <div className='pl-0 hidden md:block w-[100%]'>
              <Sidebar />
            </div>
          </div>
          {/* top nav bar */}

          {/* Main Container */}

          <div className='bg-white h-full md:overflow-y-scroll min-h-[100vh] w-full'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
