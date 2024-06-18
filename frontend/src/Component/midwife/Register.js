import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for HTTP requests
import './MidwifeRegistrationForm.css';
import Footer from '../../Component/footer';
import "./LoginFormMidwife.css";
import logo from "../Assets/logo.png";

function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    address: "",
    license: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => { // Corrected preventDefault
    e.preventDefault(); // Corrected spelling of preventDefault

    try {
      await sendRequest();
      alert("Registration Success");
      history('/logout');
    } catch (error) {
      alert(error.message);
    }
  };

  const sendRequest = async () => {
    try {
      await axios.post("http://localhost:8090/register", {
        name: String(user.name),
        address: String(user.address),
        license: String(user.license),
        email: String(user.email),
        phone: String(user.phone),
        password: String(user.password)
      });
    } catch (error) {
      throw new Error("Registration failed. Please try again."); // Throw error for catch block
    }
  };

  return (
    <div>
      <div className="App">
        <a href='/'><img src={logo} className="App-logo" alt="logo" style={{ width: '70px', height: '100px', marginTop: '15px', marginLeft: '83px' }} /></a>
        <h4 style={{ marginTop: '5px', marginLeft: '20px' }}>Ministry Of Health</h4>
        <div className="login-container">
         
          <div className="">
            <div>
    <div className="registration-form-container">
      <h2>Midwife Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            name='name'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={user.address}
            name='address'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>License Number:</label>
          <input
            type="text"
            value={user.license}
            name='license'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            value={user.email}
            name='email'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={user.phone}
            name='phone'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={user.password}
            name='password'
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="button2" type="submit">Register</button>
      </form>
      
    </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  
  );
}

export default Register;
