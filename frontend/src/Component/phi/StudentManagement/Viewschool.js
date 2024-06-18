import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
function Viewschool() {
  const [school, setSchool] = useState({});
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8090/schools/${id}`)
      .then((response) => {
        const data = response.data;
        setSchool(data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("Error retrieving school data");
      });
  }, [id]);

  if (error) {
    return <div className="container mt-5">Error: {error}</div>;
  }

  return (
    <>
                <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
    <div className="container mt-5">
      <Link className="btn btn-primary mb-5" to="/">
        Home
      </Link>
      <div
        className="container mt-5"
        style={{
          border: "2px solid black",
          backgroundColor: "yellow",
          padding: "20px",
        }}
      >
        <h3>View School Details</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>Name: {school.name}</li>
          <li style={{ marginBottom: "10px" }}>Address: {school.address}</li>
          <li style={{ marginBottom: "10px" }}>
            Telephone Number: {school.telephoneNumber}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Number of Teachers: {school.numberOfTeachers}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Number of Students: {school.numberOfStudents}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Dental Details: {school.dentalDetails}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Dental Details Text: {school.dentalDetails_text}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Toilet Facilities: {school.toiletFacilities}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Toilet Facilities Text: {school.toiletFacilities_text}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Water Supply: {school.waterSupply}
          </li>
          <li style={{ marginBottom: "10px" }}>
            Water Supply Text: {school.waterSupply_text}
          </li>
          <li style={{ marginBottom: "10px" }}>
            School Canteen: {school.schoolCanteen}
          </li>
          <li style={{ marginBottom: "10px" }}>
            School Canteen Text: {school.schoolCanteen_text}
          </li>
        </ul>
      </div>
      </div>
    </div>
    </>
  );
}

export default Viewschool;
