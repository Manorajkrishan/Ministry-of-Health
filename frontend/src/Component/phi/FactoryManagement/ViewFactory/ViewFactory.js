import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PDFDownloadLink, PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';
import HeaderPHI from '../../DiseaseManagement/Header/Header';
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav';

function ViewFactory() {
  const [hoteldata, setHotelData] = useState(null);
  const { id } = useParams();
  const [viewPdf, setViewPdf] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8090/factory/viewfactory/${id}`)
      .then((res) => {
        setHotelData(res.data.factory);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save user preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
  const shareDetailsViaWhatsApp = () => {
    if (hoteldata) {
      // Construct the message with the factory details
      let message = `Factory Details:
        - Hotel Name: ${hoteldata.hotelname}
        - Owner Name: ${hoteldata.ownername}
        - Hotel Address: ${hoteldata.hoteladdress}
        - Owner Address: ${hoteldata.owneraddress}
        - Contact Number: ${hoteldata.number}
        - NIC: ${hoteldata.nic}
        - Hotel Number: ${hoteldata.hotelnumber}
        - Workers: ${hoteldata.workers}
        - Waste Management: ${hoteldata.wastemanagement}`;

      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in a new window
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Factory data not available.');
    }
  };

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});


  if (!hoteldata) {
    return <div>Loading...</div>;
  }

  // PDF document component
  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={{ flexDirection: 'column', padding: 10, color:'black', borderColor:"black" }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 25, color:'black', fontWeight: 'bold', marginBottom: 20 }}>Factory Details</Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Hotel Name:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.hotelname}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Owner Name:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.ownername}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Hotel Address:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.hoteladdress}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Owner Address:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.owneraddress}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Contact Number:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.number}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>NIC:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.nic}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Hotel Number:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.hotelnumber}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Workers:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.workers}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Waste Management:</Text>
            <Text style={{ marginLeft: 20, color: 'blue' }}>{hoteldata.wastemanagement}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
  
  return (
    <>
      <HeaderPHI />
      <DMsideNav />
      {/* <div style={{ 
        marginLeft: "50px", 
        marginRight: "50px", 
        backgroundColor: darkMode ? "#333" : "#FFDD2", // Apply styles based on mode
        minHeight: "200vh", 
        padding: "10px" 
      }}> */}
         {/* <h1 style={{ 
          color: darkMode ? 'white' : 'black', // Apply styles based on mode
          textAlign: 'center', 
          marginBottom: '10px' 
        }}>View Factory details</h1> */}
        <div style ={{marginLeft:'300px'}}>
<h1>View Factory Details</h1>



        <div className='tableMother'>
          <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2" style={{ color: 'green' }}>{hoteldata.hotelname}</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                {/* Button to download PDF */}
                <PDFDownloadLink document={<PDFDocument />} fileName={`${hoteldata.name}.pdf`}>
                  {({ loading }) => (
                    loading ? 'Loading...' : (
                      <>
                        <button 
                          id="exportButton" 
                          type="button" 
                          className="btn btn-sm btn-outline-secondary" 
                          style={{ 
                            color: 'black',
                            backgroundColor: darkMode ? '#555' : 'white', // Apply styles based on mode
                            borderRadius: '5px',
                            padding: '1px 5px',
                            border: 'black',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            outline: 'none'
                          }}>
                          Download PDF
                        </button>
                        <button type="button" onClick={shareDetailsViaWhatsApp} className="btn btn-sm btn-outline-secondary" borderColor="black">Share Factory details </button>
                      </>
                    )
                  )}
                </PDFDownloadLink>
              </div>
              <div className="btn-group me-2">
                {/* Button to view PDF */}
                <button onClick={() => setViewPdf(true)} className="btn btn-sm btn-outline-primary">View PDF</button>
              </div>
            </div>
          </div>

          <div>
                <label className="switch">
                  <input type="checkbox" checked={darkMode} onChange={toggleMode} />
                  <span className="slider round"></span>
                </label>
              </div>
          <div className="col py-3">
            <div className="row">
              <div className="col">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/viewfactory" style={{ color: 'black', textDecoration: 'bold' }}> Hotel Management download</a></li>
                    <li className="breadcrumb-item active" style={{ color: 'green' }}>{hoteldata.name}</li>
                  </ol>
                </nav>
              </div>
              
                 
             
              <div className="col text-end fw-lighter">
                {/* Add Last Updated and UserId here */}
              </div>
            </div>

            <ul className="list-group" marginRight='10px'>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ marginRight: '10px',fontWeight: 'bold', color: 'blue' }}> Hotel Name:</div>
                  <div className="col">{hoteldata.hotelname}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> Owner name:</div>
                  <div className="col">{hoteldata.ownername}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> Hotel address:</div>
                  <div className="col">{hoteldata.hoteladdress}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> Owner address:</div>
                  <div className="col">{hoteldata.owneraddress}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> Contact number:</div>
                  <div className="col">{hoteldata.number}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> NIC:</div>
                  <div className="col">{hoteldata.nic}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> Hotel number:</div>
                  <div className="col">{hoteldata.hotelnumber}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}>Number of  Workers:</div>
                  <div className="col">{hoteldata.workers}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}>condition of  Waste management:</div>
                  <div className="col">{hoteldata.wastemanagement}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> status of sanitary facilities:</div>
                  <div className="col">{hoteldata.sanitary}</div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> Food preperation methods:</div>
                  <div className="col">{hoteldata.foodpreperation}</div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-4" style={{ fontWeight: 'bold', color: 'blue' }}> Food storage methods:</div>
                  <div className="col">{hoteldata.foodstorage}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      {viewPdf && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#97A39A', zIndex: 1000 }}>
          <PDFViewer style={{ width: '100%', height: '100%' }}>
            <PDFDocument />
          </PDFViewer>
          <button onClick={() => setViewPdf(false)}>Close PDF</button>
        </div>
      )}
       //<button onClick={toggleMode}> mode{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </>
  );
}

export default ViewFactory;
