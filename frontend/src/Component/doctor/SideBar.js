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
    <nav id="sidebarMenu" className="position-fixed top-0 start-0 col-md-3 col-lg-2 d-md-block bg-light sidebar">
    <div className="position-sticky pt-3 sidebar-sticky">
      <Link className="nav-link" aria-current="page" to="/home">
        <h1>Doctor</h1>
      </Link>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/doctorhome">
            <b><i className="bi bi-people-fill"></i>Home</b>
            <hr />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/homevaccine">
            <b><i className="bi bi-people-fill"></i>Vaccination</b>
            <hr />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/homedoctor">
            <b><i className="bi bi-gender-female"></i> Student Care</b>
            <hr />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logoutdoctor">
            <b><i className="bi bi-gender-female"></i> Logout</b>
            <hr />
          </Link>
        </li>

        
      </ul>
    </div>
  </nav>
  );
};

export default SideBar;
