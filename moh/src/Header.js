import React from 'react';
import './CSS/Header.css';

const Header = () => {
  return (
    <div className="header">
    <div className="logo">MOH Doctor</div>
    
    <button className="logout-button">Log Out</button>
  </div>
  );
}

export default Header;
