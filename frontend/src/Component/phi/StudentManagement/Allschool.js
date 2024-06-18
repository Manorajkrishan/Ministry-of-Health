import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
function Allschool() {
  const [school, setSchool] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8090/schools")
      .then((response) => {
        setSchool(response.data.data); // Set school state directly to response data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DeleteSchool = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/schools/${id}`);
      // After deleting, fetch the updated list of schools
      const response = await axios.get("http://localhost:8090/schools");
      setSchool(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
                <HeaderPHI />
        <DMsideNav />
        

        <div style={{ marginLeft: "-150px" }}>
    <div className="container mt-5">
      <div className="mt-3">
        <button className="btn btn-success">
          <Link to="/addschool" className="text-white">
            Add School
          </Link>
        </button>
      </div>
      <table className="table mt-5">
        <thead>
          <tr className="bg-dark">
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              ID
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Name
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Address
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Telephone Number
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Number of Teachers
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Number of Students
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Dental Details
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Dental Details Text
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Toilet Facilities
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Toilet Facilities Text
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Water Supply
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Water Supply Text
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              School Canteen
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              School Canteen Text
            </th>
            <th scope="col" style={{ backgroundColor: "goldenrod" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {school?.length ? (
            school.map((school) => (
              <tr>
                <td>{school._id}</td>
                <td>{school.name}</td>
                <td>{school.address}</td>
                <td>{school.telephoneNumber}</td>
                <td>{school.numberOfTeachers}</td>
                <td>{school.numberOfStudents}</td>
                <td>{school.dentalDetails}</td>
                <td>{school.dentalDetails_text}</td>
                <td>{school.toiletFacilities}</td>
                <td>{school.toiletFacilities_text}</td>
                <td>{school.waterSupply}</td>
                <td>{school.waterSupply_text}</td>
                <td>{school.schoolCanteen}</td>
                <td>{school.schoolCanteen_text}</td>
                <td style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <button
    className="btn btn-primary me-3 mb-3"  // Added mb-3 for margin bottom
    style={{ color: "white", width: "50px" }}  // Added width for consistent size
  >
    <Link
      to={`/viewschool/${school._id}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      View
    </Link>
  </button>
  <button
    className="btn btn-primary me-3 mb-3"  // Added mb-3 for margin bottom
    style={{ backgroundColor: "yellow", color: "white", width: "50px" }}  // Added width for consistent size
  >
    <Link
      to={`/editschool/${school._id}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      Edit
    </Link>
  </button>
  <button
    className="btn btn-danger me-3"  // Removed mb-3 as it's the last button
    style={{ color: "white", width: "60px" }}  // Added width for consistent size
    onClick={() => DeleteSchool(school._id)}
  >
    Delete
  </button>
</td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border px-4 py-2 text-center"
                rowSpan={10}
                colSpan={14}
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default Allschool;
