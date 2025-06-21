import React from 'react';
import Sidebar from '../components/Sidebar';
import '../components/style.css';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dashboard-main-container'>
      <div className='w-[97%] h-[95vh] bg-white rounded-sm flex flex-row overflow-hidden'>
      <Sidebar />

        {/* Main container */}

        <div className='main-container w-[80%] h-[95vh] bg-red-400'>

          {/* top nav bar */}

          <div className='top-bar py-1 h-[8vh] w-[100%]'>
            <div className='flex justify-end mr-4 items-center'>
              <div className='bg-slate-300 rounded-full w-10 h-10 mb-3 flex justify-center items-center mr-2'>
                <img
                  className='h-8 w-8 rounded-full'
                  src={localStorage.getItem('imageUrl')}
                  alt=''
                />
              </div>
              <div>
                <p className='text-xs font-semibold pb-2'>{localStorage.getItem('instituteName')}</p>
                <button className='bg-pink-600 px-3 text-white py-1 rounded-sm text-xs'>Logout</button>
              </div>
            </div>
          </div>

          {/* Main Container */}

            <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
