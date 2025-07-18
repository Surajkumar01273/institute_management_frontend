import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    findCourse();
  }, []);

  const findCourse = () => {
    axios
      .get(
        'https://institute-management-system-backend.onrender.com/course/all-courses',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then(
        (course) => (
          // console.log(course),
          setCourses(course.data.allCourses),
          console.log(course.data.allCourses)
        )
      )
      .catch((error) => {
        console.log('course notfound', error);
        toast.error('some things wrong....');
      });
  };
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:p-4 overflow-y-auto bg-gray-200'>
        {courses.map((course) => (
          <div
            key={course._id}
            className='bg-white p-2 cursor-pointer shadow-black hover:shadow-xl transition duration-700'
          >
            <div className='mb-2'>
              <img
                className='h-[200px] md:h-[150px] rounded-lg w-full md:w-[270px]'
                src={course.imageUrl}
                alt='course pic'
              />
            </div>
            <div className='px-2'>
              <h2 className='text-lg font-semibold'>{course.courseName}</h2>
              <p className='text-sm text-black py-2'>{course.description}</p>
              <p className='text-xs text-zinc-600'>Starting Date : {course.startingDate}</p>
              <p className='text-xs text-zinc-600'>End Date : {course.endDate}</p>
              <p className='text-sm text-zinc-800 py-2 font-semibold'>₹{course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Course;
