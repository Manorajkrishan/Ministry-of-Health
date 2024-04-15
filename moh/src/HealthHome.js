import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const HealthHome = () => {
    const [data, setData] = useState([]);

    // Function to fetch student data from the server
    const getStudentData = async () => {
        try {
            const response = await fetch("http://localhost:5000/getstud");
            const students = await response.json();

            // Assign sequential IDs to students
            const formattedStudents = students.map((student, index) => ({
                id: index + 1, // Assign sequential ID starting from 1
                name: student.name,
                address: student.address,
                contact: student.contact
            }));

            setData(formattedStudents);
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    // Function to delete a student record
    const deletestud = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/deletestud/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const deletedData = await response.json();
            if (response.status === 200) {
                // Update the data after successful deletion
                getStudentData();
            } else {
                console.error("Failed to delete student record");
            }
        } catch (error) {
            console.error("Error deleting student record:", error);
        }
    };

    useEffect(() => {
        // Fetch student data when the component mounts
        getStudentData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <SideBar />
                </nav>
                <main className="col-md-9 col-lg-10 offset-md-3 offset-lg-2">
                    <h2 className="text-center mt-3">Student Health Management</h2>
                    <table className="table mt-5">
                        <thead>
                            <tr className='bg-primary me-3'>
                                <th scope='col'>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(result => (
                                <tr key={result.id}>
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    <td>{result.address}</td>
                                    <td>{result.contact}</td>
                                    <td>
                                        {/* View button (Link to a view page) */}
                                        <Link to={`/view/${result.id}`}>
                                            <button className="btn btn-primary" onClick={() => console.log(`View: ${result.id}`)}>View</button>
                                        </Link>
                                        {/* Update button (Link to an update page) */}
                                        <Link to={`/update/${result.id}`}>
                                            <button className="btn btn-secondary" onClick={() => console.log(`Update: ${result.id}`)}>Update</button>
                                        </Link>
                                        {/* Delete button */}
                                        <button className="btn btn-danger" onClick={() => deletestud(result._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Link to the AddRecords page */}
                    <div className='btn-container'>
                        <Link className='btn btn-primary ml-auto' to={"/AddRecords"}>Add new Records</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HealthHome;
