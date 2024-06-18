import React, { useState } from 'react'
import axios from 'axios'
import './addAwarenessSession.css'
import DMsideNav from '../DMNav/DMsideNav'
import HeaderPHI from '../Header/Header'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function AddAwarenessSession() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [targetAudience, setTargetAudience] = useState("")
    const [presenter, setPresenter] = useState("")
    const [sampleImg, setSampleImg] = useState("")

    async function sendData(e) {
        e.preventDefault();
        const newSession = {
            title,
            description,
            date,
            time,
            location,
            targetAudience,
            presenter,
            sampleImg
        };
        console.log(newSession);
        axios.post(`http://localhost:8090/session/add`, newSession).then(() => {

            Swal.fire({
                icon: 'success',
                title: 'session added',
                text: 'added successfully',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.replace("/AwarenessSession/display")
                }
            })

        }).catch((err) => {
            // alert(err);
            // console.log(err)

            Swal.fire({
                icon: 'error',
                title: 'session not added',
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
    const handleAudienceChange = (event) => {
        setTargetAudience(event.target.value);
    }

    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div style={{ marginLeft: "300px" }}>
                <div>
                    <div className="container">
                        <br></br>
                        <br></br>
                        <div className="addSession">
                            <h5 style={{ textAlign: 'left' }}>Add awareness session</h5>
                            <h4 style={{ fontSize: '15px', color: "red" }}>This form is to add the details of the awareness sessions  which is held for the patients with non-communicable diseases.</h4>                            <br></br>

                            <br></br>
                            <form onSubmit={sendData}>

                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="title">Title</label>
                                        <input type="text" class="form-control" id="title" placeholder="title" onChange={(e) => {
                                            setTitle(e.target.value)
                                        }} />

                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="description">Description</label>
                                        <input type="text" class="form-control" id="title" placeholder="description" onChange={(e) => {
                                            setDescription(e.target.value)
                                        }} />


                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="date">Date</label>
                                        <input type="date" class="form-control" id="date" placeholder="date" onChange={(e) => {
                                            setDate(e.target.value)
                                        }} />


                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="time">Time</label>
                                        <input type="time" class="form-control" id="title" placeholder="time" onChange={(e) => {
                                            setTime(e.target.value)
                                        }} />

                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="location">location</label>
                                        <input type="text" class="form-control" id="location" placeholder="location" onChange={(e) => {
                                            setLocation(e.target.value)
                                        }} />


                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="targetAudience">Target audience</label>

                                        <select type="text" class="form-control" id="targetAudience" placeholder="targetAudience" onChange={handleAudienceChange}>


                                            <option value="">select the target Audience</option>
                                            <option value="teenagers">Teenagers</option>
                                            <option value="adults">Adults</option>

                                            <option value="all">All</option>
                                            <option value="all">Students</option>
                                            <option value="all">Students & young adults</option>
                                            <option value="mohcategory">all PHI officers</option>

                                        </select>

                                    </div>



                                    <div class="form-group col-md-4">
                                        <label for="presenter">Presenter</label>
                                        <input type="text" class="form-control" id="presenter" placeholder="presenter" onChange={(e) => {
                                            setPresenter(e.target.value)
                                        }} />

                                    </div>


                                    {/* 
                           <div class="form-group col-md-4">
                                    <label for="sampleImg"> upload the sampleImg</label>
                                    <input type="url" class="form-control" id="sampleImg" placeholder="sampleImg" onChange={(e) => {

                                        setSampleImg(e.target.value)
                                    }} />

                                </div>  */}
                                </div>
                                <button style={{ backgroundColor: "orange", color: "#fff", width: '400px', marginLeft: '90px', padding: '10px', borderRadius: '5px', border: 'none', textAlign: 'center', cursor: 'pointer' }} type="submit">Submit</button>
                                <Link to="/AwarenessSession/display" style={{ backgroundColor: "#e0e0e0", color: "#333", width: '400px', marginLeft: '90px', padding: '10px', borderRadius: '5px', textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}>Back</Link>

                            </form>
                        </div>
                    </div>

                </div>


            </div>
        </>

    )
}

export default AddAwarenessSession