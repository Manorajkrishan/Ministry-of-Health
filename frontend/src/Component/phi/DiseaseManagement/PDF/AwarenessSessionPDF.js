import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import DMsideNav from '../DMNav/DMsideNav';
import HeaderPHI from '../Header/Header';
import Swal from 'sweetalert2'
import { BsBrushFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
function AwarenessSessionPDF() {

    const [session, setSession] = useState([]);
    function getSession() {
        axios.get(`http://localhost:8090/session/display`).then((res) => {
            setSession(res.data)
            // }).catch((err) => {
            //     alert(err)
            // })


        }).catch((err) => {
            // alert(err);
            // console.log(err)
            alert(err);
        })
    }

    useEffect(() => {
        getSession()
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8090/session/delete/${id}`).then(() => {
            //     alert(`session deleted`);
            //     window.location.reload()
            // }).catch((err) => {
            //     alert(err)
            // })
            Swal.fire({
                icon: 'success',
                title: 'session deleted',
                text: 'deleted successfully',
                timer: '2000',
                shoConfirmaButton: false,
            }).then(function (result) {
                console.log(result)
                if (result.isDismissed) {
                    window.location.reload(`/AwarenessSession/display`)
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
                    window.location.reload(`/AwarenessSession/display`)
                }
            })

        })

    }
    const filterData = (session, searchkey) => {
        const result1 = session.filer((session) =>
            session.sessionTitle.toLowerCase().slice(0, 4).includes(searchkey) ||
            session.sessionTitle.toUpperCase().slice(0, 4).includes(searchkey));
        setSession(result1)
    };
    const handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
        axios.get(`http://localhost:8090/session/display`, {

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
            {/* 
            <h4 >Awarenesss session list</h4>
            <br></br>
            <Link to="/AwarenessSession/add" className="btn btn-primary" style={{ marginBottom: '10px', marginRight: '0px' }}>Add</Link> */}


            <h3 style={{ marginTop: '15px' }} >Awarenesss session  pdf </h3>
            <br></br>
            <div style={{ float: "right", marginRight: '50px', marginBottom: '50px', marginTop: '-60px' }}>




            </div>
            <hr></hr>

            <br></br>
            <div className="" style={{ marginRight: '50px' }}>
                <div className="container" style={{ marginLeft: '20px', marginRight: '50px' }}>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th className="headerColor" scope="col">index</th>


                                <th className="headerColor" scope="col">title</th>

                                <th className="headerColor" scope="col">description</th>
                                <th className="headerColor" scope="col">date</th>
                                <th className="headerColor" scope="col">time</th>
                                <th className="headerColor" scope="col">location</th>


                                <th className="headerColor" scope="col">target Audience</th>
                                <th className="headerColor" scope="col">presenter</th>



                            </tr>
                        </thead>
                        <tbody>
                            {session.map((session, index) => (
                                <tr key={session._id} className='col-sm-3 mb-3'>

                                    {/* <th scope="row"></th> */}
                                    <td>{index + 1}</td>

                                    <td>{session.title}</td>
                                    <td>{session.description}</td>
                                    <td>{session.date}</td>
                                    <td>{session.time}</td>
                                    <td>{session.location}</td>
                                    <td>{session.targetAudience}</td>
                                    <td>{session.presenter}</td>


                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <Link to="not implemented" className="btn btn-outline-primary" style={{ marginLeft: '20px' }}>PDF</Link>
                
                </div>
            </div>



</div>


        </>
    )
}

export default AwarenessSessionPDF