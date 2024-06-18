import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
import logo from "../../Assets/logo.png";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function StudentReport() {
  const [students, setStudents] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8090/students")
      .then((response) => {
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const downloadPDF = () => {
    const capture = document.querySelector('.reports');
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

  return (
    <>
      <HeaderPHI />
      <DMsideNav />
      <div className="reports">
        <div className="container mt-5">
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
          <div className="d-flex justify-content-center">
            <img src={logo} alt="Ministry of Health" />
          </div>
          <h2 className="text-center mt-3">Student Exploration summary - Ministry of Health</h2>
          <div className="table-responsive mt-5">
            <table className="table table-bordered">
              <thead className="bg-dark text-light">
                <tr>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Email address</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>BMI</th>
                  <th>Stunting</th>
                  <th>Wasting</th>
                  <th>Overweight</th>
                </tr>
              </thead>
              <tbody>
                {students.length ? (
                  students.map((student) => (
                    <tr key={student._id}>
                      <td>{student.name}</td>
                      <td>{student.DOB}</td>
                      <td>{student.age}</td>
                      <td>{student.address}</td>
                      <td>{student.gender}</td>
                      <td>{student.mail}</td>
                      <td>{student.height}</td>
                      <td>{student.weight}</td>
                      <td>{student.BMI}</td>
                      <td>{student.stunting}</td>
                      <td>{student.wasting}</td>
                      <td>{student.overweight}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="text-center">No Data Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentReport;
