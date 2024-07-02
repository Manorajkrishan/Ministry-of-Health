import React, { useEffect } from 'react';
//import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/home">
              <b><i className="bi bi-people-fill"></i> Home</b> 
              <hr /> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="">
              <b><i className="bi bi-people-fill"></i> Newly Married Couple &nbsp;&nbsp;&nbsp; Management</b>
              <hr />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <b><i className="bi bi-gender-female"></i> Pregnant Mothers Managements</b>
              <hr />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/allbaby">
              <b><i className="bi bi-file-earmark-person"></i> Baby's information and vaccination Managements</b>
            </a>
            <hr />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
