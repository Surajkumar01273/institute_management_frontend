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
      <div className='flex gap-4'>
        {courses.map((course) => (
          <div key={course._id} className='bg-amber-200 w-[250px] h-[300px]'>
              <div className=''>
                <img
                  className='h-[150px] w-[250px]'
                  src={course.imageUrl}
                  alt='course pic'
                />
              </div>
              <div>
                <h2>{course.courseName}</h2>
                <p>{course.description}</p>
                <p>{course.startingDate}</p>
                <p>{course.endDate}</p>
                <p>{course.price}</p>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Course;
