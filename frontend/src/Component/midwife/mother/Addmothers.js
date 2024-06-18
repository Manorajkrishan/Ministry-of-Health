import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

export default function AddMothers() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [bloodgroup, setBloodgroup] = useState('AB+');
  const [pregnantmonthcount, setPregnantmonthcount] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [lastconsult, setLastconsult] = useState('');
  const [nextconsult, setNextconsult] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Active');
  const [age, setAge] = useState('');
  const [proofPhoto, setProofPhoto] = useState(null);

  const addMother = (e) => {
    e.preventDefault();

    // Calculate age based on dob
    const calculatedAge = calculateAge(dob);

    // Create a new FormData object
    const formData = new FormData();

    // Append form data to the FormData object
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("bloodgroup", bloodgroup);
    formData.append("pregnantmonthcount", pregnantmonthcount);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("lastconsult", lastconsult);
    formData.append("nextconsult", nextconsult);
    formData.append("email", email);
    formData.append("status", status);
    formData.append("age", calculatedAge); // Append the calculated age
    formData.append("proofPhoto", proofPhoto); // Append the proofPhoto file

    axios.post('http://localhost:8090/motherdetails/addmother', formData)
      .then(() => {
        alert("Mother Added");
        window.location.href="/allmother";
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleReset = () => {
    setName("");
    setDob("");
    setBloodgroup("AB+");
    setPregnantmonthcount("");
    setContact("");
    setAddress("");
    setLastconsult("");
    setNextconsult("");
    setEmail("");
    setStatus("Active");
    setAge("");
    setProofPhoto(null);
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const maxDobDate = new Date('2004-12-31').toISOString().split('T')[0];

  const handleDateChange = (e) => {
    const dob = e.target.value;
    setDob(dob);
    const calculatedAge = calculateAge(dob);
    setAge(calculatedAge);
  };

  const handlePhotoUpload = (e) => {
    setProofPhoto(e.target.files[0]);
  };

  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className='tableMother'>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Pregnant Mothers</h1>
        </div>
        <div className="col py-3">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/allmother">Maternal health management</a></li>
                  <li className="breadcrumb-item active">New Mother</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <form onSubmit={addMother}>
          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const regex = /^[A-Za-z ]+$/; // Regular expression to allow letters, numbers, and spaces
              
                  if (regex.test(inputValue) || e.nativeEvent.inputType === "deleteContentBackward") {
                    setName(inputValue);
                  }
                }}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={dob}
                onChange={handleDateChange}
                max={maxDobDate}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={age}
                disabled
              />
            </div>
          </div>
          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="bloodgroup">Blood Group : </label>
              <select
                id="bloodgroup"
                name="bloodgroup"
                className="form-control"
                value={bloodgroup}
                onChange={(e) => setBloodgroup(e.target.value)}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="pregnantmonthcount">Number of months being pregnant:</label>
              <input
                type="number"
                className="form-control"
                id="pregnantmonthcount"
                name="pregnantmonthcount"
                value={pregnantmonthcount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[1-9]$/.test(value) || value === '10') {
                    setPregnantmonthcount(value);
                  }
                }}
                placeholder="Number of months being pregnant"
                required
              />
            </div>
          </div>
          <div className="row form-group mb-4">
                <div className="col">
                  <label htmlFor="tel">Telephone : </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+94</span>
                    </div>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      name="tel"
                      placeholder="771234567"
                      maxLength="9"
                      minLength="9"
                      title="Please enter a valid telephone number."
                      value={contact}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const regex = /^[0-9]+$/; // Regular expression to allow letters, numbers, and spaces
                    
                        if (regex.test(inputValue) || e.nativeEvent.inputType === "deleteContentBackward") {
                          setContact(inputValue);
                        }
                      }}
                      required
                    />
                  </div>
            </div>
            <div className="col">
              <label htmlFor="address">Address : </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                required
              />
            </div>
          </div>
          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="lastconsult">Last consulted date:</label>
              <input
                type="date"
                className="form-control"
                id="lastconsult"
                name="lastconsult"
                value={lastconsult}
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  const currentDate = new Date();
                  if (selectedDate <= currentDate) {
                    setLastconsult(e.target.value);
                  }
                }}
                max={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="nextconsult">Next consulting date : </label>
              <input
                type="date"
                className="form-control"
                id="nextconsult"
                name="nextconsult"
                value={nextconsult}
                onChange={(e) => setNextconsult(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                minLength="12"
                maxLength="64"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="proofPhoto">Proof Photo (Ex: NIC/Passport):</label>
              <input
                type="file"
                className="form-control"
                id="proofPhoto"
                name="proofPhoto"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e)}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="status">Status : </label>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={() => setStatus("Active")}
                />
                Active
                <i> </i>
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={() => setStatus("Inactive")}
                />
                Inactive
              </div>
            </div>
          </div>
          <br />
          <div>
            <button type="submit" className="btn btn-primary">Add Mother</button>
            <i> </i>
            <button type="button" className="btn btn-primary" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
