import React, { useEffect, useState } from 'react';

const SidebarMidwife = () => {
  const [selectedLink, setSelectedLink] = useState('');

  useEffect(() => {
    // Getting the pathname when component mounts
    setSelectedLink(window.location.pathname);
  }, []);

  const handleNavLinkClick = (path) => {
    setSelectedLink(path);
  };

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className={`nav-link ${selectedLink === '/home' ? 'clicked' : ''}`} href="/home" onClick={() => handleNavLinkClick('/home')}>
              <b><i className="bi bi-people-fill"></i> Home</b> 
              <hr /> 
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${selectedLink === '/allcouple' ? 'clicked' : ''}`} href="/allcouple" onClick={() => handleNavLinkClick('/allcouple')}>
              <b><i className="bi bi-people-fill"></i> Newly Married Couple Management</b>
              <hr />
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${selectedLink === '/allmothers' ? 'clicked' : ''}`} href="/allmothers" onClick={() => handleNavLinkClick('/allmothers')}>
              <b><i className="bi bi-gender-female"></i> Pregnant Mothers Management</b>
              <hr />
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${selectedLink === '/allbaby' ? 'clicked' : ''}`} href="/allbaby" onClick={() => handleNavLinkClick('/allbaby')}>
              <b><i className="bi bi-file-earmark-person"></i> Newborn's Information Management</b>
            </a>
            <hr />
          </li>
          <li className="nav-item">
            <a className={`nav-link ${selectedLink === '/logout' ? 'clicked' : ''}`} href="/logout" onClick={() => handleNavLinkClick('/logout')}>
              <b><i className="bi bi-box-arrow-right"></i> Logout</b>
            </a>
            <hr />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SidebarMidwife;
