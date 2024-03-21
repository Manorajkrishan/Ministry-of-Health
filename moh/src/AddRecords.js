import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddRecords = () => {
    const navigate = useNavigate();
    const [inputdata,setInputdata]=useState({
        "name":"",
        "address":"",
        "subject":"",
        "contact":""
    })
    
    //onchange function
    const setstud=(e)=>{
        console.log(e.target.value);
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });   
    }
    //onclick event
    const addinpdata = async (e) => {
        e.preventDefault();

        const { name, address, subject, contact } = inputdata;

        const res = await fetch("http://localhost:5000/addstud", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,address, subject, contact
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            setInputdata(data);
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
                navigate('/allstud');
              }, 3000);

        }
    }
  return (
    
    <div className='container mt-5'>
            
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>
            <h4>All New Student Information</h4>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student Name" 
                    onChange={setstud} name="name" value={inputdata.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student Address"
                    onChange={setstud} name="address" value={inputdata.address}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Subject</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Subject Name" 
                    onChange={setstud} name="subject" value={inputdata.subject}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Mobile</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Contact Number"
                    onChange={setstud} name="contact" value={inputdata.contact}/>
                </div>
                <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Health issues</label>
    <textarea className="form-control" id="exampleFormControlInput1" placeholder="enter health issues" 
    onChange={setstud} name="contact" value={inputdata.contact}></textarea>
</div>

                <div className='d-flex'>
                         <button className='btn btn-primary' onClick={addinpdata}>Add Student</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/HealthHome">Back to Home</NavLink>
                </div>
              

            </form>
        </div>
  )
}

export default AddRecords