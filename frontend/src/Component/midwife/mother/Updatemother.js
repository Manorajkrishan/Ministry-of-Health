import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

export default function EditMother() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState('');
  const [bloodGroup, setBloodGroup] = useState("AB+");
  const [pregnantMonthCount, setPregnantMonthCount] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [lastConsult, setLastConsult] = useState("");
  const [nextConsult, setNextConsult] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("Active");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8090/motherdetails/get/${id}`)
      .then((res) => {
        const mother = res.data.mother;
        setName(mother.name);
        setDob(mother.dob);
        setAge(mother.age);
        setBloodGroup(mother.bloodgroup);
        setPregnantMonthCount(mother.pregnantmonthcount);
        setContact(mother.contact);
        setAddress(mother.address);
        setLastConsult(mother.lastconsult);
        setNextConsult(mother.nextconsult);
        setEmail(mother.email);
        setStatus(mother.status);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  function updateMother(e) {
    e.preventDefault();
    const updatedMother = {
      name,
      dob,
      age,
      bloodgroup: bloodGroup,
      pregnantmonthcount: pregnantMonthCount,
      contact,
      address,
      lastconsult: lastConsult,
      nextconsult: nextConsult,
      email,
      status
    };

    // Send updated mother details to the server
    axios
      .put(`http://localhost:8090/motherdetails/editmother/${id}`, updatedMother)
      .then(() => {
        alert("Mother Updated");
        window.location.href = "/allmother";
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  // Function to handle deletion of a mother
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8090/motherdetails/deletemother/${userId}`).then(()=>{
      alert("Mother deleted");
      window.location.href="/allmother"
    });

  }
  
  function handleDeleteMother() {
    // Send DELETE request to delete mother record
    axios
      .delete(`http://localhost:8090/motherdetails/editmother/${id}`)
      .then(() => {
        alert("Mother Deleted");
        window.location.href = "/motherdetails";
      })
      .catch((err) => {
        alert(err.message);
      });
  }

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

  return (
    <div>
      <div>
        <Header/>
        <Sidebar/>
      </div>
      <div className='tableMother'>
      <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Edit {name}</h1>
      </div>

      <div className="col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/allmother">Maternal health management</a></li>
                <li className="breadcrumb-item active">{name}</li>
              </ol>
            </nav>
          </div>
          {/* <div className="col text-end fw-lighter">
            <b>UserId: {id}</b>
          </div> */}
        </div>
      </div>

      <form onSubmit={updateMother}>
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
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
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
              value={pregnantMonthCount}
              onChange={(e) => {
                  const value = e.target.value;
                  if (/^[1-9]$/.test(value) || value === '10') {
                      setPregnantMonthCount(value);
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
              value={lastConsult}
              onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  const currentDate = new Date();
                  if (selectedDate <= currentDate) {
                      setLastConsult(e.target.value);
                  }
              }}
              max={new Date().toISOString().split('T')[0]} // Sets maximum date to today
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
              value={nextConsult}
              onChange={(e) => setNextConsult(e.target.value)}
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
        <div className="form-group mb-4">
          <button type="submit" className="btn btn-primary">Update Mother</button>
          <i> </i>
          <button type="button" onClick={()=>onDeleteClick(id)}  className="btn btn-danger" data-bs-toggle="modal" id="deleteButton" data-bs-target="#deleteModal">Delete Mother</button>
        </div>
      </form>

      <div className="modal fade" tabIndex="-1" role="dialog" id="deleteModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">You are about to remove a mother record.</div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                This will remove the mother record of <b className="fw-bold">{name}</b><br />
                Are you sure?
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <form onSubmit={handleDeleteMother} className="position-relative">
                <button type="submit" className="btn btn-primary">Yes, Remove Mother</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}