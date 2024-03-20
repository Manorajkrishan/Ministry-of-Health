import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const EditDetail = () => {
  return (
    <div className='container mt-5'>
            <h4>Update Details</h4>
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student Name" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student Address"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Subject</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Subject Name" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Mobile</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Contact Number"
                   />
                </div>
                <div className='d-flex'>
                         <button className='btn btn-primary' >Update</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/HealthHome">Back to Home</NavLink>
                </div>
              

            </form>
        </div>
  )
}

export default EditDetail