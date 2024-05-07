import React, { useState } from 'react'
import axios from 'axios'
import './addAwarenessSession.css'
import DMsideNav from '../DMNav/DMsideNav'
import HeaderPHI from '../Header/Header'

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
            alert("session added");
            window.location.replace(`/AwarenessSession/display`)

        }).catch((err) => {
            alert(err);
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
                                        <label for="title"> Enter the title</label>
                                        <input type="text" class="form-control" id="title" placeholder="title" onChange={(e) => {
                                            setTitle(e.target.value)
                                        }} />

                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="description"> Enter the description</label>
                                        <input type="text" class="form-control" id="title" placeholder="description" onChange={(e) => {
                                            setDescription(e.target.value)
                                        }} />


                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="date"> Enter the date</label>
                                        <input type="date" class="form-control" id="date" placeholder="date" onChange={(e) => {
                                            setDate(e.target.value)
                                        }} />


                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="time"> Enter the time</label>
                                        <input type="time" class="form-control" id="title" placeholder="time" onChange={(e) => {
                                            setTime(e.target.value)
                                        }} />

                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="location"> Enter the location</label>
                                        <input type="text" class="form-control" id="location" placeholder="location" onChange={(e) => {
                                            setLocation(e.target.value)
                                        }} />


                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="targetAudience">select  the target audience</label>

                                        <select type="text" class="form-control" id="targetAudience" placeholder="targetAudience" onChange={handleAudienceChange}>


                                            <option value="">select the target Audience</option>
                                            <optgroup label="Age Group">
                                                <option value="teenagers">Teenagers</option>
                                                <option value="adults">Adult Women</option>
                                                <option value="adults">Adult Men</option>
                                                <option value="adults">all adults</option>
                                            </optgroup>
                                            <optgroup label="Occupation">
                                                <option value="students">Students</option>
                                                <option value="young_adults">Young Adults</option>
                                                <option value="phi_officers">PHI Officers</option>
                                            </optgroup>
                                            <optgroup label="General">
                                                <option value="all">All</option>
                                            </optgroup>

                                        </select>

                                    </div>



                                    <div class="form-group col-md-4">
                                        <label for="presenter"> Enter the presenter</label>
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
                                <button style={{ backgroundColor: "orange", width: '800px', marginLeft: '90px' }} type="submit">Submit</button>
                            </form>

                        </div>
                    </div>

                </div></div>
        </>

    )
}

export default AddAwarenessSession