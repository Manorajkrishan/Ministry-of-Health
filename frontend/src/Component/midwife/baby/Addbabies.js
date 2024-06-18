import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

export default function AddBabies() {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [BloodType, setBloodType] = useState("");
  const [Allergies, setAllergies] = useState("");
  const [date, setdate] = useState("");
  const [phone, setphone] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");

  const addBaby = (e) => {
    e.preventDefault();

    const newBaby = {
      Name,
      Gender,
      Weight,
      Height,
      BloodType,
      Allergies,
      date,
      phone,
      Email,
      Address
    }

    axios.post("http://localhost:8090/babydetails/addbaby", newBaby)
      .then(() => {
        alert("Baby Added");
        window.location.href="/allbaby";
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <div className='dashBaby'><h1 className="h2">Baby</h1></div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button className="btn btn-sm btn-outline-secondary">?</button>
          </div>
        </div>
      </div>

      <div className="AllTableAdd col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <p >
                <a href="/allbaby">Add Baby / </a>
                New Baby
              </p>
            </nav>
          </div>
          <div className="col text-end fw-lighter">
            <b>UserId</b>
          </div>
        </div>

        <form onSubmit={addBaby}>

        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="Name">Name</label>
            <input 
  type="text" 
  className="form-control" 
  id="Name" 
  name="Name" 
  placeholder="Name" 
  onChange={(e) => {
    const input = e.target.value;
    // Replace any non-alphabetic characters with an empty string
    const sanitizedInput = input.replace(/[^A-Za-z]+/g, '');
    setName(sanitizedInput);
  }} 
  value={Name} 
  required 
/>
</div>

<div className="col">
            <label htmlFor="Gender">Gender</label>
            <select className="form-control" id="Gender" name="Gender" onChange={(e) => {
              setGender(e.target.value);
            }} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="Weight">Weight (kg)</label>
            <input 
              type="text" 
              className="form-control" 
              id="Weight" 
              name="Weight" 
              placeholder="Weight" 
              pattern="[0-9]+(\.[0-9]+)?" 
              title="Please enter a valid weight" 
              onChange={(e) => {
                setWeight(e.target.value);
              }} 
              required 
            />
          </div>

          <div className="col">
            <label htmlFor="Height">Height (cm)</label>
            <input 
              type="text" 
              className="form-control" 
              id="Height" 
              name="Height" 
              placeholder="Height" 
              pattern="[0-9]+(\.[0-9]+)?" 
              title="Please enter a valid height" 
              onChange={(e) => {
                setHeight(e.target.value);
              }} 
              required 
            />
          </div>
        </div>

          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="BloodType">Blood Type</label>
              <input type="text" className="form-control" id="BloodType" name="BloodType" placeholder="Blood Type" onChange={(e) => setBloodType(e.target.value)} required />
            </div>

            <div className="col">
              <label htmlFor="Allergies">Allergies</label>
              <input type="text" className="form-control" id="Allergies" name="Allergies" placeholder="Allergies" onChange={(e) => setAllergies(e.target.value)} required />
            </div>
          </div>

          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="date">Date of Birth</label>
              <input type="date" className="form-control" id="date" name="date" onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  const currentDate = new Date();
                  if (selectedDate <= currentDate) {
                    setdate(e.target.value);
                  }
                }}
                max={new Date().toISOString().split('T')[0]} required />
            </div>

            <div className="col">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" className="form-control" id="phone" name="phone" placeholder="07X-XXXXXXX" pattern="07[0-9]{8}" maxLength={10} minLength={10} title="Phone number should start with 07 and have a total of 10 digits" onChange={(e) => {
              setphone(e.target.value);
            }} required />

          </div>
        </div>
          <div className="form-group mb-4">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="Email" id="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="details">Address</label>
            <textarea className="form-control" name="Address" id="Address" cols="10" rows="6" placeholder="Address" onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>

          <div className="form-group mb-4">
            <button type="submit" className="btn btn-primary">Add Baby</button>
          </div>
        </form>

        <div className="modal fade" tabIndex="-1" role="dialog" id="deleteModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title"></div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  <b>New baby is successfully added.</b><br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
