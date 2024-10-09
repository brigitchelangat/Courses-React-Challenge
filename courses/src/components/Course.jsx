import React, {useState, useEffect} from 'react';
import allCourses from "../data/courses.json";
import ngeno from "../assets/images/ngeno.png";
import brigitimage from "../assets/images/brigitimage.jpeg";
import roy from "../assets/images/roy.jpg";
import defaultI from "../assets/images/default.png"
import SE from "../assets/images/SE.jpg";
import Web from "../assets/images/Web.jpg";
import Cloud from "../assets/images/Cloud.jpg";
import DataS from "../assets/images/DataS.jpg";
import AI from "../assets/images/AI.jpg";


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

  /*const DomainImages = {
      'Software Engineering': '../images/SE.jpg',
      'User Interface Design': '../images/UI.png',
      'Web Development': '../images/Web.jpg',
      'Cloud Computing': '../images/Cloud.jpg',
      'Data Science': '../images/DataS.jpg',
      'Artificial Intelligence': '../images/AI.jpg'

    };
    */
    //JSX to be returned
    return (
      <div>
          {
          courses.map((course) => ( 
              <div className="course-card">
              <img src={getCourseImage(course.domain)} alt="Course" className="course-image" />
              <p className="course-title">{course.title}</p>
              <img src= {(course.instructor === "Ngeno Victor") ? ngeno : 
              (course.instructor === "Roy Kiprop")? roy : (course.instructor === "Brigit Chelangat")? brigitimage:defaultI } 
              alt="Instructor" className="instructor-image" />
              <span className="instructor-name">{course.instructor}</span>

            </div>   
          ))
        }
        
      </div>
      
    );
  };
  export default Course;