import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CouplePDFDocument from './CouplePDFDocument'; // Assuming you have a separate component for generating PDF

import Header from './Header';
import Sidebar from './Sidebar';

function ViewCouple() {
  const [coupleData, setCoupleData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8090/coupledetails/get/${id}`)
      .then((res) => {
        setCoupleData(res.data.couple);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  if (!coupleData) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }
  
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className='tableCouple'>
      <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{coupleData.wifeName} & {coupleData.husbandName}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <PDFDownloadLink
              document={<CouplePDFDocument coupleData={coupleData} />}
              fileName={`${coupleData.wifeName}_${coupleData.husbandName}.pdf`}
              target="_blank" // Open in a new window
            >
              {({ loading }) => (loading ? 'Loading...' : <button id="exportButton" type="button" className="btn btn-sm btn-outline-secondary">Export</button>)}
            </PDFDownloadLink>
          </div>
        </div>
      </div>

      <div className="col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/allcouple">Newly Married Couple Management</a></li>
                <li className="breadcrumb-item active">{coupleData.wifeName} & {coupleData.husbandName}</li>
              </ol>
            </nav>
          </div>

          <div className="col text-end fw-lighter">
            {/* Add Last Updated and UserId here */}
          </div>
        </div>

        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Wife's Name:</b></div>
              <div className="col">{coupleData.wifeName}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Wife's NIC:</b></div>
              <div className="col">{coupleData.wifeNic}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Husband's Name:</b></div>
              <div className="col">{coupleData.husbandName}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Husband's NIC:</b></div>
              <div className="col">{coupleData.husbandNic}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Address:</b></div>
              <div className="col">{coupleData.address}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Telephone:</b></div>
              <div className="col">{coupleData.tel}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Email:</b></div>
              <div className="col">{coupleData.email}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '100px' }}> <b>Last Updated:</b></div>
              <div className="col">{new Date().toLocaleString()}</div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default ViewCouple;
