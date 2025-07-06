import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Course() {
  const [courses, setCourses] = useState('')
   console.log('coursec', courses);
  useEffect(()=>{ 
    findCourse()
  },[])

  const findCourse = async()=>{
    return
    const course = await axios.get('https://institute-management-system-backend.onrender.com/course/all-course')  
    .then(
      setCourses(course),
       console.log(course)
    )
    .catch((error)=>{
      console.log("course notfound", error);
      
    })
  }
  return (
    <>
    {
      courses.map((course)=>(
        <div key={index}>
          <p>{course.name}</p>
        </div>
      ))
    }
    </>
  )
}

export default Course
