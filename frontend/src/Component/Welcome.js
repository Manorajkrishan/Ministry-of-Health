import React from 'react';
import './HomePage.css';
import './logo2.jpg'; // Import CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="buttons-container">
       <a href="PhiLogin"><button className="button"><h3>PHI</h3></button></a>
        <a href="loginMidwife"><button className="button" ><h3>Midwife</h3></button></a>
        <a href="loginDoctor"><button className="button"><h3>Doctor</h3></button></a>
      </div>
    </div>
  );
}

export default HomePage;
