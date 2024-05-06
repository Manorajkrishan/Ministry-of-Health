import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './UpdateDiseases.css'
import Swal from 'sweetalert2';
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
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
            <div className="container">
                <br></br>  <br></br>
                <div className="updateD">

                    <h5 style={{ textAlign: 'center' }}>Update Disease</h5>
                    <br></br>
                    <form onSubmit={update}>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="diseaseName"> Enter the disease Name</label>
                                <input type="text" class="form-control" id="diseaseName" placeholder="diseaseName" onChange={(e) => {
                                    setDiseaseName(e.target.value)

                                }}
                                    value={diseaseName} />

                                {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                            </div>
                            <div class="form-group col-md-6">
                                <label for="symptoms">  Enter the symptoms</label>
                                <input type="text" class="form-control" id="symptoms" placeholder="Last name" onChange={(e) => {
                                    setSymptoms(e.target.value)
                                }}
                                    value={symptoms} />
                                {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                            </div>

                            < div class="form-group col-md-6">
                                <label for=" causes">  Enter the causes</label>
                                <input type="text" class="form-control" id=" causes" onChange={(e) => {
                                    setCauses(e.target.value)
                                }}
                                    value={causes} />
                                {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                            </div>
                            < div class="form-group col-md-6">
                                <label for="preventionMeasures">  Enter the prevention measures</label>
                                <input type="text" class="form-control" id="preventionMeasures" onChange={(e) => {
                                    setPreventionMeasures(e.target.value)
                                }}
                                    value={preventionMeasures} />
                            </div>
                            < div class="form-group col-md-6">
                                <label for="treatmentOption">treatmentOptions</label>
                                <input type="text" class="form-control" id="treatmentOption" placeholder="treatmentOptions" onChange={(e) => {
                                    setTreatmentOptions(e.target.value)
                                }} value={treatmentOption} />
                                {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                            </div>
                            < div class="form-group col-md-6">
                                <label for="diagnosticTest"> Enter the diagnostic Tests</label>
                                <input type="text" class="form-control" id=" diagnosticTest" placeholder="diagnosticTest" onChange={(e) => {
                                    setDiagnosticTests(e.target.value)
                                }}
                                    value={diagnosticTest} />
                                {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                            </div>
                            < div class="form-group col-md-6">
                                <label for=" riskFactors">  Enter the riskFactors</label>
                                <input type="text" class="form-control" id=" riskFactors" placeholder="riskFactors" required onChange={(e) => {
                                    setRiskFactors(e.target.value)
                                }} value={riskFactors} />
                                {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                            </div>
                            < div class="form-group col-md-6">
                                <label for=" managementGuidlines">  Enter themanagement Guidlines</label>
                                <input type="text" class="form-control" id="managementGuidlines" placeholder="managementGuidlines" onChange={(e) => {
                                    setManagementGuidlines(e.target.value)
                                }} value={managementGuidlines} />
                                {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                            </div>
                            <br></br>

                            < div class="form-group col-md-6">
                                <label for="publicHealthRecommendations">   Enter the public Health Recommendations</label>
                                <select class="custom-select custom-select mb-3" onChange={(e) => {
                                    setPublicHealthRecommendations(e.target.value)
                                }} value={publicHealthRecommendations}>

                                    <option selected>{publicHealthRecommendations}</option>
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
                        <button class="btn btn-primary w-100" type="submit">Submit</button>

                    </form >
                </div>
               
                </div>
            </div>




        </div>

        </>
    )
}

export default UpdateDiseases