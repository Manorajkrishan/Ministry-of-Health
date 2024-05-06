import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './updateAwarenssSession.css'
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
function UpdateAwarenessSession() {
    const { id } = useParams("")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [targetAudience, setTargetAudience] = useState("")
    const [presenter, setPresenter] = useState("")
    const [sampleImg, setSampleImg] = useState("")
    const update = (e) => {
        e.preventDefault();
        const updateSession = {
            title,
            description,
            date,
            time,
            location,
            targetAudience,
            presenter,
            sampleImg
        }
        console.log(updateSession);
        axios.put(`http://localhost:8090/session/update/${id}`, updateSession).then((res) => {
            console.log(res);
            alert("session updated");
            setTitle("");
            setDescription("");
            setDate("");
            setTime("");
            setLocation("");
            setTargetAudience("");
            setPresenter("")
            setSampleImg("")
            window.location.replace("/AwarenessSession/display")
        }).catch((err) => {
            alert(err)
        })
    }
    const getSession = () => {
        axios.get(`http://localhost:8090/session/get/${id}`).then((res) => {
            setTitle(res.data.response.title);

            setDescription(res.data.response.description);
            setDate(res.data.response.date);
            setTime(res.data.response.time);
            setLocation(res.data.response.location);
            setTargetAudience(res.data.response.targetAudience);
            setPresenter(res.data.response.presenter)
            setSampleImg(res.data.response.sampleImg)
        }).catch((err) => {
            alert(err)
        })
    }
    useEffect(() => {
        getSession();
    }, [id])

    const handleAudienceChange = (event) => {
        const selectedAudience = event.target.value;
        setTargetAudience(selectedAudience);
      };
    

    return (
        <>
         <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
            <div>
                <div className="container">
                    <br></br>
                    <br></br>
                    <div className="updateSession">
                        <h5 style={{ textAlign: 'center' }}>update awareness session</h5>
                        <br></br>
                        <form onSubmit={update}>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="title"> Enter the title</label>
                                    <input type="text" class="form-control" id="title" placeholder="title" onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                        value={title} />

                                </div>


                                <div class="form-group col-md-6">
                                    <label for="description"> Enter the description</label>
                                    <input type="text" class="form-control" id="title" placeholder="description" onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
                                        value={description} />


                                </div>

                                <div class="form-group col-md-6">
                                    <label for="date"> Enter the date</label>
                                    <input type="text" class="form-control" id="date" placeholder="date" onChange={(e) => {
                                        setDate(e.target.value)
                                    }} value={date} />


                                </div>


                                <div class="form-group col-md-6">
                                    <label for="time"> Enter the time</label>
                                    <input type="time" class="form-control" id="title" placeholder={time} onChange={(e) => {
                                        setTime(e.target.value)
                                    }} value={time} />

                                </div>


                                <div class="form-group col-md-6">
                                    <label for="location"> Enter the location</label>
                                    <input type="text" class="form-control" id="location" placeholder="location" onChange={(e) => {
                                        setLocation(e.target.value)
                                    }} value={location} />


                                </div>

                                <div class="form-group col-md-6">
                                        <label for="targetAudience">select  the target audience</label>

                                        <select type="text" class="form-control" id="targetAudience"    value={targetAudience} placeholder={targetAudience} onChange={handleAudienceChange}>


                                            <option value="">{targetAudience}</option>
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



                                <div class="form-group col-md-6">
                                    <label for="presenter"> Enter the presenter</label>
                                    <input type="text" class="form-control" id="presenter" placeholder="presenter" onChange={(e) => {
                                        setPresenter(e.target.value)
                                    }}
                                        value={presenter} />

                                </div>



                                {/* <div class="form-group col-md-6">
                                    <label for="sampleImg"> upload the sampleImg</label>
                                    <input type="text" class="form-control" id="sampleImg" placeholder="sampleImg" onChange={(e) => {

                                        setSampleImg(e.target.value)
                                    }}
                                        value={sampleImg} />

                                </div> */}
                            </div>

                            <button class="btn btn-primary w-100" type="submit">Submit</button>

                        </form>

                    </div>
                </div>

            </div>
            </div>
        </>

    )
}




export default UpdateAwarenessSession