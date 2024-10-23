import React, { useState, useEffect } from 'react';
import ngeno from "../assets/images/ngeno.png";
//import icons
import { BsGrid, BsGear, BsChatDots, BsCardChecklist } from "react-icons/bs";

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('');
    const [hoveredLink, setHoveredLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setHoveredLink('');
    };

    // useEffect to handle side effects if needed, e.g., logging the active link
    useEffect(() => {
        if (activeLink) {
            console.log(`Active link is: ${activeLink}`);
        }
    }, [activeLink]);

    return (
        <div className='nav'>
            <h1>Estudy</h1>
            <div className="student-img">
                <img src={ngeno} alt="student" />
            </div>

            <h2>Ngeno Victor</h2>
            <p>engenovic@gmail.com</p>
            <nav className="nav-list">
                <ul>
                    <li 
                        className={`nav-item ${activeLink === 'dashboard' ? 'active' : ''} ${hoveredLink === 'dashboard' ? 'hovered' : ''}`}
                        onClick={() => handleLinkClick('dashboard')}
                        onMouseEnter={() => handleMouseEnter('dashboard')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/" className="nav-link"><BsGrid className='nav-icons' />Dashboard</a>
                    </li>
                    <li 
                        className={`nav-item ${activeLink === 'course' ? 'active' : ''} ${hoveredLink === 'course' ? 'hovered' : ''}`}
                        onClick={() => handleLinkClick('course')}
                        onMouseEnter={() => handleMouseEnter('course')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/" className="nav-link"><BsCardChecklist className='nav-icons' />Course</a>
                    </li>
                    <li 
                        className={`nav-item ${activeLink === 'chat' ? 'active' : ''} ${hoveredLink === 'chat' ? 'hovered' : ''}`}
                        onClick={() => handleLinkClick('chat')}
                        onMouseEnter={() => handleMouseEnter('chat')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/" className="nav-link"><BsChatDots className='nav-icons' />Chat</a>
                    </li>
                    <li 
                        className={`nav-item ${activeLink === 'settings' ? 'active' : ''} ${hoveredLink === 'settings' ? 'hovered' : ''}`}
                        onClick={() => handleLinkClick('settings')}
                        onMouseEnter={() => handleMouseEnter('settings')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/" className="nav-link"><BsGear className='nav-icons' />Settings</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
