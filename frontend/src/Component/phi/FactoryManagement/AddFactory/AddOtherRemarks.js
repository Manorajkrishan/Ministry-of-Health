import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPHI from '../../DiseaseManagement/Header/Header'
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav'
export default function AddOtherRemarks() {
    const history = useNavigate(); // Initialize useHistory hook

    const [inputval, setInputval] = useState({
        branches: "",
        workers: "",
        sanit_fac: "",
        checked_date: "",
        foodpreperation: "",
        description: "",
        delete: "",
    });

    const setData = (e) => {
        const { name, value } = e.target;
        setInputval(prevVal => ({
            ...prevVal,
            [name]: value
        }));
    }

    const addOtherRemarksData = async (e) => {
        e.preventDefault();

        const { branches, workers, sanit_fac, checked_date, foodpreperation, description } = inputval;

        try {
            const res = await fetch("http://localhost:5000/addcouples", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ branches, workers, sanit_fac, checked_date, foodpreperation, description }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            setInputval({
                branches: "",
                workers: "",
                sanit_fac: "",
                checked_date: "",
                foodpreperation: "",
                description: "",
                delete: "",
            });
            alert("Data Added successfully");

            // Navigate to "/display" route programmatically
            history.push("/display");
        } catch (error) {
            console.error(error);
            alert("Error adding hotel details. Please try again.");
        }
    };

    return (
        <>
        
        <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
        <div className='container mt-5'>
            <form className='mx-auto w-50 shadow p-5'>
                <h2 className='mt-5'>Hotel Details</h2>

                <h4 className='mt-5'>Other Remarks</h4>

             

                <button className='btn btn-primary' onClick={addOtherRemarksData}>Add</button>

                <button className="btn btn-primary me-3" onClick={() => history.push("/")}>OK</button>
            </form>
        </div>
        </div>
</>    );
}
