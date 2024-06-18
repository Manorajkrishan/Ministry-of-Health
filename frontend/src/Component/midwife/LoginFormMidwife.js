import React, { useState } from 'react';
import "./LoginFormMidwife.css";
import { FaUser } from "react-icons/fa";
import { TiLockClosed } from "react-icons/ti";
import logo from "../Assets/logo.png";
import Footer from '../../Component/footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for HTTP requests

function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendRequest();
      if (response.data.status === "ok") { // Check the response data for "ok"
        alert("Login success");
        history("/home");
      } else {
        alert("Login error");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const sendRequest = async () => {
    try {
      return await axios.post("http://localhost:8090/login", {
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      throw new Error("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="App2">
        <a href='/'><img src={logo} className="App-logo" alt="logo" style={{ width: '70px', height: '100px', marginTop: '15px', marginLeft: '83px' }} /></a>
        <h4 style={{ marginTop: '5px', marginLeft: '20px' }}>Ministry Of Health</h4>
        <div className="login-container2">
          <h4 className="logintitle2">Midwife</h4>
          <div className="wrapper2">
            <div>
              <h1>Log In</h1>
              <div className='input-box2'>
                <label htmlFor="username">Gmail : </label>
                <input type="text" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter Email" required />
                <FaUser className="icon" /><br />
              </div>
              <br></br>
              <div className="input-box2">
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Enter password" required />
                <TiLockClosed className="icon" /><br />
              </div>
              <br /><br />
              <div className="remember-forgot">
                <a href="#">Forgot password</a>
              </div>
              <button type="submit" onClick={handleSubmit}>Login</button>
              <div className="register-link">
                <p>Don't have an account? <a href="regi">Register</a></p>
              </div>
              <div className="register-link">
                <p><a href="/login">Go Back</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;
