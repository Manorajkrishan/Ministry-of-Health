import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../SideBar";

function Addvaccines() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContact] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [agegroup, setAgeGroup] = useState("");
  const [vaccines, setVaccines] = useState([]);
  const [error, setError] = useState("");

  const addVaccine = (e) => {
    e.preventDefault();
    // Filter out only the selected vaccines
    const selectedVaccines = vaccines.filter((vaccine, index) => {
      const checkbox = document.getElementById(`vaccine${index}`);
      return checkbox.checked;
    });
    const newVaccine = {
      name,
      email,
      age,
      contactno,
      gender,
      dob,
      agegroup,
      vaccines: selectedVaccines, // Only send the selected vaccines
    };

    axios
      .post("http://localhost:8090/vaccinedetails", newVaccine)
      .then(() => {
        alert("Vaccine Added Successfully");
        // Optionally, you can redirect to another page after adding the vaccine
        // history.push('/allvaccine');
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding vaccine");
      });
  };

  const handleAgeGroupChange = (e) => {
    setAgeGroup(e.target.value);
    if (e.target.value === "4to6") {
      setVaccines([
        "DTap(Tetanus)- Dose 5",
        "Polio - Dose 4",
        "MMR - Dose 2",
        "Chickenpox - Dose 2",
        "Influenza - Dose 1",
        "Influenza - Dose 2",
      ]);
    } else if (e.target.value === "7to10") {
      setVaccines([
        "HPV",
        "DTap(Tetanus)- Dose 5",
        "Polio - Dose 4",
        "MMR - Dose 2",
        "Chickenpox - Dose 2",
        "Influenza - Dose 1",
        "Influenza - Dose 2",
      ]);
    } else if (e.target.value === "11to12") {
      setVaccines([
        "HPV",
        "Tdap",
        "Meningococcal A",
        "Dengue",
        "Influenza - Dose 1",
        "Influenza - Dose 2",
      ]);
    } else if (e.target.value === "13to18") {
      setVaccines([
        "Covid 19 1st dose - Astrazeneca",
        "Covid 19 1st dose - Sinopharm",
        "Covid 19 1st dose - Pfizer",
        "Covid 19 1st dose - Moderna",
        "Covid 19 2nd dose - Astrazeneca",
        "Covid 19 2nd dose - Sinopharm",
        "Covid 19 2nd dose - Pfizer",
        "Covid 19 2nd dose - Moderna",
        "Covid 19 3rd dose - Astrazeneca",
        "Covid 19 3rd dose - Sinopharm",
        "Covid 19 3rd dose - Pfizer",
        "Covid 19 3rd dose - Moderna",
        "Influenza - Dose 1",
        "Influenza - Dose 2",
      ]);
    } else if (e.target.value === "19above") {
      setVaccines([
        "Hepatitis A",
        "Hepatitis B",
        "Meningococcal B",
        "Hib",
        "Covid 19 1st dose - Astrazeneca",
        "Covid 19 1st dose - Sinopharm",
        "Covid 19 1st dose - Pfizer",
        "Covid 19 1st dose - Moderna",
        "Covid 19 2nd dose - Astrazeneca",
        "Covid 19 2nd dose - Sinopharm",
        "Covid 19 2nd dose - Pfizer",
        "Covid 19 2nd dose - Moderna",
        "Covid 19 3rd dose - Astrazeneca",
        "Covid 19 3rd dose - Sinopharm",
        "Covid 19 3rd dose - Pfizer",
        "Covid 19 3rd dose - Moderna",
        "MMR",
        "Chickenpox",
        "HPV",
      ]);
    } else {
      setVaccines([]);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const today = new Date().toISOString().split("T")[0]; // Get today's date in yyyy-mm-dd format
    // Check if selected date is not in the future
    if (inputValue <= today) {
      setDob(inputValue);
      setError("");
    } else {
      setError("Future dates are not allowed");
    }
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
                <h1 className="h2">Vaccination Details</h1>
              </div>
              <form onSubmit={addVaccine}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Contact No:
                  </label>
                  <input
                    type="text"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-control"
                    id="contactno"
                    value={contactno}
                    onChange={(e) => setContact(e.target.value)}
                    title="Please enter a phone number in the format: 123-456-7890"
                    required
                  />
                  <small id="phoneHelp" className="form-text text-muted">
                    Format: 123-456-7890
                  </small>
                </div>

                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender:
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                      checked={gender === "other"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="other">
                      Other
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    value={dob}
                    onChange={handleChange}
                    max={new Date().toISOString().split("T")[0]} // Set maximum allowed date to today
                    required
                  />
                  {error && <div className="text-danger">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="ageGroup" className="form-label">
                    Age Group:
                  </label>
                  <select
                    className="form-select"
                    id="agegroup"
                    value={agegroup}
                    onChange={handleAgeGroupChange}
                    required
                  >
                    <option value="">Select Age Group</option>
                    <option value="4to6">4 to 6</option>
                    <option value="7to10">7 to 10</option>
                    <option value="11to12">11 to 12</option>
                    <option value="13to18">13 to 18</option>
                    <option value="19above">19 above</option>
                  </select>
                </div>
                {/* Additional input fields for vaccine selection */}
                {vaccines.length > 0 && (
                  <div className="mb-3">
                    <label className="form-label">Select Vaccines:</label>
                    {vaccines.map((vaccine, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`vaccine${index}`}
                          value={vaccine}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`vaccine${index}`}
                        >
                          {vaccine}
                        </label>
                      </div>
                    ))}
                  </div>
                )}

                <button type="submit" className="btn btn-primary">
                  Add Vaccine
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addvaccines;
