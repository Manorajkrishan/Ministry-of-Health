import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
function Allstudent() {
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8090/students")
      .then((response) => {
        setStudent(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DeleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/students/${id}`);
      // After deleting, fetch the updated list of students
      const response = await axios.get("http://localhost:8090/students");
      setStudent(response.data.data);
      window.alert("Student successfully deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const filterData = (student, searchkey) => {
    const result4 = student.filter((student) =>
      student.name.toLowerCase().slice(0, 4).includes(searchkey.toLowerCase()));
    setStudent(result4);
  };
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase(); // Convert search key to lowercase for case-insensitive search
    axios.get('http://localhost:8090/students')
      .then((res) => {
        // Filter the data based on the search key
        const filteredStudents = res.data.data.filter((student) =>
          student.name.toLowerCase().includes(searchKey)
        );
        setStudent(filteredStudents);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <HeaderPHI />
      <DMsideNav />
      <div style={{ marginLeft: "50px" }}>
        <div className="container mt-5">
          <div className="mt-3">
            <button
              className="btn btn-success"
              style={{ backgroundColor: "green" }}
            >
              <Link
                className="btn-btn-success"
                to="/addstud"
                style={{ color: "white", textDecoration: "none" }}
              >
                Add Student
              </Link>
            </button>
          </div>

          <div>
            <input
              type="text"
              onChange={handleSearchArea}
              placeholder="Search by  student name"
            />
            <button>search</button>
          </div>
          <table class="table mt-5">
            <thead>
              <tr className="bg-dark">
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  ID
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Name
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  DOB
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Age
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Address
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Gender
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Email address
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Height
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Weight
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  BMI
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Stunting
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Wasting
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Overweight
                </th>
                <th scope="col" style={{ backgroundColor: "goldenrod" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {student?.length ? (
                student.map((student) => (
                  <tr>
                    <td>{student._id}</td>
                    <td>{student.name}</td>
                    <td>{student.DOB}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                    <td>{student.gender}</td>
                    <td>{student.mail}</td>
                    <td>{student.height}</td>
                    <td>{student.weight}</td>
                    <td>{student.BMI}</td>
                    <td>{student.stunting}</td>
                    <td>{student.wasting}</td>
                    <td>{student.overweight}</td>
                    <td>
                      <button className="btn btn-primary me-3">
                        <Link
                          to={`/viewstud/${student._id}`}
                          style={{ color: "white" }}
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="btn btn-danger me-3"
                        style={{ backgroundColor: "yellow" }}
                      >
                        <Link
                          to={`/editstud/${student._id}`}
                          style={{ color: "white" }}
                        >
                          Edit
                        </Link>
                      </button>
                      <button
                        className="btn btn-danger me-3"
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={() => DeleteStudent(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="border px-4 py-2 text-center "
                    rowSpan={10}
                    colSpan={10}
                  >
                    No Data Found
                  </td>
                </tr>
              )}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Allstudent;
