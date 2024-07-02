import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";
import Header from './Header';
import Sidebar from './Sidebar';

function ViewBaby() {
  const [babyDetails, setBabyDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8010/babydetails/get/${id}`)
      .then((res) => {
        const baby = res.data.baby;
        setBabyDetails(baby);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const ComponentsRef = useRef(null);
  
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Baby's Report",
    onAfterPrint: () => alert("Baby's Report Successfully Downloaded!"),
  });

  if (!babyDetails) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  const { Name, Gender, Weight, Height, BloodType, Allergies, date, phone, Email, Address } = babyDetails;

  return (
    <>
  
    <Sidebar/>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{Name}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button onClick={handlePrint} type="button" className="btn btn-sm btn-outline-secondary">Export</button>
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
      
      <div ref={ComponentsRef}>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}><b>Name:</b></div>
              <div className="col">{Name}</div>
            </div>
          </li>
        {/* Add more list items for other details */}
<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Gender:</b></div>
    <div className="col">{Gender}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Weight:</b></div>
    <div className="col">{Weight}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Height:</b></div>
    <div className="col">{Height}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Blood Type:</b></div>
    <div className="col">{BloodType}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Allergies:</b></div>
    <div className="col">{Allergies}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Date of Birth:</b></div>
    <div className="col">{date}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Phone Number:</b></div>
    <div className="col">{phone}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Email:</b></div>
    <div className="col">{Email}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Address:</b></div>
    <div className="col">{Address}</div>
  </div>
</li>

<li className="list-group-item">
  <div className="row">
    <div className="col" style={{ maxWidth: '140px' }}><b>Date Modified:</b></div>
    <div className="col">{new Date().toLocaleString()}</div>
  </div>
</li>

        </ul>
      </div>
    </>
  );
}

export default ViewBaby;
