import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const EditDetail = () => {
    const [inputdata, setInputdata] = useState({
        "name": "",
        "address": "",
        "parent": "",
        "contact": "",
        "health": ""
    });

    // Onchange function
    const setstud=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setInputdata((prestud)=>{
            return{
                ...prestud,[name]:value
            }
        })
    }

    // Get single student data
    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        
        const res = await fetch(`http://localhost:5000/getstud/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setInputdata(data)
            console.log("get data");
        }
    }
    

    useEffect(() => {
        getstuddata();
    }, []);

    // Update student data
    const updatestud = async (e) => {
        e.preventDefault();

        const { name, address, parent, contact, health } = inputdata;
        const res2 = await fetch(`http://localhost:5000/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, address, parent, contact, health })
        });
        const data2= await res2.json();
        setInputdata(data2);
        toast.success('Please wait  !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true, 
            progress: undefined,
            });
        setTimeout(() => {
            navigate('/HealthHome');
          }, 3000);
    }

    const navigate = useNavigate();

    return (
        <div className='container mt-5'>
            <div className='row justify-content-end'>
                <div className='col-md-9 col-lg-10'>
                    <div className='container mt-5'>
                        <h4>Edit Student Information</h4>
                        <div className='underline1'></div>
                        <form className='mt-5 shadow p-5 w-75'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Student Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Student Name"
                                    onChange={setstud} name="name" value={inputdata.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Student Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter Student Address"
                                    onChange={setstud} name="address" value={inputdata.address} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="parent" className="form-label">Parent Name</label>
                                <input type="text" className="form-control" id="parent" placeholder="Enter Parent Name"
                                    onChange={setstud} name="parent" value={inputdata.parent} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">Contact Number</label>
                                <input type="number" className="form-control" id="contact" placeholder="Enter Contact Number"
                                    onChange={setstud} name="contact" value={inputdata.contact} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="health" className="form-label">Health Issues</label>
                                <textarea className="form-control" id="health" rows="3" placeholder="Enter Health Issues"
                                    onChange={setstud} name="health" value={inputdata.health}></textarea>
                            </div>
                            <div className='d-flex'>
                                <button className='btn btn-primary' onClick={updatestud}>Update Student</button>
                                <ToastContainer />
                                <NavLink className='btn btn-primary ms-auto' to="/AddRecords">Back to Add Records</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditDetail;
