import React from 'react';
import Sidebar from "./sidebar";



const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px', // Adjust padding according to your design
    // Add any other styles you need
  };

  const containerStyle = {
    display: 'flex',
    minHeight: '100vh', // Set minimum height to fill the viewport
  };

  return (
    <div style={containerStyle}>
      <div style={{ flex: 1 }}>
        <nav style={navbarStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>PHI Navbar</span>
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: '5px',
                borderRadius: '3px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>
        </nav>
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
