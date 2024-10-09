import React, {useState, useEffect} from 'react';
import allCourses from "../data/courses.json";
import ngeno from "../assets/images/ngeno.png";
import brigitimage from "../assets/images/brigitimage.jpeg";
import roy from "../assets/images/roy.jpg";


console.log(ngeno);

 // Map instructor to image
 const instructorImages = {
  'Ngeno Victor': '/images/ngeno.png',
  'Brigit Chelangat': '/images/brigitimage.jpeg',
  'Roy Kiprop': '/images/roy.jpg'
};

const Course = () => {
    const [courses,setCourses] = useState([]);
    useEffect(() => {
        setCourses(allCourses.courses);
    },[]);
    console.log(courses);

    /*
    const [instructorImageSrc,setinstructorImageSrc] = useState('');
    useEffect(() => {
      if(instructorImages[course.instructor]){
        setinstructorImageSrc(instructorImages[instructor]);
      }else{
        setinstructorImageSrc('../images/default.png')
      }
    },[instructor])

    /*const DomainImages = {
      'Software Engineering': '../images/SE.jpg',
      'User Interface Design': '../images/UI.png',
      'Web Development': '../images/Web.jpg',
      'Cloud Computing': '../images/Cloud.jpg',
      'Data Science': '../images/DataS.jpg',
      'Artificial Intelligence': '../images/AI.jpg'

    };
    */

    // Determine the image source based on the instructor name
    //const instructorImageSrc = instructorImages[course.instructor] || 'images/default.png'; 
    //const domainImageSrc = DomainImages[post.domain] || 'images/default.png'; 

  
    //JSX to be returned
    return (
      <div>
          {
          courses.map((course) => ( 
              <div className="course-card">
              <img src="" alt="Course" className="course-image" />
              <p className="course-title">{course.title}</p>
              <img src= {(course.instructor === "Ngeno Victor") ? ngeno : (course.instructor === "Roy Kiprop")? roy : brigitimage } 
              alt="Instructor" className="instructor-image" />
              <span className="instructor-name">{course.instructor}</span>

            </div>   
          ))
        }
        
      </div>
      
    );
  };
  export default Course;