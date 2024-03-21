import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const EditDetail = () => {
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
  return (
    <div className='container mt-5'>
            
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>
            <h4>Update Student Information</h4>
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
                <div className='d-flex'>
                         <button className='btn btn-primary' >Add Student</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/HealthHome">Back to Home</NavLink>
                </div>
              

            </form>
        </div>
  )
}

export default EditDetail