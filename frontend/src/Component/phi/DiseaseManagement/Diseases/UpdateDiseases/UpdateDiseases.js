import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './UpdateDiseases.css'
import Swal from 'sweetalert2';
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
import { Link } from 'react-router-dom';
function UpdateDiseases() {
    const { id } = useParams();
    const [diseaseName, setDiseaseName] = useState("")
    const [symptoms, setSymptoms] = useState("")
    const [causes, setCauses] = useState("")
    const [preventionMeasures, setPreventionMeasures] = useState("")
    const [treatmentOption, setTreatmentOptions] = useState("")
    const [diagnosticTest, setDiagnosticTests] = useState("")
    const [riskFactors, setRiskFactors] = useState("")
    const [managementGuidlines, setManagementGuidlines] = useState("")
    const [publicHealthRecommendations, setPublicHealthRecommendations] = useState("")

    const update = (e) => {
        e.preventDefault();
        const updateDisease = {
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
        console.log(updateDisease);
        axios.put(`http://localhost:8090/disease/update/${id}`, updateDisease).then((re) => {

            console.log(re);
            //   window.location.replace("/disease/list");


            Swal.fire({
                icon: 'success',
                title: ' updated successfully',
                text: 'updated successfully',
                timer: '2000',
                showConfirmButton: false,

            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/disease/list")
                }
            })
            setDiseaseName("");
            setSymptoms("");
            setCauses("");
            setPreventionMeasures("");
            setTreatmentOptions("");
            setDiagnosticTests("");
            setRiskFactors("");
            setManagementGuidlines("");
            setPublicHealthRecommendations("");




        }).catch((err) => {
            //   alert(err);

            console.log(err, "error in update")
            Swal.fire({
                icon: 'error',
                title: ' updated unsuccessfull',
                text: ' updated unsuccessfull',
                timer: '2000',
                showConfirmButton: false,

            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.reload("disease/update")
                }
            })

        })
    }
    const getDisease = () => {
        axios.get(`http://localhost:8090/disease/get/${id}`).then((res) => {
            setDiseaseName(res.data.response.diseaseName);
            setSymptoms(res.data.response.symptoms);
            setCauses(res.data.response.causes);
            setPreventionMeasures(res.data.response.preventionMeasures);
            setTreatmentOptions(res.data.response.treatmentOption);
            setDiagnosticTests(res.data.response.diagnosticTest);
            setRiskFactors(res.data.response.riskFactors);
            setManagementGuidlines(res.data.response.managementGuidlines);
            setPublicHealthRecommendations(res.data.response.publicHealthRecommendations);

        }).catch((err) => {

            alert(err);
        })
    }
    useEffect(() => {
        getDisease();

    }, [id]);
    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div style={{ marginLeft: "300px" }}>
                <div>
                <div className="container" style={{ marginTop: '12px' }}>
                        <br></br>  <br></br>
                        <div className="updateP">

                            <h5 style={{ textAlign: 'left' }}>Edit Disease</h5>
                            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/disease/list">Disease management</a></li>
                  <li className="breadcrumb-item active">{diseaseName} </li>
                </ol>
              </nav>
                            <br></br>
                            <form onSubmit={update}>

                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="diseaseName">Disease Name</label>
                                        <input type="text" class="form-control" id="diseaseName" placeholder="diseaseName" onChange={(e) => {
                                            setDiseaseName(e.target.value)

                                        }}
                                            value={diseaseName} />

                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="symptoms">Symptoms</label>
                                        <input type="text" class="form-control" id="symptoms" placeholder="Last name" onChange={(e) => {
                                            setSymptoms(e.target.value)
                                        }}
                                            value={symptoms} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>

                                    < div class="form-group col-md-4">
                                        <label for=" causes">Causes</label>
                                        <input type="text" class="form-control" id=" causes" placeholder="causes" onChange={(e) => {
                                            setCauses(e.target.value)
                                        }}
                                            value={causes} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>


                                    < div class="form-group col-md-4">
                                        <label for="preventionMeasures">Prevention measures</label>
                                        <input type="text" class="form-control" id=" preventionMeasures" placeholder="preventionMeasures" onChange={(e) => {
                                            setPreventionMeasures(e.target.value)
                                        }}
                                            value={preventionMeasures} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for="treatmentOption">Treatment Options</label>
                                        <input type="text" class="form-control" id="treatmentOption" placeholder="treatmentOptions" onChange={(e) => {
                                            setTreatmentOptions(e.target.value)
                                        }} value={treatmentOption} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for="diagnosticTest">Diagnostic Tests</label>
                                        <input type="text" class="form-control" id=" diagnosticTest" placeholder="diagnosticTest" onChange={(e) => {
                                            setDiagnosticTests(e.target.value)
                                        }}
                                            value={diagnosticTest} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for=" riskFactors">Risk Factors</label>
                                        <input type="text" class="form-control" id=" riskFactors" placeholder="riskFactors" required onChange={(e) => {
                                            setRiskFactors(e.target.value)
                                        }} value={riskFactors} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-4">
                                        <label for=" managementGuidlines">Management Guidlines</label>
                                        <input type="text" class="form-control" id="managementGuidlines" placeholder="managementGuidlines" onChange={(e) => {
                                            setManagementGuidlines(e.target.value)
                                        }} value={managementGuidlines} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    <br></br>

                                    < div class="form-group col-md-4">
                                        <label for="publicHealthRecommendations">Public Health Recommendations</label>
                                        <select class="custom-select custom-select mb-3" onChange={(e) => {
                                            setPublicHealthRecommendations(e.target.value)
                                        }} value={publicHealthRecommendations}>
                                            <option selected>select</option>
                                            <option value="1">vaccination</option>
                                            <option value="2">hand hygiene</option>
                                            <option value="3">Regular health checkup</option>
                                            <option value="4">Avoid tobacco</option>


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




            </div>

        </>
    )
}

export default UpdateDiseases