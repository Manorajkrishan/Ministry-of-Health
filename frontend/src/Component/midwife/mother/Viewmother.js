import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MotherPDFDocument from './MotherPDFDocument'; // Assuming you have a separate component for generating PDF
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

function ViewMother() {
  const [motherData, setMotherData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8090/motherdetails/get/${id}`)
      .then((res) => {
        setMotherData(res.data.mother);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const sendWhatsAppMessage = () => {
    if (motherData && motherData.nextconsult) {
      // Replace 'recipient_phone_number' with the actual recipient's phone number
      const recipientPhoneNumber = motherData.contact;
    
      // Construct the message with only the next consultation date
      const nextConsultDate = new Date(motherData.nextconsult);
      const formattedDate = `${nextConsultDate.getFullYear()}-${(nextConsultDate.getMonth() + 1).toString().padStart(2, '0')}-${nextConsultDate.getDate().toString().padStart(2, '0')}`;

      const message = `Dear ${motherData.name},
      Next Pregnancy Consultation Date: ${formattedDate},
      Contact us for more information`;

    
      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/${recipientPhoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in a new window
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Next consultation date not available.');
    }
  };
  
  
  
  

  if (!motherData) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }


  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className='tableMother'>
        <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{motherData.name}</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <PDFDownloadLink document={<MotherPDFDocument motherData={motherData} />} fileName={`${motherData.name}.pdf`}>
                {({ loading }) => (loading ? 'Loading...' : <button id="exportButton" type="button" className="btn btn-sm btn-outline-secondary">Export</button>)}
              </PDFDownloadLink>
            </div>
            <div className="btn-group me-2">
              <button onClick={sendWhatsAppMessage} type="button" className="btn btn-sm btn-outline-secondary">Send WhatsApp Message</button>
            </div>
          </div>
        </div>
        <div className="col py-3">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/allmother">Mother Management</a></li>
                  <li className="breadcrumb-item active">{motherData.name}</li>
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
                <div className="col">{motherData.name}</div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col" style={{ maxWidth: '140px' }}> <b>Age:</b></div>
                <div className="col">{motherData.age}</div>
              </div>
            </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Blood Group:</b></div>
              <div className="col">{motherData.bloodgroup}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Pregnant Months:</b></div>
              <div className="col">{motherData.pregnantmonthcount}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Contact:</b></div>
              <div className="col">{motherData.contact}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Address:</b></div>
              <div className="col">{motherData.address}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Last Consulted:</b></div>
              <div className="col">{motherData.lastconsult}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Next Consultation:</b></div>
              <div className="col">{motherData.nextconsult}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Email:</b></div>
              <div className="col">{motherData.email}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Status:</b></div>
              <div className="col">{motherData.status}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col" style={{ maxWidth: '140px' }}> <b>Last Updated:</b></div>
              <div className="col">{new Date().toLocaleString()}</div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default ViewMother;
