import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useReactToPrint } from "react-to-print";

import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
function DiseaseListReport() {
    const [disease, setDisease] = useState([]);

    function getDisease() {
        axios.get(`http://localhost:8090/disease/display`).then((res) => {
            setDisease(res.data)

        }).catch((err) => {
            console.log(err);
            alert(err);
        })

    }

    useEffect(() => {
        getDisease()
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
            <h3 style={{ marginTop: '15px' }} >Disease list</h3>
            <br></br>
            <div style={{ float: "right", marginRight: '50px', marginBottom: '50px', marginTop: '-60px' }}>

            </div>
            <br></br>
            <div ref={generatePDF} style={{ width: '100%' }}>
                <div className="" style={{ marginRight: '50px' }}>
                    <div className="container" style={{ marginLeft: '20px', marginRight: '50px' }}>


                        <table class="table-bordered">
                            <thead>
                                <tr>
                                    <th className="headerColor" scope="col">index</th>


                                    <th className="headerColor" scope="col">Disease Name</th>

                                    <th className="headerColor" scope="col">Symptoms</th>
                                    <th className="headerColor" scope="col">Causes</th>
                                    <th className="headerColor" scope="col">Prevention Measures</th>
                                    <th className="headerColor" scope="col">Treatment Option</th>


                                    <th className="headerColor" scope="col">Diagnostic Test</th>
                                    <th className="headerColor" scope="col">Risk Factors</th>
                                    <th className="headerColor" scope="col">Prevention Measures</th>

                                    <th className="headerColor" scope="col">Public Health Recommendation</th>



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
                                        <td>{disease.preventionMeasures}</td>
                                        <td>{disease.treatmentOption}</td>
                                        <td>{disease.diagnosticTest}</td>
                                        <td>{disease.riskFactors}</td>
                                        <td>{disease.managementGuidlines}</td>
                                        <td>{disease.publicHealthRecommendations}</td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
                {/* <div style={{ float: "right", marginRight: "50px" }}> */}
                <button className="btn btn-success" onClick={() => { handlePrint() }}>PDF</button>
                {/* </div> */}
            </div>


</div>

        </>

    )

}

export default DiseaseListReport