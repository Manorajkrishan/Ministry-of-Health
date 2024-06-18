import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import './Add.css'
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
import { Link } from 'react-router-dom';
function Add() {

    const [diseaseName, setDiseaseName] = useState("")
    const [symptoms, setSymptoms] = useState("")
    const [causes, setCauses] = useState("")
    const [preventionMeasures, setPreventionMeasures] = useState("")
    const [treatmentOption, setTreatmentOptions] = useState("")
    const [diagnosticTest, setDiagnosticTests] = useState("")
    const [riskFactors, setRiskFactors] = useState("")
    const [managementGuidlines, setManagementGuidlines] = useState("")
    const [publicHealthRecommendations, setPublicHealthRecommendations] = useState("")

    async function sendData(e) {
        e.preventDefault();

        const newDisease = {
            diseaseName,
            symptoms,
            causes,
            preventionMeasures,
            treatmentOption,
            diagnosticTest,
            riskFactors,
            managementGuidlines,
            publicHealthRecommendations
        };
        console.log(newDisease);
        axios.post('http://localhost:8090/disease/add', newDisease).then(() => {


            Swal.fire({
                icon: 'success',
                title: 'product added',
                text: 'added successfully',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/disease/list")
                }
            })

        }).catch((err) => {
            // alert(err);
            // console.log(err)

            Swal.fire({
                icon: 'error',
                title: 'product not added',
                text: 'added  unsuccessfully',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/disease/add")
                }
            })

        })

    }



    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div style={{ marginLeft: "300px" }}>
                <div >
                    <div className="container">
                        <br></br>  <br></br>
                        <div className="add">

                            <h5 style={{ textAlign: 'left' }}>Add Disease</h5>
                            <br></br>
                            <form onSubmit={sendData}>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="diseaseName">Disease Name</label>
                                        <input type="text" class="form-control" id="diseaseName" placeholder="diseaseName" onChange={(e) => {
                                            setDiseaseName(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="symptoms">Symptoms</label>
                                        <input type="text" class="form-control" id="symptoms" placeholder="Last name" onChange={(e) => {
                                            setSymptoms(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>

                                    < div class="form-group col-md-4">
                                        <label for=" causes">Causes</label>
                                        <input type="text" class="form-control" id=" causes" placeholder="causes" onChange={(e) => {
                                            setCauses(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>


                                    < div class="form-group col-md-4">
                                        <label for="preventionMeasures">Prevention measures</label>
                                        <input type="text" class="form-control" id=" preventionMeasures" placeholder="eg:stay home" onChange={(e) => {
                                            setPreventionMeasures(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for="treatmentOption">Treatment Options</label>
                                        <input type="text" class="form-control" id="treatmentOption" placeholder=" eg:ibuprofen" onChange={(e) => {
                                            setTreatmentOptions(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for="diagnosticTest">Diagnostic Tests</label>
                                        <input type="text" class="form-control" id="diagnosticTest" placeholder="eg:PCR" onChange={(e) => {
                                            setDiagnosticTests(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for=" riskFactors">RiskFactors</label>
                                        <input type="text" class="form-control" id=" riskFactors" placeholder="eg:riskFactors" required onChange={(e) => {
                                            setRiskFactors(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for=" managementGuidlines">Management Guidlines</label>
                                        <input type="text" class="form-control" id="managementGuidlines" placeholder="ex:vaccination" onChange={(e) => {
                                            setManagementGuidlines(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    <br></br>

                                    < div class="form-group col-md-4">
                                        <label for="publicHealthRecommendations">Public Health Recommendations</label>
                                        <select class="custom-select custom-select mb-3" onChange={(e) => {
                                            setPublicHealthRecommendations(e.target.value)
                                        }}>
                                            <option selected>select</option>
                                            <option value="vaccination">vaccination</option>
                                            <option value="hand hygiene">hand hygiene</option>
                                            <option value="Regular health checkup">Regular health checkup</option>
                                            <option value="Avoid tobacco">Avoid tobacco</option>


                                        </select>

                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                </div>
                                <button style={{ backgroundColor: "orange", color: "#fff", width: '400px', marginLeft: '90px', padding: '10px', borderRadius: '5px', border: 'none', textAlign: 'center', cursor: 'pointer' }} type="submit">Submit</button>
                                <Link to="/disease/list" style={{ backgroundColor: "#e0e0e0", color: "#333", width: '400px', marginLeft: '90px', padding: '10px', borderRadius: '5px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>Back</Link>'
                            </form >
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Add