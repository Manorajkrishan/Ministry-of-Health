//add a dorpdown to mention wheher the patient is guided or nt.
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './ListOfPatients.css'
import Swal from 'sweetalert2'
import { BsBrushFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
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

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8090/patient/delete/${id}`).then(() => {

            Swal.fire({
                icon: 'success',
                title: 'patient deleted',
                text: 'deleted successfully',
                timer: '2000',
                showConfirmationButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) { window.location.reload("/patients/list") }
            })
        }).catch((err) => {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'error in delete',
                text: 'delete unsuccessful',
                timer: '2000',
                showConfirmationButton: false
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.reload("/patients/list")
                }
            })

        })
    }

    const handleView = (patient) => {
        setPatient(patient);
    }


    const filterData = (patient, searchkey) => {
        const resultl = patient.filter((patient) =>
            patient.patientName.toLowerCase().slice(0, 4).includes(searchkey.toLowerCase()));
        setPatient(resultl);
    };
    const handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
        axios.get('http://localhost:8090/patient/display', {
            // headers: {
            //     'Authorization': `Bearer ${localStorage.getItem('token') }`,
            // 'Content-type': 'application/json'
            // }
        })
            .then((res) => {
                filterData(res.data, searchkey);

            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div style={{ marginLeft: "300px" }}>
                {/* <h4 style={{ textAlign: 'left-align', textDecoration: 'bold' }}>Patient's list</h4>

            <Link to="/patient/add" className="btn btn-primary" style={{ marginBottom: '10px', marginRight: '0px' }}>Add</Link> */}

                <h3 style={{ marginTop: '15px' }} >patients with infectious disease list</h3>
                <br></br>
                <div style={{ float: "right", marginRight: '50px', marginBottom: '50px', marginTop: '-60px' }}>
                    <input type="text" onChange={handleSearchArea} placeholder='Search by  patient name' />
                    <button >search</button>
                    <Link to="/patient/add" className="btn btn-outline-secondary" style={{ marginLeft: '160px' }}>Add</Link>
                    <Link to="/InfectiousDiseaseList/pdf" className="btn btn-outline-primary" style={{ marginLeft: '20px' }}>PDF</Link>
                    <Link to="/createmessage" className="btn btn-outline-primary" style={{ marginLeft: '20px' }}>Send notices</Link>

                </div>
                <hr></hr>





                <br></br>
                <div className="" style={{ marginRight: '50px' }}>
                    <div className="container" style={{ marginLeft: '20px', marginRight: '50px' }}>
                        <div style={{
                            display: "inline-block",
                            float: 'right',
                            marginRight: '3%',
                        }}>



                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="headerColor" scope="col">index</th>
                                        {/* <th className="headerColor" scope="col">ID</th> */}
                                        <th className="headerColor" scope="col">patient name</th>
                                        {/* <th className="headerColor" scope="col">NIC</th> */}
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
                                        <th className="headerColor" scope="col" >Vaccination Status</th>
                                        <th className="headerColor" scope="col">VIew</th>

                                        <th className="headerColor" scope="col" >Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {patient.map((patient, index) => (
                                        <tr key={patient._id} className='col-sm-3 mb-3'>
                                            <td>{index + 1}</td>
                                            {/* <td>{patient._id}</td> */}
                                            <td>{patient.patientName}</td>
                                            {/* <td>{patient.patientNic}</td> */}
                                            <td>{patient.patientAge}</td>
                                            <td>{patient.patientGender}</td>
                                            <td>{patient.patientAddress}</td>
                                            <td>{patient.patientPhone}</td>
                                            {/* <td>{patient.patientAllergies}</td> */}
                                            {/* <td>{patient.patientEM}</td> */}
                                            <td>{patient.patientDisease}</td>
                                            {/* <td>{patient.patientSymptoms}</td> */}
                                            <td>{patient.patientDateOfDiagnosis?.toString().slice(0, 10)}</td>

                                            <td>{patient.patientReferredBy}</td>
                                            <td>
                                                <Link to="/allvaccine" className="btn btn-danger" >Status</Link>
                                            </td>
                                            <td>



                                                <Link to={`/patient/detailed/${patient._id}`}>
                                                    <button className="btn btn-success"><FaEye /></button>
                                                </Link>
                                                {/* Link to must be added */}
                                            </td>

                                            <td>
                                                <div style={{ display: 'flex' }}>
                                                    <Link to={`/patient/update/${patient._id}`} className='btn btn-primary' style={{ marginBottom: '10px', marginRight: '5px' }}><BsBrushFill /></Link>

                                                    <br></br>
                                                    <button className='btn btn-danger' onClick={() => handleDelete(patient._id)}><RiDeleteBin2Fill /></button>

                                                </div>






                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default ListOfPatients