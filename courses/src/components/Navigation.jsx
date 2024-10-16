import React from 'react';
import ngeno from "../assets/images/ngeno.png";
//import icons

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
                    <li className="nav-item">Dashboard</li>
                    <li className="nav-item">Course</li>
                    <li className="nav-item">Chat</li>
                    <li className="nav-item">Settings</li>
                </ul>
            </div>
           
        </div>
    );
};
export default Navigation;