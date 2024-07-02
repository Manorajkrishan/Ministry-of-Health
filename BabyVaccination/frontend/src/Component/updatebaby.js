import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function EditBaby() {
    const [Name, setName] = useState("");
    const [Gender, setGender] = useState("");
    const [Weight, setWeight] = useState("");
    const [Height, setHeight] = useState("")
    const [BloodType, setBloodType] = useState("");
    const [Allergies, setAllergies] = useState("");
    const [date, setdate] = useState("");
    const [phone, setphone] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
  

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8010/babydetails/get/${id}`)
      .then((res) => {
        const baby = res.data.baby;
        setName(baby.Name);
        setGender(baby.Gender);
        setWeight(baby.Weight);
        setHeight(baby.Height);
        setBloodType(baby.BloodType);
        setAllergies(baby.Allergies);
        setdate(baby.date);
        setphone(baby.phone);
        setEmail(baby.Email);
        setAddress(baby.Address);





 })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  function updateBaby(e){
    e.preventDefault();
    const updatedBaby={
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
     
    };

    // Send updated staff details to the server
    axios
      .put(`http://localhost:8010/babydetails/editbaby/${id}`, updatedBaby)
      .then(() => {
        alert("Baby Updated");
        window.location.href = "/allbaby";
      })
      .catch((err) => {
        alert(err.message);
      });

  }

  // Function to handle deletion of a staff member
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8010/babydetails/deletebaby/${userId}`).then(()=>{
      alert("Baby deleted");
      window.location.href="/allbaby"
    });

  }
  
  function handleDeleteBaby() {
    // Send DELETE request to delete couple record
    axios
      .delete(`http://localhost:8010/babydetails/editbaby/${id}`)
      .then(() => {
        alert("Baby Deleted");
        window.location.href = "/babydetails";
      })
      .catch((err) => {
        alert(err.message);
      });
  }
return(
    <div>
    
      <Sidebar/>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Edit {Name}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button className="btn btn-sm btn-outline-secondary">?</button>
        </div>
      </div>
    </div>

    <div className="col py-3">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/allbaby">Dashboard</a></li>
              <li className="breadcrumb-item active">{Name}</li>
            </ol>
          </nav>
        </div>
        <div className="col text-end fw-lighter">

          <b>UserId: {id}</b>
        </div>
      </div>
    </div>

    <form onSubmit={updateBaby}>
      <div className="row form-group mb-4">
        <div className="col">
          <label htmlFor="Name">Name</label>
          <input type="text" className="form-control" id="Name" name="Name" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </div>

        <div className="col">
          <label htmlFor="Gender">Gender</label>
          <input type="text" className="form-control" id="Gender" name="Gender" value={Gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" required />
        </div>
      </div>

      <div className="row form-group mb-4">
  <div className="col">
    <label htmlFor="Weight">Weight</label>
    <input type="text" className="form-control" id="Weight" name="Weight" value={Weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" required />
  </div>

  <div className="col">
    <label htmlFor="Height">Height</label>
    <input type="text" className="form-control" id="Height" name="Height" value={Height}  onChange={(e) => setHeight(e.target.value)}placeholder="Height" required />
  </div>
</div>

<div className="row form-group mb-4">
  <div className="col">
    <label htmlFor="BloodType">Blood Type</label>
    <input type="text" className="form-control" id="BloodType" name="BloodType" value={BloodType} onChange={(e) => setBloodType(e.target.value)} placeholder="Blood Type" required />
  </div>

  <div className="col">
    <label htmlFor="Allergies">Allergies</label>
    <input type="text" className="form-control" id="Allergies" name="Allergies" value={Allergies} onChange={(e) => setAllergies(e.target.value)}placeholder="Allergies" required />
  </div>
</div>

<div className="row form-group mb-4">
  <div className="col">
    <label htmlFor="date">Date of Birth</label>
    <input type="date" className="form-control" id="date" name="date" value={date} onChange={(e) => setdate(e.target.value)} required />
  </div>

  <div className="col">
    <label htmlFor="phone">Phone Number</label>
    <input type="tel" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="07X-XXXXXXX" required />
  </div>
</div>

<div className="form-group mb-4">
  <label htmlFor="email">Email</label>
  <input type="email" className="form-control" name="Email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
</div>

<div className="form-group mb-4">
  <label htmlFor="Address">Address</label>
  <textarea className="form-control" name="Address" id="Address" cols="10" rows="6" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={Address}></textarea>
</div>


<div className="form-group mb-4">
  <button type="submit" className="btn btn-primary me-2">Update Baby</button>
  <button type="button" onClick={()=>onDeleteClick(id)} className="btn btn-danger" data-bs-toggle="modal" id="deleteButton" data-bs-target="#deleteModal">Delete Baby</button>
</div>

    </form>

    <div className="modal fade" tabIndex="-1" role="dialog" id="deleteModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">You are about to remove a baby record.</div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>
              This will remove the baby record of <b className="fw-bold">{Name}</b><br />
              Are you sure?
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <form onSubmit={handleDeleteBaby} className="position-relative">
              <button type="submit" className="btn btn-primary">Yes, Remove Baby</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}