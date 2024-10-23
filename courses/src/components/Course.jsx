import React, {useState, useEffect} from 'react';
import allCourses from "../data/courses.json";
import defaultI from "../assets/images/default.png"
import SE from "../assets/images/SE.jpg";
import Web from "../assets/images/Web.jpg";
import Cloud from "../assets/images/Cloud.jpg";
import DataS from "../assets/images/DataS.jpg";
import AI from "../assets/images/AI.jpg";
import { FaRegUser } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";




const Course = () => {
    const [courses,setCourses] = useState([]);
    useEffect(() => {
        setCourses(allCourses.courses);
    },[]);

    // Switching course images
    const getCourseImage = (title) => {
      switch (title) {

        case 'Software Engineering':
          return SE;
        
        case 'Web Development':
          return Web;

        case 'Cloud Computing':
          return Cloud;

        case 'Data Science':
          return DataS;

        case 'Artificial Intelligence':
          return AI;

        default:
          return defaultI;
      }
    };

    //JSX to be returned
    return (
      <div className='courses'>
          {
          courses.map((course) => ( 
           
              
              <div className="course-card">
                <div className="course-image">
                  <img src={getCourseImage(course.domain)} alt="Course" />
                </div>
                <div className='course-details'>
                  <p className="course-title">{course.title}</p>
                  <FaRegUser className='course-icons first-icon' />
                  <span >{course.instructor}</span>
                  <BsClock className='course-icons' />
                  <span >{course.hours} Hours</span>
                  <BsGlobe className='course-icons' />
                  <span >Online</span>
                  <p className='course-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Possimus fuga maxime debitis exercitationem cupiditate neque accusantium dolores? Ratione enim alias debitis,
                    illum temporibus at corrupti atque nobis, aliquam inventore esse!
                  </p>
                </div>
                
              </div>  
            
          ))
        }
        
      </div>
      
    );
  };
  export default Course;