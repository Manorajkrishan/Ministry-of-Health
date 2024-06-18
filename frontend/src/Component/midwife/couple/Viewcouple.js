import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CouplePDFDocument from './CouplePDFDocument'; // Assuming you have a separate component for generating PDF
import FamilyPlanPDFDocument from './FamilyPlanPDFDocument';
import '../indexMidwife.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

function ViewCouple() {
  const [coupleData, setCoupleData] = useState(null);
  const [generatedPlan, setGeneratedPlan] = useState(null);
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

  const generateFamilyPlan = () => {
    // Check if coupleData is available
    if (coupleData) {
      // Check the couple's family plan type
      const familyPlanType = coupleData.familyPlan;
  
      // Implement logic to generate the family plan based on the family plan type
      let plan;
      switch (familyPlanType) {
        case 'earlyBabyPlan':
          plan = {
            name: 'Early Baby Plan',
            details: [
              'Includes regular prenatal check-ups starting from the first trimester',
              'Provides personalized guidance for a healthy pregnancy diet and lifestyle',
              'Covers hospital stay during delivery, including labor and delivery room charges',
              'Offers postnatal care for both mother and baby, including lactation support and newborn care education',
              'Provides access to specialized early childhood development resources and programs'
            ]
          };
          break;
        case 'lateBabyPlan':
          plan = {
            name: 'Late Baby Plan',
            details: [
              'Tailored care for late pregnancies, addressing unique challenges and risks',
              'Specialized medical support during labor, including access to advanced obstetric interventions',
              'Extended postnatal care for mother and baby, including postpartum depression screening and support',
              'Comprehensive newborn care, addressing the specific needs of late-term infants',
              'Emotional support for late-term challenges, including counseling and therapy services'
            ]
          };
          break;
        default:
          plan = {
            name: 'Standard Family Plan',
            coverage: 'General family planning services.'
          };
          break;
      }
  
      // Display the generated family plan
      setGeneratedPlan(plan);
      
      // Extract wife and husband names
      const { wifeName, husbandName } = coupleData;
  
      // Alert the user with the generated family plan and couple's names
      alert(`Dear ${wifeName} & ${husbandName},\nGenerated Family Plan: ${plan.name}\nDetails:\n${plan.details.map((detail, index) => `${index + 1}. ${detail}`).join('\n')}`);
    } else {
      alert('Couple data not available.');
    }
  };

  const shareDetailsViaWhatsApp = () => {
    // Assuming coupleData includes telephone number for WhatsApp sharing
    const whatsappNumber = coupleData.tel;
  
    // Construct the message with the summary of details
    let message = `Dear ${coupleData.wifeName} & ${coupleData.husbandName},
    Summary of Details:
    - Wife's Name: ${coupleData.wifeName}
    - Wife's NIC: ${coupleData.wifeNic}
    - Husband's Name: ${coupleData.husbandName}
    - Husband's NIC: ${coupleData.husbandNic}
    - Address: ${coupleData.address}
    - Telephone: ${coupleData.tel}
    - Email: ${coupleData.email}
    - Family Plan: ${coupleData.familyPlan}`;
  
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };
  
  
  // const shareFamilyPlan = () => {
  //   // Assuming coupleData includes telephone number for WhatsApp sharing
  //   const whatsappNumber = coupleData.tel;
    
  //   // Check if the generated plan exists
  //   if (generatedPlan && whatsappNumber) {
  //     // Construct the message
  //     let message = `Dear ${coupleData.wifeName} & ${coupleData.husbandName}
  //     Generated Family Plan: ${generatedPlan.name}\n`;
  //     if (generatedPlan.details) {
  //       message += `Details:\n${generatedPlan.details.map((detail, index) => `${index + 1}. ${detail}`).join('\n')}\n`;
  //     } else if (generatedPlan.coverage) {
  //       message += `Coverage: ${generatedPlan.coverage}\n`;
  //     }
      
  //     // Construct the WhatsApp URL
  //     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
  //     // Open WhatsApp in a new window
  //     window.open(whatsappUrl, '_blank');
  //   } else {
  //     alert('Please generate the family plan first.');
  //   }
  // };

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
          <div className="btn-group me-2" style={{ marginRight: '10px' }}>
          <PDFDownloadLink
          document={<CouplePDFDocument coupleData={coupleData} />}
          fileName={`${coupleData.wifeName}_${coupleData.husbandName}.pdf`}
          target="_blank" // Open in a new window
          >
          {({ loading }) => (loading ? 'Loading...' : <button id="exportButton" type="button" className="btn btn-sm btn-outline-secondary">Export</button>)}
        </PDFDownloadLink>
</div>

<div className="btn-group me-2" style={{ marginRight: '10px' }}>
  <button type="button" onClick={generateFamilyPlan} className="btn btn-sm btn-outline-secondary">Generate Family Plan</button>
</div>

<div className="btn-group me-2">
  <button type="button" onClick={shareDetailsViaWhatsApp} className="btn btn-sm btn-outline-secondary">Share Family Plan via WhatsApp</button>
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
            {/* List items for coupleData */}
            <li className="list-group-item">
              <div className="row">
                <div className="col" style={{ maxWidth: '100px' }}> <b>Marriage Certificate No:</b></div>
                <div className="col">{coupleData.marriageno}</div>
              </div>
            </li>
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
                <div className="col" style={{ maxWidth: '100px' }}> <b>Family Plan:</b></div>
                <div className="col">{coupleData.familyPlan}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewCouple;
