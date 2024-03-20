import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.pathname;

    links.forEach(link => {
      if (link.getAttribute('href') === currentUrl) {
        link.classList.add('clicked');
      }

      link.addEventListener('click', function() {
        links.forEach(otherLink => {
          otherLink.classList.remove('clicked');
        });

        this.classList.add('clicked');
      });
    });
  }, []);

  return (
    <div>
        
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              <b><i className="bi bi-people-fill"></i> Home</b>
            </a>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="./HealthHome">
              <b><i className="bi bi-people-fill"></i>Student's Health Management</b>
            </Link>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="/index2">
              <b><i className="bi bi-gender-female"></i> Vaccination  Management</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              <b><i className="bi bi-file-earmark-person"></i> Management</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default SideBar;
