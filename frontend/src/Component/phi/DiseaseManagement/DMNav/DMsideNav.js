import React, { useEffect,useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDisease } from 'react-icons/fa'; // Import an icon from the 'fa' (Font Awesome) library
import { MdFactory } from 'react-icons/md'; // Import an icon from the 'md' (Material Design) library
import { IoSchool } from 'react-icons/io5'; // Import an icon from the 'io5' (Ionicons) library
import './DMsideNav.css';

function DMsideNav() {
    const [selectedLink, setSelectedLink] = useState('');

    useEffect(() => {
        // Getting the pathname when component mounts
        setSelectedLink(window.location.pathname);
    }, []);

    const handleNavLinkClick = (path) => {
        setSelectedLink(path);
    };

    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className={"nav-link " + (selectedLink === '/PHI/home' ? 'clicked' : '')} href="/PHI/home" onClick={() => handleNavLinkClick('/PHI/home')}>
                                <b><i className="bi bi-people-fill"></i> Home</b>
                            </a>
                            
                            <hr />
                        </li>
                        <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle " + (selectedLink === '' ? 'clicked' : '')} href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b><i className="bi bi-people-fill"></i> Disease Management</b>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{ marginLeft: '30px', fontSize: '11px' }}>
                                <a className="dropdown-item" href="/disease/list">Infectious disease Management</a>
                                <a className="dropdown-item" href="/AwarenessSession/display">Awareness session  management</a>
                                <a className="dropdown-item" href="/patients/list">Infectious disease patient management</a>
                                {/* <a className="dropdown-item" href="/disease/listReport">pdf generation disseases</a> */}
                                <a className="dropdown-item" href="/dm/report">Report management</a>

                            </div>
                            <hr />
                        </li>
                        <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle " + (selectedLink === '' ? 'clicked' : '')} href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b><i className="bi bi-people-fill"></i> School Health Management</b>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <a class="dropdown-item" href="/allstud">Student Management</a>
                            <a class="dropdown-item" href="/allschool">School Management</a>

                            <a class="dropdown-item" href="/studreport">Student Reports</a>

                            </div>
                            <hr />
                        </li>
                        <li className="nav-item dropdown">
                            <a className={"nav-link dropdown-toggle " + (selectedLink === '' ? 'clicked' : '')} href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b><i className="bi bi-people-fill"></i>Factory Management</b>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <a class="nav-link dropdown-toggle" href="/factory/display" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false"><MdFactory />
                            Factory management
                        </a>
                              
                            </div>
                            <hr />
                        </li>

                        <li className="nav-item">
                            <a className={"nav-link " + (selectedLink === '' ? 'clicked' : '')} href="" onClick={() => handleNavLinkClick('/logout')}>
                                <b><i className="bi bi-box-arrow-right"></i>User Profile</b>
                            </a>
                            <hr />
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link " + (selectedLink === '/phi/logout' ? 'clicked' : '')} href="/phi/logout" onClick={() => handleNavLinkClick('/logout')}>
                                <b><i className="bi bi-box-arrow-right"></i> Logout</b>
                            </a>
                            <hr />
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default DMsideNav;