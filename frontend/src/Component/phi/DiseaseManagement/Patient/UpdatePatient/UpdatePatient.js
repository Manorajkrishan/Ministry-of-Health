import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';
import './UpdatePatient.css'
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
import { Link } from 'react-router-dom';
function UpdatePatient() {
    const { id } = useParams();
    const [patientName, setPatientName] = useState("")
    const [patientNic, setPatientNic] = useState("")
    const [patientAge, setPatientAge] = useState("")
    const [patientGender, setPatientGender] = useState("")
    const [patientAddress, setPatientAddress] = useState("")
    const [patientPhone, setPatientPhone] = useState("")
    const [patientAllergies, setPatientAllergies] = useState("")
    const [patientEM, setPatientEM] = useState("")
    const [patientDisease, setPatientDisease] = useState("")
    const [patientSymptoms, setPatientSymptoms] = useState("")
    const [patientDateOfDiagnosis, setPatientDateOfDiagnosis] = useState("")

    const [patientImg, setPatientImg] = useState("")
    const [patientReferredBy, setPatientReferredBy] = useState("")

    const update = (e) => {
        const nicpatt = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/
        const phonesl = /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/
        e.preventDefault();
        const updatePatient = {
            patientName,
            patientNic,
            patientAge,
            patientGender,
            patientAddress,
            patientPhone,
            patientAllergies,
            patientEM,
            patientDisease,
            patientSymptoms,
            patientDateOfDiagnosis,

            patientImg,
            patientReferredBy
        };
        console.log(updatePatient);
        // if (!nicpatt.test(patientNic)) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'patient not added',
        //         text: 'Wrong NIC',
        //         timer: '2000',
        //         shoConfirmaButton: false,
        //     })
        //     return
        // }
        if (!phonesl.test(patientPhone)) {
            Swal.fire({
                icon: 'error',
                title: 'patient not added',
                text: 'Wrong Phone Number',
                timer: '2000',
                shoConfirmaButton: false,
            })
        }
        axios.put(`http://localhost:8090/patient/update/${id}`, updatePatient).then((res) => {
            console.log(res);
            Swal.fire({
                icon: `success`,
                title: `patient updated`,
                text: `updated`,
                timer: `2000`,
                showConfirmationButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/patients/list")
                }

            })


            setPatientName("")
            setPatientNic("");
            setPatientAge("");
            setPatientGender("");
            setPatientAddress("");
            setPatientPhone("");
            setPatientAllergies("");
            setPatientEM("");
            setPatientDisease("");
            setPatientSymptoms("");
            setPatientDateOfDiagnosis("");
            setPatientImg("");
            setPatientReferredBy("");

        }).catch((err) => {
            // alert(err);
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'error in update',
                text: 'error in update',
                timer: '2000',
                showConfirmButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isConfirmed.Dismissed) {
                    window.location.reload("/patient/update")
                }
            })
        })
    }

    // const handleImgChange = (e) => {
    //     setPatientImg(e.target.files[0]);
    // }
    const getPatient = () => {
        axios.get(`http://localhost:8090/patient/get/${id}`).then((res) => {
            setPatientName(res.data.response.patientName);
            setPatientNic(res.data.response.patientNic);
            setPatientAge(res.data.response.patientAge);
            setPatientGender(res.data.response.patientGender);
            setPatientAddress(res.data.response.patientAddress);
            setPatientPhone(res.data.response.patientPhone);
            setPatientAllergies(res.data.response.patientAllergies);
            setPatientEM(res.data.response.patientEM);
            setPatientDisease(res.data.response.patientDisease);
            setPatientSymptoms(res.data.response.patientSymptoms);
            setPatientDateOfDiagnosis(res.data.response.patientDateofDiagnosis);
            setPatientImg(res.data.response.patientImg);
            setPatientReferredBy(res.data.response.patientReferredBy)
        }).catch((err) => {
            alert(err);

        })
    }
    useEffect(() => {
        getPatient();
    }, [id]);

    const handleGenderChange = (event) => {
        setPatientGender(event.target.value);
    }

    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div style={{ marginLeft: "300px" }}>
                <div>
                    <div className="container">
                        <br></br><br></br>
                        <div className="updateP">
                            <h5 style={{ textAlign: 'left' }}>Edit patient details</h5>
                            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/patients/list">Infectious disease patient management</a></li>
                  <li className="breadcrumb-item active">{patientName} </li>
                </ol>
              </nav>
                            <br></br>
                            <form onSubmit={update}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="patientName">Name</label>
                                        <input type="text" class="form-control" id="patientName" placeHolder="edit the name" onChange={(e) => {
                                            setPatientName(e.target.value);

                                        }}
                                            value={patientName} />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="patientNic">NIC</label>
                                        <input type="text" class="form-control" id="patientNic" placeholder="NIC" onChange={(e) => {
                                            setPatientNic(e.target.value)
                                        }}
                                            value={patientNic} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="patientAge">Age</label>
                                        <input type="text" id="patientAge" placeholder="patientAge" class="form-control" onChange={(e) => {
                                            setPatientAge(e.target.value);
                                        }} value={patientAge} />
                                    </div>



                                    < div class="form-group col-md-4">
                                        <label for="patientGender">Gender </label>

                                        <select className="form-control" id="patientGender" value={patientGender} onChange={handleGenderChange}>
                                            <option value="">select the gender</option>
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                        </select>


                                    </div>


                                    <div className="form-group col-md-4">
                                        <label for="patientAddress">Patient Address</label>
                                        <input type="text" id="patientAddress" placeholder="patientAddress" class="form-control" onChange={(e) => {
                                            setPatientAddress(e.target.value);
                                        }} value={patientAddress} />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="patientPhone">Patient Phone</label>
                                        <input required type="tel" class="form-control" id="patientPhone" value={patientPhone} placeholder="patientPhone" minLength={10} maxLength={10} title="Please enter a 10-digit phone number" onChange={(e) => {
                                            setPatientPhone(e.target.value);
                                        }} />
                                    </div>


                                    <div className="form-group col-md-4">
                                        <label for="patientAllergies">Current Allergies</label>
                                        <input type="text" id="patientAllergies" placeholder="patientAllergies" class="form-control" onChange={(e) => {
                                            setPatientAllergies(e.target.value);
                                        }} value={patientAllergies} />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="patientEM">Existing Medication</label>
                                        <input type="text" id="patientEM" placeholder="patientEM" class="form-control" onChange={(e) => {
                                            setPatientEM(e.target.value);
                                        }} value={patientEM} />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="patientDisease">Patient Disease</label>
                                        <input type="text" id="patientDisease" placeholder="patientDisease" class="form-control" onChange={(e) => {
                                            setPatientDisease(e.target.value);
                                        }} value={patientDisease} />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="patientSymptoms">Patient Symptoms</label>
                                        <input type="text" id="patientSymptoms" placeholder="patientSymptoms" class="form-control" onChange={(e) => {
                                            setPatientSymptoms(e.target.value);
                                        }} value={patientSymptoms} />
                                    </div>

                                    < div class="form-group col-md-4">
                                        <label for="patientDateOfDiagnosis">Date Of Diagnosis</label>

                                        <input type="date" class="form-control" id="patientDateOfDiagnosis" value={patientDateOfDiagnosis?.toString().slice(0, 10)} onChange={(e) => {
                                            console.log(e);
                                            setPatientDateOfDiagnosis(e.target.value)
                                        }} />
                                    </div>

                                    < div class="form-group col-md-4">
                                        <label for="patientImg"> Patient image</label>

                                        <input type="file" class="form-control" id="patientImg" placeholder="patientImg" onChange={(e) => {
                                            console.log(e);
                                            setPatientImg(e.target.value)
                                        }} />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="patientReferredBy">Patient ReferredBy</label>
                                        <input type="text" class="form-control" id="patientReferredBy" placeholder="patientReferredBy" onChange={(e) => {

                                            setPatientReferredBy(e.target.value)
                                        }}
                                            value={patientReferredBy} />
                                    </div>
                                    <br></br>


                                </div>


                                <button style={{ backgroundColor: "orange", color: "#fff", width: '400px', marginLeft: '90px', padding: '10px', borderRadius: '5px', border: 'none', textAlign: 'center', cursor: 'pointer' }} type="submit">Submit</button>
                                <Link to="/previous-page" style={{ backgroundColor: "#e0e0e0", color: "#333", width: '400px', marginLeft: '90px', padding: '10px', borderRadius: '5px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>Back</Link>






                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>





    )
}

export default UpdatePatient