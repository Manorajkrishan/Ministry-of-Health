import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './ListOfDiseases.css'
import Swal from 'sweetalert2'
import { BsBrushFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
function ListOfDiseases() {
    const [disease, setDisease] = useState([]);
    function getDisease() {
        axios.get(`http://localhost:8090/disease/display`).then((res) => {
            setDisease(res.data)
            // }).catch((err) => {
            //     alert(err)
            // })


        }).catch((err) => {
            // alert(err);
            // console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Disease not  Displayed',
                text: 'Disease not  Displayed',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/disease/list")
                }
            })

        })

    }

    useEffect(() => {
        getDisease()
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8090/disease/delete/${id}`).then(() => {
            //     alert(`disease deleted`);
            //     window.location.reload()
            // }).catch((err) => {
            //     alert(err)
            // })
            Swal.fire({
                icon: 'success',
                title: 'Disease deleted',
                text: 'deleted successfully',
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
            console.log(err)

            Swal.fire({
                icon: 'error',
                title: 'error in delete ',
                text: 'delete   unsuccessfully',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/disease/list")
                }
            })

        })

    }


    const filterData = (disease, searchkey) => {
        const result4 = disease.filter((disease) =>
            disease.diseaseName.toLowerCase().slice(0, 4).includes(searchkey.toLowerCase()));
        setDisease(result4)
    };
    const handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
        axios.get(`http://localhost:8090/disease/display`, {

        }).then((res) => {
            filterData(res.data, searchkey);

        }).catch((err) => {
            console.log(err);

        })
    }

    return (
        <>
                <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>

            <h3 style={{ marginTop: '15px' }} >Disease list</h3>
            <br></br>
            <div style={{ float: "right", marginRight: '50px', marginBottom: '50px', marginTop: '-60px' }}>
                <input type="text" onChange={handleSearchArea} placeholder='Search by  disease name' />
                <button >search</button>
                <Link to="/disease/add" className="btn btn-outline-secondary" style={{ marginLeft: '160px' }}>Add</Link>
                <Link to="/documents/disease" className="btn btn-outline-primary" style={{ marginLeft: '20px' }}>PDF</Link>
                <Link to="/disease/viewmore" className="btn btn-outline-primary" style={{ marginLeft: '60px' }}>More detail List</Link>

            </div>
            <hr></hr>
            <br></br>
            <div className="" style={{ marginRight: '50px' }}>
                <div className="container" style={{ marginLeft: '20px', marginRight: '50px' }}>
                <div className="table-responsive">
                <table className="table table-striped">        
                                <thead>
                        <tr>
                            <th className="headerColor" scope="col">index</th>


                            <th className="headerColor" scope="col">Disease Name</th>

                            <th className="headerColor" scope="col">Symptoms</th>
                            <th className="headerColor" scope="col">Causes</th>
                            {/* <th className="headerColor" scope="col">Prevention Measures</th>
                            <th className="headerColor" scope="col">Treatment Option</th> */}

{/* 
                            <th className="headerColor" scope="col">Diagnostic Test</th> */}
                            {/* <th className="headerColor" scope="col">Risk Factors</th> */}
                            {/* <th className="headerColor" scope="col">Prevention Measures</th> */}

                            <th className="headerColor" scope="col">Public Health Recommendation</th>


                            <th className="headerColor" scope="col">Action</th>

                        </tr>
                    </thead>
                        <tbody>
                            {disease.map((disease, index) => (
                                <tr key={disease._id} className='col-sm-3 mb-3'>

                                    {/* <th scope="row"></th> */}
                                    <td>{index + 1}</td>


                                    <td>{disease.diseaseName}</td>
                                    <td>{disease.symptoms}</td>
                                    <td>{disease.causes}</td>
                                    {/* <td>{disease.preventionMeasures}</td> */}
                                    {/* <td>{disease.treatmentOption}</td> */}
                                    {/* <td>{disease.diagnosticTest}</td> */}
                                    {/* <td>{disease.riskFactors}</td> */}
                                    {/* <td>{disease.managementGuidlines}</td> */}
                                    <td>{disease.publicHealthRecommendations}</td>

                                    <td>
                                        <Link to={`/disease/update/${disease._id}`} className='btn btn-primary' style={{ marginBottom: '10px' }}><BsBrushFill /></Link>

                                        <button className='btn btn-danger' type='button' onClick={() => handleDelete(disease._id)}><RiDeleteBin2Fill /></button>
                                   
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                    </div>
                </div>
            </div>
            </div>






        </>
    )

}

export default ListOfDiseases