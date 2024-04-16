import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import "./main.css";

export default function EditCouple() {
  const [wifeName, setWifeName] = useState("");
  const [husbandName, setHusbandName] = useState("");
  const [wifeNic, setWifeNic] = useState("");
  const [husbandNic, setHusbandNic] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [familyPlan, setFamilyPlan] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8090/coupledetails/get/${id}`)
      .then((res) => {
        const couple = res.data.couple;
        setWifeName(couple.wifeName);
        setHusbandName(couple.husbandName);
        setWifeNic(couple.wifeNic);
        setHusbandNic(couple.husbandNic);
        setEmail(couple.email);
        setTel(couple.tel);
        setAddress(couple.address);
        setFamilyPlan(couple.familyPlan);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  function updateCouple(e){
    e.preventDefault();
    const updatedCouple={
      wifeName,
      husbandName,
      wifeNic,
      husbandNic,
      email,
      tel,
      address,
      familyPlan
    };

    // Send updated staff details to the server
    axios
      .put(`http://localhost:8090/coupledetails/editcouple/${id}`, updatedCouple)
      .then(() => {
        alert("Couple Updated");
        window.location.href = "/allcouple";
      })
      .catch((err) => {
        alert(err.message);
      });

  }

  // Function to handle deletion of a staff member
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8090/coupledetails/deletecouple/${userId}`).then(()=>{
      alert("Couple deleted");
      window.location.href="/allcouple"
    });

  }
  
  function handleDeleteCouple() {
    // Send DELETE request to delete couple record
    axios
      .delete(`http://localhost:8090/coupledetails/editcouple/${id}`)
      .then(() => {
        alert("Couple Deleted");
        window.location.href = "/coupledetails";
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div>
      <div>
        <Header/>
        <Sidebar/>
      </div>
      <div className='tableCouple'>
      <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Edit {wifeName} & {husbandName}</h1>
      </div>

      <div className="col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/allcouple">Newly Married Couple Management</a></li>
                <li className="breadcrumb-item active">{wifeName} & {husbandName}</li>
              </ol>
            </nav>
          </div>
          {/* <div className="col text-end fw-lighter">
            <b>UserId: {id}</b>
          </div> */}
        </div>
      </div>

      <form onSubmit={updateCouple}>
        <div className="row form-group mb-4">
          <div className="col">
            <h3>Wife</h3>
            <label htmlFor="wifeName">Wife's Name</label>
            <input type="text" className="form-control" id="wifeName" name="wifeName" value={wifeName} onChange={(e) => setWifeName(e.target.value)} placeholder="Wife Name" required />
          </div>
          <div className="col">
            <h3>Husband</h3>
            <label htmlFor="husbandName">Husband's Name</label>
            <input type="text" className="form-control" id="husbandName" name="husbandName" value={husbandName} onChange={(e) => setHusbandName(e.target.value)} placeholder="Husband Name" required />
          </div>
        </div>

        <div className="row form-group mb-5">
          <div className="col">
            <label htmlFor="wifeNic">Wife's NIC</label>
            <input type="text" className="form-control" id="wifeNic" name="wifeNic" value={wifeNic} onChange={(e) => setWifeNic(e.target.value)} placeholder="Wife NIC" maxLength={12} minLength={10} required />
          </div>
          <div className="col">
            <label htmlFor="husbandNic">Husband's NIC</label>
            <input type="text" className="form-control" id="husbandNic" name="husbandNic" value={husbandNic} onChange={(e) => setHusbandNic(e.target.value)} placeholder="Husband NIC" maxLength={12} minLength={10} required />
          </div>
        </div>

        
        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="tel">Telephone</label>
            <input type="text" className="form-control" id="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Telephone" maxLength={10} minLength={10} required />
          </div>
          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
        </div>

        <div className="row form-group mb-4">
        <div className="col">
          <label htmlFor="address">Address : </label> 
          <input type="text" className="form-control" id="address" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
        </div>

        <div className="form-group row">
          <div className='editplane'>
          <label htmlFor="familyPlan" className="col-sm-3 col-form-label">Family Plan :</label>
          <div className="col-sm-9">
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" id="earlyBabyPlan" name="familyPlan" value="earlyBabyPlan" checked={familyPlan === 'earlyBabyPlan'} onChange={() => setFamilyPlan('earlyBabyPlan')} />
              <label className="form-check-label" htmlFor="earlyBabyPlan">Early Baby Plan</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" id="lateBabyPlan" name="familyPlan" value="lateBabyPlan" checked={familyPlan === 'lateBabyPlan'} onChange={() => setFamilyPlan('lateBabyPlan')} />
              <label className="form-check-label" htmlFor="lateBabyPlan">Late Baby Plan</label>
            </div>
          </div>
        </div>
        </div>
        <br/>
        <div className="form-group mb-4">
          <button type="submit" className="btn btn-primary">Update Couple</button>
          <i> </i>
          <button type="button" onClick={()=>onDeleteClick(id)}  className="btn btn-danger" data-bs-toggle="modal" id="deleteButton" data-bs-target="#deleteModal">Delete Couple</button>
        </div>
      </form>

      <div className="modal fade" tabIndex="-1" role="dialog" id="deleteModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">You are about to remove a couple record.</div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                This will remove the couple record of <b className="fw-bold">{wifeName} and {husbandName}</b><br />
                Are you sure?
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <form onSubmit={handleDeleteCouple} className="position-relative">
                <button type="submit" className="btn btn-primary">Yes, Remove Couple</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
