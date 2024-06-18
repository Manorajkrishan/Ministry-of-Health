import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import SideBar from '../SideBar';

const EditDetail = () => {
    const [inputdata, setInputdata] = useState({
        "name": "",
        "address": "",
        "parent": "",
        "contact": "",
        "health": "",
        "vision": "",
        "overweight": false,
        "disabilities": "",
        "date": ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getstuddata = async () => {
            try {
                const response = await fetch(`http://localhost:8090/getstud/${id}`);
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

    const setstud = (e) => {
        const { name, value } = e.target;
        setInputdata((prestud) => ({
            ...prestud,
            [name]: value
        }));
    }

    // Contact number validation function
    const validateContactNumber = (contact) => {
        return /^\d{10}$/.test(contact);
    }

    const updatestud = async (e) => {
        e.preventDefault();

        const { name, address, parent, contact, health, vision, overweight, disabilities, date } = inputdata;

        // Validate contact number
        if (!validateContactNumber(contact)) {
            toast.error('Contact number must contain exactly 10 digits!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        const res2 = await fetch(`http://localhost:8090/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, address, parent, contact, health, vision, overweight, disabilities, date })
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
                "health": "",
                "vision": "",
                "overweight": false,
                "disabilities": "",
                "date": ""
            });
            setTimeout(() => {
                navigate('/homedoctor');
            }, 3000);
        }
    }

    return (
        <div className='container mt-5'>
            <SideBar/>
            <div className='row justify-content-end'>
                <div className='col-md-9 col-lg-10'>
                    <div className='container mt-5'>
                        <h4>Edit Student Information</h4>
                        <div className='underline1'></div>
                        <form className='mt-5 shadow p-5 w-75' onSubmit={updatestud}>
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
                            <div className="mb-3">
                                <label htmlFor="vision" className="form-label">Vision</label>
                                <input type="text" className="form-control" id="vision" placeholder="Enter Vision"
                                    onChange={setstud} name="vision" value={inputdata.vision} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="overweight"
                                    onChange={() => setInputdata(prevState => ({ ...prevState, overweight: !inputdata.overweight }))} checked={inputdata.overweight} />
                                <label className="form-check-label" htmlFor="overweight">Overweight</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabilities" className="form-label">Disabilities</label>
                                <input type="text" className="form-control" id="disabilities" placeholder="Enter Disabilities"
                                    onChange={setstud} name="disabilities" value={inputdata.disabilities} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" placeholder="Enter Date"
                                    onChange={setstud} name="date" value={inputdata.date} />
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                            <NavLink to="/homedoctor" className="btn btn-danger mx-3">Cancel</NavLink>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EditDetail;
