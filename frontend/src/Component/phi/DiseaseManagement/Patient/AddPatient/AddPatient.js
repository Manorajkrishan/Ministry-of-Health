import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './AddPatient.css'
import { FaCalendarAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'

import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';


function AddPatient() {

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
    const [vaccinationStatus, setVaccinationStatus] = useState("")
    const [patientImg, setPatientImg] = useState("")
    const [patientReferredBy, setPatientReferredBy] = useState("")

    async function sendData(e) {

        const nicpatt = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/
        const phonesl = /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/
        e.preventDefault();

        const newPatient = {
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
        console.log(newPatient);

        if (!nicpatt.test(patientNic)) {
            Swal.fire({
                icon: 'error',
                title: 'patient not added',
                text: 'Wrong NIC',
                timer: '2000',
                shoConfirmaButton: false,
            })
            return
        }
        if (!phonesl.test(patientPhone)) {
            Swal.fire({
                icon: 'error',
                title: 'patient not added',
                text: 'Wrong Phone Number',
                timer: '2000',
                shoConfirmaButton: false,
            })
            return
        }
        axios.post('http://localhost:8090/patient/add', newPatient).then(() => {


            Swal.fire({
                icon: 'success',
                title: 'patient added',
                text: 'added successfully',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/patients/list")
                }
            })

        }).catch((err) => {
            // alert(err);
            // console.log(err)

            Swal.fire({
                icon: 'error',
                title: 'patient not added',
                text: 'added  unsuccessfully',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/patient/add")
                }
            })

        })

    }

    const handleGenderChange = (event) => {
        setPatientGender(event.target.value);
    }
    const handlePatientReferredBy = (event) => {
        setPatientReferredBy(event.target.value);
    }

    const [disease, setDisease] = useState([]);
    useEffect(() => {
        fetchDiseases();
    }, []);

    const fetchDiseases = () => {
        axios.get('http://localhost:8090/disease/display').then(response => {
            setDisease(response.data);

        }).catch(error => {
            console.log('error in fetch', error);
        })
    };
    const handleAddDisease = () => {
        const newDisease = { diseaseName: 'new disease' };
        axios.post('http://localhost:8090/disease/display', newDisease).then(response => {
            fetchDiseases();

        }).catch(error => {
            console.log('error in fetch', error);
        })
    }

    //map
    // const inputRef = useRef()
    // const inputStyle = {
    //     boxShadow: 'inset 0 0 10px #eeev !important',
    //     border: '2px solid #eee',
    //     width: '456px',
    //     height: '40px',
    //     marginLeft: '16px',
    //     borderRadius: '20px',
    //     fontWeight: '300 !important',
    //     outline: 'none',
    //     padding: '10px, 20px',
    //     marginBottom: '10px',

    // }
    // const autoComplete = new window.google.maps.places.Autocomplete(
    //     inputRef.current,
    // )
    // autoComplete.addListener('place_changed', () => {
    //     const place = autoComplete.getPlace();
    //     if (!place.geometry || !place.geometry.location) {
    //         alert("Location is unavailable");
    //     }
    //     if (place.geometry.viewport || place.geometry.location) {
    //         console.log(place.geometry.locaton)
    //     }
    // })





    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div style={{ marginLeft: "300px" }}>

                <div >
                    <div className="container">



                        <div className="add">

                            <h2 style={{ textAlign: 'center' }}>Add patients form</h2>
                            <h4 style={{ fontSize: '15px', color: "red" }}>This form is to add the details of the local patients who are affected with infectious diseases.</h4>
                            <hr></hr>
                            <br></br>
                            <form onSubmit={sendData}>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="patientName"> Enter the patient Name</label>
                                        <input type="text" class="form-control" id="patientName" placeholder="eg:John" onChange={(e) => {
                                            setPatientName(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>


                                    <div class="form-group col-md-6">
                                        <label for="patientNic">  Enter the patient's nic</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={patientNic}
                                            id="patientNic"
                                            placeholder="12387459210V"
                                            onChange={(e) => {
                                                setPatientNic(e.target.value)
                                            }}
                                            required

                                        />

                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="patientAge">  Enter the patient's age</label>
                                        <input type="text" class="form-control" id="patientAge" placeholder="eg:17" onChange={(e) => {
                                            setPatientAge(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>

                                    < div class="form-group col-md-6">
                                        <label for="patientGender">select the gender of the patient</label>

                                        <select className="form-control" id="patientGender" value={patientGender} onChange={handleGenderChange}>
                                            <option value="">select the gender</option>
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                        </select>


                                    </div>


                                    < div class="form-group col-md-6">
                                        <label for="patientAddress">  Enter the patientAddress</label>
                                        <input type="text" class="form-control" id=" patientAddress" placeholder="patientAddress" onChange={(e) => {
                                            setPatientAddress(e.target.value)
                                        }} />
                                        {/* <Map /> */}
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>

                                    < div class="form-group col-md-6">
                                        <label for="patientPhone">Patient Phone</label>
                                        <input required type="tel" class="form-control" id="patientPhone" value={patientPhone} placeholder="patientPhone" minLength={10} maxLength={10} title="Please enter a 10-digit phone number" onChange={(e) => {
                                            setPatientPhone(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-6">
                                        <label for="patientAllergies"> Enter the patientAllergies</label>
                                        <input type="text" class="form-control" id="patientAllergies" placeholder="diagnostic allergies" onChange={(e) => {
                                            setPatientAllergies(e.target.value)
                                        }} />
                                        {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                    </div>
                                    < div class="form-group col-md-6">
                                        <label for="patientEM">  Enter the patient Existing Medication</label>
                                        <input type="text" class="form-control" id="patientEM" placeholder="Existing Medication" required onChange={(e) => {
                                            setPatientEM(e.target.value)
                                        }} />

                                    </div>
                                    {/* < div class="form-group col-md-6">
                                <label for="patientDiesease">  Enter the patientDiesease</label>
                                <input type="text" class="form-control" id="patientDiesease" placeholder="patientDiesease" onChange={(e) => {
                                    setPatientDisease(e.target.value)
                                }} />
                            
                            </div> */}

                                    {/* 
                            data from the disease management gets to the dropdown of thepatient */}
                                    <div className="form-group col-md-6">
                                        <label htmlFor="patientDisease">Select Disease</label>
                                        <select className="form-control" id="patientDisease" value={patientDisease} onChange={(e) => setPatientDisease(e.target.value)}>
                                            <option value="">Select Disease</option>
                                            {disease.map(disease => (
                                                <option key={disease.id} value={disease.diseaseName}>{disease.diseaseName}</option>


                                            ))}
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="patientSymptoms">  Enter the patient Symptoms</label>
                                        <input type="text" class="form-control" id="patientSymptoms" placeholder="eg:headache" onChange={(e) => {
                                            console.log(e);
                                            setPatientSymptoms(e.target.value)
                                        }} />
                                    </div>
                                    < div class="form-group col-md-6">
                                        <label for="patientDateOfDiagnosis">  Enter the Patient Date Of Diagnosis</label>

                                        <input type="date" class="form-control" id="patientDateOfDiagnosis" placeholder="2/12/2022" onChange={(e) => {
                                            console.log(e);
                                            setPatientDateOfDiagnosis(e.target.value)
                                        }} />
                                    </div>
                                    < div class="form-group col-md-6">
                                        <label for="patientImg">  Enter the Patient image</label>

                                        <input type="file" class="form-control" id="patientImg" placeholder="patientImg" onChange={(e) => {
                                            console.log(e);
                                            setPatientImg(e.target.value)
                                        }} />
                                    </div>
                                    {/* <div class="form-group col-md-6">
                                <label for="patientReferredBy">  Enter the patientReferredBy</label>
                                <select className="form-control" id="patientReferredBy" value={patientReferredBy} onChange={handlePatientReferredBy}>
                                    <option value="">select the name of the referred public health inspector</option>
                                    <option value="A">Saman</option>
                                    <option value="B">Kalum</option>
                                </select>
                            </div> */}

                                    <div class="form-group col-md-6">
                                        <label for="patientReferredBy">  Enter the patientReferredBy</label>

                                        <input type="text" class="form-control" id="patientReferredBy" placeholder="ex:Saman" onChange={(e) => {
                                            console.log(e);
                                            setPatientReferredBy(e.target.value)
                                        }} />
                                    </div>
                                    <br></br>




                                    {/* < div class="form-group col-md-6">
                                <label for="publicHealthRecommendations">   Enter the public Health Recommendations</label>
                                <select class="custom-select custom-select mb-3" onChange={(e) => {
                                    setPublicHealthRecommendations(e.target.value)
                                }}>
                                    <option selected>select</option>
                                    <option value="vaccination">vaccination</option>
                                    <option value="hand hygiene">hand hygiene</option>
                                    <option value="Regular health checkup">Regular health checkup</option>
                                    <option value="Avoid tobacco">Avoid tobacco</option>


                                </select> */}

                                    {/* <div class="valid-feedback">
                            Looks good!
                        </div> */}
                                </div>

                                <button class="btn btn-primary w-20 " type="submit">Submit</button>

                            </form >
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default AddPatient