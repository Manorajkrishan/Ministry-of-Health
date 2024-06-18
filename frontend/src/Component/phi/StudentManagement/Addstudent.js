import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Addstudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [stunting, setStunting] = useState("");
  const [wasting, setWasting] = useState("");
  const [overweight, setOverweight] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [DOBError, setDOBError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const navigate = useNavigate();

  const resetForm = () => {
    setName("");
    setAge("");
    setAddress("");
    setDOB("");
    setGender("");
    setMail("");
    setNumber("");
    setHeight("");
    setWeight("");
    setBMI("");
    setStunting("");
    setWasting("");
    setOverweight("");
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setMail(value); // Update the email state

    // Validate email format using a regular expression
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(""); // Clear any previous error message
    }
  };
  const validateName = (e) => {
    const nameRegex = /^[a-zA-Z ]+$/; // Allow only letters and spaces
    if (!nameRegex.test(e.target.value)) {
      setNameError("Name can only contain letters and spaces.");
    } else {
      setNameError("");
    }
  };

  const validateAge = (e) => {
    const ageValue = parseInt(e.target.value);
    if (isNaN(ageValue) || ageValue < 4 || ageValue > 25) {
      setAgeError("Age must be between 4 and 25.");
    } else {
      setAgeError("");
    }
  };
  const validateAddress = (e) => {
    const addressRegex = /^[a-zA-Z0-9 ,]+$/; // Allow letters, numbers, spaces, and commas
    if (!addressRegex.test(e.target.value)) {
      setAddressError(
        "Address can only contain letters, numbers, spaces, and commas."
      );
    } else {
      setAddressError("");
    }
  };

  const validateDOB = (e) => {
    const dobValue = new Date(e.target.value);
    const currentYear = new Date().getFullYear();
    if (
      dobValue.getFullYear() < currentYear - 5 ||
      dobValue.getFullYear() > currentYear
    ) {
      setDOBError("Date of Birth must be between 2019 and 2024.");
    } else {
      setDOBError("");
    }
  };

  const validateNumber = (e) => {
    const numberRegex = /^\d{10}$/; // Allow only 10 digits
    if (!numberRegex.test(e.target.value)) {
      setNumberError("Phone number must be 10 digits.");
    } else {
      setNumberError("");
    }
  };

  const validateHeight = (e) => {
    const heightValue = parseFloat(e.target.value);
    if (isNaN(heightValue) || heightValue < 0.5 || heightValue > 2) {
      setHeightError("Height must be between 0.5 and 2 meters.");
    } else {
      setHeightError("");
    }
  };

  const validateWeight = (e) => {
    const weightValue = parseInt(e.target.value);
    if (isNaN(weightValue) || weightValue < 1 || weightValue > 250) {
      setWeightError("Weight must be between 1 and 250 kilograms.");
    } else {
      setWeightError("");
    }
  };

  // Function to calculate BMI
  const calculateBMI = () => {
    if (weight && height) {
      const bmi = (weight / Math.pow(height, 2)).toFixed(2);
      setBMI(bmi);
    }
  };

  useEffect(() => {
    calculateBMI(); // Calculate BMI initially and whenever weight or height changes
  }, [weight, height]);

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const setData = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "gender":
        setGender(value);
        break;
      case "stunting":
        setStunting(value);
        break;
      case "wasting":
        setWasting(value);
        break;
      case "overweight":
        setOverweight(value);
        break;
      default:
        break;
    }

    // Log the selected radio button value to the console
    if (
      name === "gender" ||
      name === "stunting" ||
      name === "wasting" ||
      name === "overweight"
    ) {
      console.log(`Selected ${name}:`, value);
    }
  };

  const addStudData = () => {
    const data = {
      name,
      age,
      address,
      DOB,
      gender,
      mail,
      number,
      height,
      weight,
      BMI,
      stunting,
      wasting,
      overweight,
    };
    axios
      .post("http://localhost:8090/students", data)
      .then(() => {
        resetForm();
        window.alert("Student added successfully");

        navigate("/allstud");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (DOB) {
      setAge(calculateAge(DOB)); // Calculate age when DOB changes
    }
  }, [DOB]);

  return (
    <div className="container mt-5">
      <Link className="btn btn-primary mb-5" to="/allstud">
        Student Database
      </Link>
      <h3 className="mt-5">Fill the Student details</h3>

      <div
        className="container mt-5"
        style={{ backgroundColor: "palegoldenrod", padding: "20px" }}
      >
        <div className="row">
          {/* First Column */}
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                  validateName(e);
                }}
                value={name}
                required
              />
              {nameError && <p style={{ color: "red" }}>{nameError}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputdate1" className="form-label">
                DOB
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleInputdate1"
                name="DOB"
                onChange={(e) => {
                  setDOB(e.target.value);
                  validateDOB(e);
                }}
                value={DOB}
                aria-describedby="dobHelp"
              />
              {DOBError && <p style={{ color: "red" }}>{DOBError}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputage1" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputage1"
                name="age"
                onChange={(e) => {
                  setAge(e.target.value);
                  validateAge(e);
                }}
                value={age}
              />
              {ageError && <p style={{ color: "red" }}>{ageError}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputaddress1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputaddress1"
                name="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                  validateAddress(e);
                }}
                value={address}
                aria-describedby="addressHelp"
              />
              {addressError && <p style={{ color: "red" }}>{addressError}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Stunting</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stunting"
                  id="stunting-yes"
                  onChange={setData}
                  value="yes"
                  checked={stunting === "yes"}
                />
                <label className="form-check-label" htmlFor="stunting-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="stunting"
                  id="stunting-no"
                  onChange={setData}
                  value="no"
                  checked={stunting === "no"}
                />
                <label className="form-check-label" htmlFor="stunting-no">
                  No
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Wasting</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="wasting"
                  id="wasting-yes"
                  onChange={setData}
                  value="yes"
                  checked={wasting === "yes"}
                />
                <label className="form-check-label" htmlFor="wasting-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="wasting"
                  id="wasting-no"
                  onChange={setData}
                  value="no"
                  checked={wasting === "no"}
                />
                <label className="form-check-label" htmlFor="wasting-no">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={setData}
                  checked={gender === "male"}
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
                  onChange={setData}
                  checked={gender === "female"}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${emailError && "is-invalid"}`}
                id="exampleInputEmail1"
                name="email"
                onChange={handleEmailChange}
                value={mail}
                aria-describedby="emailHelp"
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputcontact" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputcontact"
                name="contactnumber"
                onChange={(e) => {
                  setNumber(e.target.value);
                  validateNumber(e);
                }}
                value={number}
                maxLength="10"
                aria-describedby="contactHelp"
              />
              {numberError && <p style={{ color: "red" }}>{numberError}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputheight" className="form-label">
                Height
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputheight"
                name="height"
                onChange={(e) => {
                  setHeight(e.target.value);
                  validateHeight(e);
                }}
                value={height}
                aria-describedby="heightHelp"
              />
              {heightError && <p style={{ color: "red" }}>{heightError}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputweight" className="form-label">
                Weight
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputweight"
                name="weight"
                onChange={(e) => {
                  setWeight(e.target.value);
                  validateWeight(e);
                }}
                value={weight}
                aria-describedby="weightHelp"
              />
              {weightError && <p style={{ color: "red" }}>{weightError}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputbmi" className="form-label">
                BMI
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputbmi"
                name="bmi"
                onChange={(e) => setBMI(e.target.value)}
                value={BMI}
                aria-describedby="bmiHelp"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Overweight</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="overweight"
                  id="overweight-yes"
                  onChange={setData}
                  value="yes"
                  checked={overweight === "yes"}
                />
                <label className="form-check-label" htmlFor="overweight-yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="overweight"
                  id="overweight-no"
                  onChange={setData}
                  value="no"
                  checked={overweight === "no"}
                />
                <label className="form-check-label" htmlFor="overweight-no">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary" onClick={addStudData}>
          Add Student
        </button>
      </div>
    </div>
  );
}

export default Addstudent;
