import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from "../../Assets/logo.png";

function ViewStudent() {
  const [student, setStudent] = useState({});
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  const downloadPDF = () => {
    const capture = document.querySelector('.student');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('student.pdf');
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8090/students/${id}`)
      .then((response) => {
        setStudent(response.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("Error retrieving student data");
      });
  }, [id]);

  if (error) {
    return <div className="container mt-5">Error: {error}</div>;
  }

  return (
    <>
      <HeaderPHI />
      <DMsideNav />

      <div style={{ marginLeft: "300px" }}>
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <Link className="btn btn-primary mb-5" to="/allstud">
              Back
            </Link>
            <div className="receipt-actions-div">
              <div className="actions-right">
                <button className="receipt-modal-download-button" onClick={downloadPDF} disabled={loader}>
                  {loader ? (
                    <span>Downloading</span>
                  ) : (
                    <span>Download PDF</span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", border: "2px solid black", padding: "20px" }} className="container mt-5">
            <div className="student">
            <div style={{ textAlign: "center" }}>
      <img src={logo} alt="Ministry of Health Logo" style={{ width: "100px", height: "150px" }} />
      <h2>Ministry of Health</h2>
      <h3>Student Report</h3>
    </div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Name: {student.name}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Age: {student.age}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Address: {student.address}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  DOB: {student.DOB}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Gender: {student.gender}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Email: {student.mail}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Contact Number: {student.number}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Height: {student.height}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Weight: {student.weight}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  BMI: {student.BMI}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Stunting: {student.stunting}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Wasting: {student.wasting}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                  Overweight: {student.overweight}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewStudent;
