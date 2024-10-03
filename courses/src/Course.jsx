import React, {useState, useEffect} from 'react';
import allCourses from "./courses.json";

const Course = () => {
    const [courses,setCourses] = useState([]);
    useEffect(() => {
        setCourses(allCourses.courses);
    },[]);
    console.log(courses);
  
    //JSX to be returned
    return (
        <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.course_code}: {course.title}
          </li>
          ))
        }
      </ul>
    </div>
    );
  };
  export default Course;