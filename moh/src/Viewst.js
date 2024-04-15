import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Viewst = () => {
    const [student, setStudent] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getStudentData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/getstud/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Received student data:", data);
                setStudent(data);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        getStudentData();
    }, [id]);

    return (
        <div className='container mt-5'>
            <div className='row justify-content-end'>
                <div className='col-md-9 col-lg-10'>
                    <div className='container mt-5'>
                        <div className='row justify-content-end'>
                            <div className='col-mt-5'>
                                <Link className='btn btn-primary' to={"/"}>Home</Link>
                                <ul className="list-group">
                                    <li className="list-group-item active" aria-current="true">Student details</li>
                                    <li className="list-group-item">Name: {student.name}</li>
                                    <li className="list-group-item">Address: {student.address}</li>
                                    <li className="list-group-item">Parent: {student.parent}</li>
                                    <li className="list-group-item">Contact: {student.contact}</li>
                                    <li className="list-group-item">Health issues: {student.health}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Viewst;
