import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AddMothers() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodgroup, setBloodgroup] = useState('AB+');
  const [pregnantmonthcount, setPregnantmonthcount] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [lastconsult, setLastconsult] = useState('');
  const [nextconsult, setNextconsult] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Active');

  const addMother = (e) => {
    e.preventDefault();

    const newMother = {
      name,
      age,
      bloodgroup,
      pregnantmonthcount,
      contact,
      address,
      lastconsult,
      nextconsult,
      email,
      status
    };

    axios.post('http://localhost:8090/motherdetails/addmother', newMother)
      .then(() => {
        alert("Mother Added");
        window.location.href="/allmother";
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleReset = () => {
    // Reset all state variables to their initial values
    setName("");
    setAge("");
    setBloodgroup("AB+");
    setPregnantmonthcount("");
    setContact("");
    setAddress("");
    setLastconsult("");
    setNextconsult("");
    setEmail("");
    setStatus("Active");
  };

  return (
    <div>
      <div>
        <Header/>
        <Sidebar/>
      </div>
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
          {/* <div className="col text-end fw-lighter">
            <b>UserId</b>
          </div> */}
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
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>

          <div className="col">
            <label htmlFor="age">Age :</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="20"
              placeholder="Age"
              required
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
            <label htmlFor="pregnantmonthcount">Number of months being pregnant :</label>
            <input
              type="number"
              className="form-control"
              id="pregnantmonthcount"
              name="pregnantmonthcount"
              value={pregnantmonthcount}
              onChange={(e) => setPregnantmonthcount(e.target.value)}
              min="1"
              max="10"
              placeholder="Number of months being pregnant"
              required
            />
          </div>
        </div>

        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="contact">Telephone : </label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Telephone"
              pattern="[0-9]{10}"
              maxLength="10"
              minLength="10"
              title="Please enter a 10-digit telephone number"
              required
            />
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
            <label htmlFor="lastconsult">Last consulted date : </label>
            <input
              type="date"
              className="form-control"
              id="lastconsult"
              name="lastconsult"
              value={lastconsult}
              onChange={(e) => setLastconsult(e.target.value)}
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
          <button type="submit" className="btn btn-primary" data-bs-toggle="modal" id="addButton" data-bs-target="#deleteModal" >Add Mother</button>
          <i> </i>
          <button type="button" className="btn btn-primary" id="resetButton" onClick={handleReset}>Reset</button>
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
                <b>New record is successfully added.</b><br />
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
