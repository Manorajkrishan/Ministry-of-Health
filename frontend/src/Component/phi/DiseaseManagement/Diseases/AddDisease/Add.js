import React, { useState } from 'react'
import axios from 'axios'

import './Add.css'
import Swal from 'sweetalert2'
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
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
                title: 'disease added',
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
                title: 'disease not added',
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
                                        <label for="diseaseName"> Enter the disease Name</label>
                                        <input type="text" class="form-control" id="diseaseName" placeholder="diseaseName" onChange={(e) => {
                                            setDiseaseName(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="symptoms">  Enter the symptoms</label>
                                        <input type="text" class="form-control" id="symptoms" placeholder="symptoms" onChange={(e) => {
                                            setSymptoms(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>

                                    < div class="form-group col-md-4">
                                        <label for=" causes">  Enter the causes</label>
                                        <input type="text" class="form-control" id=" causes" placeholder="causes" onChange={(e) => {
                                            setCauses(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>


                                    < div class="form-group col-md-4">
                                        <label for="preventionMeasures">  Enter the prevention measures</label>
                                        <input type="text" class="form-control" id=" preventionMeasures" placeholder="preventionMeasures" onChange={(e) => {
                                            setPreventionMeasures(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for="treatmentOption">treatmentOptions</label>
                                        <input type="text" class="form-control" id="treatmentOption" placeholder="treatmentOptions" onChange={(e) => {
                                            setTreatmentOptions(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for="diagnosticTest"> Enter the diagnostic Tests</label>
                                        <input type="text" class="form-control" id="diagnosticTest" placeholder="diagnosticTest" onChange={(e) => {
                                            setDiagnosticTests(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for=" riskFactors">  Enter the riskFactors</label>
                                        <input type="text" class="form-control" id=" riskFactors" placeholder="riskFactors" required onChange={(e) => {
                                            setRiskFactors(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for=" managementGuidlines">  Enter themanagement Guidlines</label>
                                        <input type="text" class="form-control" id="managementGuidlines" placeholder="managementGuidlines" onChange={(e) => {
                                            setManagementGuidlines(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    <br></br>

                                    < div class="form-group col-md-4">
                                        <label for="publicHealthRecommendations">   Enter the public Health Recommendations</label>
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
                                <button style={{ backgroundColor: "orange", width: '800px', marginLeft: '90px' }} type="submit">Submit</button>

                            </form >
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Add