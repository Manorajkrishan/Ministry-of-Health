import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-offwhite sidebar collapse" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/disease-management">
              Disease Management
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={toggleSubMenu} style={{ cursor: 'pointer', color: '#000' }}>
              School Health Management
            </a>
            {showSubMenu && (
              <ul className="nav flex-column ml-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: '#000' }}>
                    Student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/allschool" style={{ color: '#000' }}>
                    School
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/inspection-of-hotels" style={{ color: '#000' }}>
              Inspection of Hotels
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar; 
;
