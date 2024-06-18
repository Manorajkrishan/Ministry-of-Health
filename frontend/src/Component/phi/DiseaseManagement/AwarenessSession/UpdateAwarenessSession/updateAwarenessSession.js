import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './updateAwarenssSession.css'
import DMsideNav from '../../DMNav/DMsideNav';
import HeaderPHI from '../../Header/Header';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
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
                    window.location.replace("/AwarenessSession/display")
                }
            })

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
                    window.location.reload()
                }
            })

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
                            <h5 style={{ textAlign: 'left' }}>Edit awareness session</h5>
                            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/AwarenessSession/display">Awareness session management</a></li>
                  <li className="breadcrumb-item active">{title} </li>
                </ol>
              </nav>
                            <br></br>
                            <form onSubmit={update}>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" placeholder="title" onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                        value={title} />

                                </div>


                                <div class="form-group col-md-4">
                                    <label for="description">Description</label>
                                    <input type="text" class="form-control" id="title" placeholder="description" onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
                                        value={description} />


                                </div>

                                <div class="form-group col-md-4">
                                    <label for="date">Date</label>
                                    <input type="date" class="form-control" id="date" placeholder="date" onChange={(e) => {
                                        setDate(e.target.value)
                                    }} value={date} />


                                </div>


                                <div class="form-group col-md-4">
                                    <label for="time">Time</label>
                                    <input type="time" class="form-control" id="title" placeholder="time" onChange={(e) => {
                                        setTime(e.target.value)
                                    }} value={time} />

                                </div>


                                <div class="form-group col-md-4">
                                    <label for="location">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="location" onChange={(e) => {
                                        setLocation(e.target.value)
                                    }} value={location} />


                                </div>

                                <div class="form-group col-md-4">
                                    <label for="targetAudience">Target audience</label>

                                    <select type="text" class="form-control" id="targetAudience" placeholder="targetAudience" onChange={handleAudienceChange}   value={targetAudience} >


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
                                    }}
                                        value={presenter} />

                                </div>



                                <div class="form-group col-md-4">
                                    <label for="sampleImg"> upload the sampleImg</label>
                                    <input type="text" class="form-control" id="sampleImg" placeholder="sampleImg" onChange={(e) => {

                                        setSampleImg(e.target.value)
                                    }}
                                        value={sampleImg} />

                                </div>
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




export default UpdateAwarenessSession