import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useReactToPrint } from "react-to-print";
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
import './ListOfPatients.css'
import Swal from 'sweetalert2'
import { BsBrushFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
function ListOfPatients() {
    const [patient, setPatient] = useState([]);

    function getPatient() {
        axios.get(`http://localhost:8090/patient/display`).then((res) => {
            setPatient(res.data)

        }).catch((err) => {
            Swal.fire({
                icon: err,
                title: 'patient not displayed',
                text: 'patient not displayed',
                timer: '2000',
                showConfirmationButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/patients/list")
                }
            })
        })
    }
    useEffect(() => {
        getPatient();
    }, []);

    const generatePDF = useRef();

    const handlePrint = useReactToPrint({
        content: () => generatePDF.current,
        documentTitle: "DiseaseData",
        // onAfterPrint: () => alert("data saved")
    });
    return (
        <>




          <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>


            <h3 style={{ marginTop: '15px' }} >patients with infectious disease list</h3>
            <br></br>
            <div>
                <h5 style={{ fontColor: 'red' }}>To check the vaccination report please check the vaccination status</h5>
                {/* combine with the vaacination */}
                <button style={{ marginTop: '10px', marginBottom: '5px' }}>click here</button>
            </div>





            <div ref={generatePDF} style={{ width: '100%' }}>
                <div className="" style={{ marginRight: '50px' }}>
                    <div className="container" style={{ marginLeft: '20px', marginRight: '50px' }}>



                        <table class=" table table-bordered">
                            <thead>
                                <tr>
                                    <th className="headerColor" scope="col">index</th>
                                    {/* <th className="headerColor" scope="col">ID</th> */}
                                    <th className="headerColor" scope="col">patient name</th>
                                    <th className="headerColor" scope="col">NIC</th>
                                    <th className="headerColor" scope="col">patient age</th>
                                    <th className="headerColor" scope="col">gender</th>
                                    <th className="headerColor" scope="col">address</th>
                                    <th className="headerColor" scope="col">phone</th>
                                    {/* <th className="headerColor" scope="col">allergies</th> */}
                                    {/* <th className="headerColor" scope="col">EM</th> */}
                                    <th className="headerColor" scope="col">disease</th>
                                    {/* <th className="headerColor" scope="col">Symptoms</th> */}
                                    <th className="headerColor" scope="col">DateOfDiagnosis</th>

                                    <th className="headerColor" scope="col">Referred By</th>


                                </tr>
                            </thead>
                            <tbody>
                                {patient.map((patient, index) => (
                                    <tr key={patient._id} className='col-sm-3 mb-3'>
                                        <td>{index + 1}</td>
                                        {/* <td>{patient._id}</td> */}
                                        <td>{patient.patientName}</td>
                                        <td>{patient.patientNic}</td>
                                        <td>{patient.patientAge}</td>
                                        <td>{patient.patientGender}</td>
                                        <td>{patient.patientAddress}</td>
                                        <td>{patient.patientPhone}</td>
                                        {/* <td>{patient.patientAllergies}</td> */}
                                        {/* <td>{patient.patientEM}</td> */}
                                        <td>{patient.patientDisease}</td>
                                        {/* <td>{patient.patientSymptoms}</td> */}
                                        <td>{patient.patientDateOfDiagnosis}</td>

                                        <td>{patient.patientReferredBy}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </div >
                <button className="btn btn-success" onClick={() => { handlePrint() }}>PDF</button>
                </div>
            </div >
        </>
    )
}

export default ListOfPatients