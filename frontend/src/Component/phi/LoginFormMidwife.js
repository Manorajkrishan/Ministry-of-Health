import React, { useState } from 'react';
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { TiLockClosed } from "react-icons/ti";
import logo from "../Assets/logo.png"
// import HeaderPHI from './DiseaseManagement/Header/Header';
// import DMsideNav from './DiseaseManagement/DMNav/DMsideNav';

function LoginFormPhi() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'phi@123' && password === '123456789') {
      alert("Login Success")
      window.location.href="/PHI/home";
      
    } else {
      alert("Enter correct username and password")
      setError('Invalid username or password');
    }
  }

  return (
    <>
                {/* <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}> */}
    <div className="App">
      <a href='/'><img src={logo} className="App-logo" alt="logo" style={{ width: '70px', height: '100px', marginTop: '15px', marginLeft: '83px' }} /></a>
      <h4 style={{ marginTop: '5px', marginLeft: '20px' }}>Ministry Of Health</h4>
      <div className="login-container">
        <h4 className="logintitle">PHI</h4>
        <div className="wrapper">
          <div>
            <h1>Log In</h1>
            <div className='input-box'>
              <label htmlFor="username">Username : </label>
              <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} placeholder="Enter Username" required />
              <FaUser className="icon" /><br />
            </div>

            <div className="input-box">
              <label htmlFor="password">Password : </label>
              <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Enter password" required />
              <TiLockClosed className="icon" /><br />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br /><br />
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password</a>
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
            <div className="register-link">
              <p><a href="/">Go Back</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
    </>
  )
}

export default LoginFormPhi;