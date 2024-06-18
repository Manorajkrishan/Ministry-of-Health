//Allvaccine.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../SideBar";

function AllVaccines() {
  const [vaccineDetails, setVaccineDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getVaccineDetails();
  }, []);

  const getVaccineDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8090/vaccinedetails/");
      setVaccineDetails(response.data.data);
      alert("Vaccine Added Successfully");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const onDeleteClick = async (userId) => {
    try {
      await axios.delete(
        `http://localhost:8090/vaccinedetails/deletevaccine/${userId}`
      );
      alert("Vaccine Deleted Successfully");
      window.location.href = "/allvaccine";
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = vaccineDetails.filter((vaccine) =>
      vaccine.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Sidebar />
      <div style={{ marginLeft: "300px" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Vaccination Management</h1>
                <div>
                  <input
                    type="text"
                    name="searchQuery"
                    className="form-control form-control-dark w-100 rounded-0"
                    placeholder="Enter Name..."
                    aria-label="Enter Name"
                    value={searchTerm}
                    onChange={handleSearch} // Add onChange event handler
                    style={{ border: "1px solid #ced4da", marginRight: "10px" }}
                  />
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <a
                      href="/addvaccine"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      + New Vaccine
                    </a>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Date of Birth</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Age Group</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0
                      ? filteredData.map((vaccine, index) => (
                          <tr key={index}>
                            <td>{vaccine.name}</td>
                            <td>{vaccine.age}</td>
                            <td>{vaccine.dob}</td>
                            <td>{vaccine.email}</td>
                            <td>{vaccine.contactno}</td>
                            <td>{vaccine.gender}</td>
                            <td>{vaccine.agegroup}</td>
                          </tr>
                        ))
                      : vaccineDetails.map((vaccine, index) => (
                          <tr key={index}>
                            <td>{vaccine.name}</td>
                            <td>{vaccine.age}</td>
                            <td>{vaccine.dob}</td>
                            <td>{vaccine.email}</td>
                            <td>{vaccine.contactno}</td>
                            <td>{vaccine.gender}</td>
                            <td>{vaccine.agegroup}</td>
                            <td className="text-end">
                              <div className="d-flex flex-row justify-content-end gap-2">
                                <a
                                  href={`/viewvaccine/${vaccine._id}`}
                                  className="btn btn-primary btn-small"
                                  alt="View"
                                >
                                  <i className="bi bi-eye"></i>
                                </a>
                                <a
                                  href={`/editvaccine/${vaccine._id}`}
                                  className="btn btn-warning btn-small"
                                >
                                  <i className="bi bi-pencil"></i>
                                </a>
                                <button
                                  onClick={() => onDeleteClick(vaccine._id)}
                                  className="btn btn-danger btn-small"
                                >
                                  <i className="bi bi-person-x"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllVaccines;
