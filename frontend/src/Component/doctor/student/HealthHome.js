import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import SideBar from '../SideBar';
import { useNavigate } from "react-router-dom";

const HealthHome = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');

    // Function to fetch student data from the server
    const getStudentData = async () => {
        try {
            const response = await fetch("http://localhost:8090/getstud");
            const students = await response.json();

            // Transform _id to id for consistency
            const formattedStudents = students.map(student => ({
                id: student._id, // Use _id as id
                name: student.name,
                address: student.address,
                contact: student.contact
            }));

            setData(formattedStudents);
            setFilteredData(formattedStudents); // Initialize filteredData with all data
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    // Function to delete a student record
    const deleteStudent = async (id) => {
        try {
            const response = await fetch(`http://localhost:8090/deletestud/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                // Update the data after successful deletion
                getStudentData();
                alert('Student information deleted successfully');
                setTimeout(() => {
                    navigate('/HealthHome');
                }, 1000);

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

    // Search Student
    useEffect(() => {
        // Filter data based on search input
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.address.toLowerCase().includes(searchInput.toLowerCase()) ||
            String(item.contact).includes(searchInput)
        );
        setFilteredData(filtered);
    }, [searchInput, data]);

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <SideBar />
                </nav>
                <main className="col-md-9 col-lg-10 offset-md-3 offset-lg-2">
                    <h2 className="text-center mt-3">Student Health Management</h2>
                    <div className="ms-auto w-50">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search Student"
                            value={searchInput} onChange={handleSearchChange}
                        />
                    </div>

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
                            {filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.contact}</td>
                                    <td>
                                        {/* View button (Link to a view page) */}
                                        <Link to={`/getstud/${item.id}`}>
                                            <button className="btn btn-primary" onClick={() => console.log(`View: ${item.id}`)}>View</button>
                                        </Link>
                                        {/* Update button (Link to an update page) */}
                                        <Link to={`/updatestud/${item.id}`}>
                                            <button className="btn btn-secondary" onClick={() => console.log(`Update: ${item.id}`)}>Update</button>
                                        </Link>
                                        {/* Delete button */}
                                        <button className="btn btn-danger" onClick={() => deleteStudent(item.id)}>Delete</button>
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