//add a dorpdown to mention wheher patient is guided or nt.
import React, { useState, useEffect, useRef, } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import './ViewPatientInfo.css'
import Swal from 'sweetalert2'
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';

import { useReactToPrint } from "react-to-print";

function ListOfPatients() {
    const { id } = useParams();
    const [patient, setPatient] = useState({});
    function getPatient() {
        axios.get(`http://localhost:8090/patient/get/${id}`).then((res) => {
            setPatient(res.data?.response)
            // setPatient(res.data?.response) nullable addede to this for the fetch to happen
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
        documentTitle: "patientData",
        // onAfterPrint: () => alert("data saved")
    });

    return (
        <>
            {/* <h4 style={{ textAlign: 'left-align', textDecoration: 'bold' }}>Patient's list</h4>

            <Link to="/patient/add" className="btn btn-primary" style={{ marginBottom: '10px', marginRight: '0px' }}>Add</Link> */}

            <HeaderPHI />
            <DMsideNav />
            <div style={{ marginLeft: "300px" }}>
                <div className="container">



                    <div className="view">
                        <h3 style={{ marginTop: '15px' }} >View more list</h3>
                        <br></br>
                        <div ref={generatePDF} style={{ width: '100%' }}>
                            <button className="btn btn-secondary" style={{ marginLeft: '1000px', marginTop: '-105px' }} class="btn btn-primary w-20" onClick={() => { handlePrint() }}>print</button>

                            <div style={{ float: "right", marginRight: '50px', marginBottom: '50px', marginTop: '-60px' }}>

                            </div>


                            <br></br>
                            <div className="" style={{ marginRight: '50px' }}>
                                <div className="container" style={{ marginLeft: '20px', marginRight: '50px' }}>
                                    <div>

                                    </div>
                                    <div class="card" style={{ width: "18rem" }}>

                                        <img class="card-img-top" src={`/fakepath/${patient.patientImg?.split("\\").pop()}`} alt="Card image cap" />
                                    </div>

                                    <form>
                                        {/* removed the patient.map */}
                                        <div className="form-row" key={patient._id}>

                                            <div className="form-group col-md-4">
                                                <label for="patientName">  patient name</label>
                                                <input type="text" class="form-control" id="patientName"
                                                    value={patient.patientName} readOnly />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="patientNic">   patient's nic</label>
                                                <input type="text" class="form-control" id="patientNic" value={patient.patientNic} readOnly />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="patientAge"> patient's age</label>
                                                <input type="text" id="patientAge" class="form-control" value={patient.patientAge} readOnly />
                                            </div>

                                            < div class="form-group col-md-4">
                                                <label for="patientGender">select gender of patient</label>

                                                <select className="form-control" id="patientGender" value={patient.patientGender} readOnly >
                                                    <option value="">select gender</option>
                                                    <option value="male">male</option>
                                                    <option value="female">female</option>
                                                </select>
                                            </div>

                                            <div className="form-group col-md-4">
                                                <label for="patientAddress"> patientAddress</label>
                                                <input type="text" id="patientAddress" class="form-control" value={patient.patientAddress} readOnly />
                                            </div>

                                            <div className="form-group col-md-4">
                                                <label for="patientPhone"> patientPhone</label>
                                                <input type="text" id="patientPhone" class="form-control" value={patient.patientPhone} readOnly />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="patientAllergies"> patientAllergies</label>
                                                <input type="text" id="patientAllergies" class="form-control" value={patient.patientAllergies} readOnly />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label for="patientEM"> patientEM</label>
                                                <input type="text" id="patientEM" class="form-control" value={patient.patientEM} readOnly />
                                            </div>

                                            <div className="form-group col-md-4">
                                                <label for="patientDisease"> patientDisease</label>
                                                <input type="text" id="patientDisease" class="form-control" value={patient.patientDisease} readOnly />
                                            </div>

                                            <div className="form-group col-md-4">
                                                <label for="patientSymptoms"> patient Symptoms</label>
                                                <input type="text" id="patientSymptoms" class="form-control" value={patient.patientSymptoms} readOnly />
                                            </div>

                                            < div class="form-group col-md-4">
                                                <label for="patientDateOfDiagnosis">   PatientDateOfDiagnosis</label>

                                                <input type="text" class="form-control" id="patientDateOfDiagnosis" value={patient.patientDateOfDiagnosis?.toString().slice(0, 10)} readOnly />
                                            </div>



                                            <div class="form-group col-md-4">
                                                <label for="patientReferredBy">   patient ReferredBy</label>
                                                <input type="text" class="form-control" id="patientReferredBy"
                                                    value={patient.patientReferredBy} readOnly />
                                            </div>
                                            <br></br>
                                        </div>
                                    </form>
                                </div ></div>

                        </div >
                        <Link to="/patients/list" class="btn btn-primary w-20" style={{ marginLeft: '1000px' }}>Back</Link>

                    </div >
                </div >
            </div>
        </>
    )
}

export default ListOfPatients