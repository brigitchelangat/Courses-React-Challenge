import React from 'react';
import ngeno from "../assets/images/ngeno.png";
//import icons
import { BsGrid } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";

const Navigation = () => {
    return (
        <div className='nav'>
            <h1>Estudy</h1>
            <div className="student-img">
             <img src={ngeno} alt="student" />
            </div>
            
            <h2>Ngeno Victor</h2>
            <div className="nav-list" >
                <ul>
                    <li className="nav-item"><BsGrid className='nav-icons' />Dashboard</li>
                    <li className="nav-item"><BsCardChecklist  className='nav-icons' />Course</li>
                    <li className="nav-item"><BsChatDots className='nav-icons' />Chat</li>
                    <li className="nav-item"><BsGear className='nav-icons'/>Settings</li>
                </ul>
            </div>
           
        </div>
    );
};
export default Navigation;