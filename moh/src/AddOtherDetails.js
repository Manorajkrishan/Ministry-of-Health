import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const AddStudent = () => {
    const [inputval, setInputval] = useState({
        description: "",
        ppvaccine: "",
        date1: "",
        
    });

  const setData = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setInputval((preval) => {
      return {
        ...preval, [name]: value
      }
    })
  }

  const addstudent = async (e) => {
    e.preventDefault();

    const { name, age, dob, vaccine_name, vaccine_type, dosage } = inputval;

    try {
      const res = await fetch("http://localhost:5000/addstud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, dob, vaccine_name, vaccine_type, dosage }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      setInputval(data);
      alert("Data Added");
    } catch (error) {
      console.error(error);
      alert("Error adding student data. Please try again.");
    }
  };

  return (
    <div className='container mt-5'>
      <Sidebar />
      <form className='mx-auto w-50 shadow p-5'>
        <Link className="btn btn-primary me-3" to="/">Home</Link>
        <h2 className='mt-5'>Vaccination Details</h2>

        <h4 className='mt-5'>Other Remarks</h4>

                <h5 className='mt-5'>Are there are any allergies ?</h5>

                
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" />
                        Yes
                    </label>
                </div>
               
                <div className="radio">
                    <label>
                        <input type="radio" value="option2" />
                        No
                    </label>
                </div>

                <h5 className='mt-5'>If Yes,</h5>
                

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description :</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        name='description' onChange={setData} value={inputval.name}
                        aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Postponed Vaccine Name :</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        name='ppvaccine' onChange={setData} value={inputval.name}
                        aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Date :</label>
                    <input type="date" className="form-control" id="exampleInputEmail1"
                        name='date1' onChange={setData} value={inputval.name}
                        aria-describedby="emailHelp" />

                </div>

                <Link className="btn btn-primary me-3" to="/">OK</Link>

      </form>
    </div>
  );
}

export default AddOtherDetails;
