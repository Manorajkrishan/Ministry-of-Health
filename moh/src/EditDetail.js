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
    const setstud = (e) => {
        const { name, value } = e.target;
        setInputdata((prestud) => {
            return {
               ...prestud,
                [name]: value
            }
        })
    }

    // Get single student data
    const { id } = useParams("");
    useEffect(() => {
        const getstuddata = async () => {
            try {
                const response = await fetch(`http://localhost:5000/getstud/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setInputdata(data);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        }
        getstuddata();
    }, [id]);

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
        if (!res2.ok) {
            toast.error('Failed to update student!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success('Student information updated successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setInputdata({
                "name": "",
                "address": "",
                "parent": "",
                "contact": "",
                "health": ""
            });
            setTimeout(() => {
                navigate('/HealthHome');
            }, 3000);
        }
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
                                <label htmlFor="address" className="form-label">Address</label>
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
                                <input type="text" className="form-control" id="contact" placeholder="Enter Contact Number"
                                    onChange={setstud} name="contact" value={inputdata.contact} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="health" className="form-label">Health Status</label>
                                <input type="text" className="form-control" id="health" placeholder="Enter Health Status"
                                    onChange={setstud} name="health" value={inputdata.health} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={updatestud}>Update</button>
                            <NavLink to="/HealthHome" className="btn btn-danger mx-3">Cancel</NavLink>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EditDetail;