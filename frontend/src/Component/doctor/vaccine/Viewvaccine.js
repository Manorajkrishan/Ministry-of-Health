import React, { useEffect, useState, useRef  } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../SideBar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function ViewVaccine() {
  const [vaccineData, setVaccineData] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const reportRef = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:8090/vaccinedetails/get/${id}`)
      .then((res) => {
        setVaccineData(res.data.vaccine);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  const generatePDF = () => {
    const input = reportRef.current;
    if (!input) {
      console.error('Report element not found');
      return;
    }

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('report.pdf');
      });
  };

  if (error) {
    return (
      <div>
        <Sidebar />
        <div>Error: {error}</div>
      </div>
    );
  }

  if (!vaccineData) {
    return (
      <div>
        <Header />
        <br/>
      <br/>
      <br/>
      <br/>
        <Sidebar />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <br/>
      <br/>
      <br/>
      <br/>
      <Sidebar />
      <div style ={{marginLeft:"300px"}}>
      <div className="container" ref={reportRef}>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">{vaccineData.name}</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                 <div className="btn-group me-2">
                  <button onClick={generatePDF} type="button" className="btn btn-sm btn-outline-secondary">Generate report</button>
                 </div>
              </div>
            </div>

            <div className="col py-3">
              <div className="row">
                <div className="col">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/allvaccine">Vaccine Management</a></li>
                      <li className="breadcrumb-item active">{vaccineData.name}</li>
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
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Name:</b></div>
                    <div className="col">{vaccineData.name}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Age:</b></div>
                    <div className="col">{vaccineData.age}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Date of Birth:</b></div>
                    <div className="col">{vaccineData.dob}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Email:</b></div>
                    <div className="col">{vaccineData.email}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Contact Number:</b></div>
                    <div className="col">{vaccineData.contactno}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Gender:</b></div>
                    <div className="col">{vaccineData.gender}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Age Group:</b></div>
                    <div className="col">{vaccineData.agegroup}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col" style={{ maxWidth: '140px' }}> <b>Vaccines:</b></div>
                    <div className="col">
                      {vaccineData.vaccines.map((vaccine, index) => (
                        <div key={index}>{vaccine}</div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ViewVaccine;
