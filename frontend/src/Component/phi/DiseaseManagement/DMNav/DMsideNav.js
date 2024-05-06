import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaDisease } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdFactory } from "react-icons/md";
import './DMsideNav.css';

function DMsideNav() {
    // Get the current location using the useLocation hook from react-router-dom
    const location = useLocation();

    useEffect(() => {
        // Select all navigation links
        const links = document.querySelectorAll('.nav-link');

        // Loop through each link
        links.forEach(link => {
            // Check if the link's href matches the current pathname
            if (link.getAttribute('href') === location.pathname) {
                // Add the 'clicked' class to highlight the active link
                link.classList.add('clicked');
            }

            // Add a click event listener to each link
            link.addEventListener('click', () => {
                // Remove the 'clicked' class from all links
                links.forEach(otherLink => otherLink.classList.remove('clicked'));

                // Add the 'clicked' class to the clicked link
                link.classList.add('clicked');
            });
        });
    }, [location.pathname]); // Re-run the effect whenever the pathname changes

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FaDisease />

                      
                            Disease Management
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{ marginLeft: '30px', fontSize: '11px' }}>
                            
                            <a class="dropdown-item " href="/disease/list"> Infectious disease Management</a>
                            <a class="dropdown-item" href="/AwarenessSession/display">Awareness session  management</a>

                            <a class="dropdown-item" href="/patients/list">Infectious disease patient management</a>
                            {/* <a class="dropdown-item" href="/disease/report">report generation</a> */}

                            {/* <a class="dropdown-item" href="/disease/listReport">PDF generation:Disease</a> */}
                            {/* <a class="dropdown-item" href="/dm/report"> report Management</a> */}

                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><PiStudent />
                            Student Management
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/allstud">  Student Management</a>
                            <a class="dropdown-item" href="/allschool">School Management</a>
                            <a class="dropdown-item" href="/studreport">Student Reports</a>

                            <div class="dropdown-divider"></div>

                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/factory/display" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false"><MdFactory />
                            Factory management
                        </a>
                        
                    </li>
                    <li class="nav-item dropdown">
                        
                       
                    </li>
                  
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PHI Reports
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/dm/report">Disease management charts</a>
                            <a class="dropdown-item" href="#">Student management charts</a>
                            <a class="dropdown-item" href="#">factory management charts</a>

                            <div class="dropdown-divider"></div>
                        </div>
                    </li>
                    <br></br>


                    <br></br>      <br></br>


                    <div class="dropdown-divider"></div>
                    <a class="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button"  aria-haspopup="true" aria-expanded="false">
                            Profile
                        </a>                </ul>
            </div>
        </nav>
    );
}




export default DMsideNav;