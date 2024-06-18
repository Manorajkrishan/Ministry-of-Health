import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddSchool() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [numberOfTeachers, setNumberOfTeachers] = useState("");
  const [numberOfStudents, setNumberOfStudents] = useState("");
  const [dentalDetails, setDentalDetails] = useState("");
  const [dentalDetails_text, setDentalDetailsText] = useState("");
  const [toiletFacilities, setToiletFacilities] = useState("");
  const [toiletFacilities_text, setToiletFacilitiesText] = useState("");
  const [waterSupply, setWaterSupply] = useState("");
  const [waterSupply_text, setWaterSupplyText] = useState("");
  const [schoolCanteen, setSchoolCanteen] = useState("");
  const [schoolCanteen_text, setSchoolCanteenText] = useState("");
  const navigate = useNavigate();


  const resetForm = () => {
    setName("");
    setAddress("");
    setTelephoneNumber("");
    setNumberOfTeachers("");
    setNumberOfStudents("");
    setDentalDetails("");
    setDentalDetailsText("");
    setToiletFacilities("");
    setToiletFacilitiesText("");
    setWaterSupply("");
    setWaterSupplyText("");
    setSchoolCanteen("");
    setSchoolCanteenText("");
  };

  const setData = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "dentalDetails":
        setDentalDetails(value);
        break;
      case "toiletFacilities":
        setToiletFacilities(value);
        break;
      case "waterSupply":
        setWaterSupply(value);
        break;
      case "schoolCanteen":
        setSchoolCanteen(value);
        break;
      default:
        break;
    }
    // Log the selected radio button value to the console
    if (
      name === "dentalDetails" ||
      name === "toiletFacilities" ||
      name === "waterSupply" ||
      name === "schoolCanteen"
    ) {
      console.log(`Selected ${name}:`, value);
    }
  };

  const addSchoolData = () => {
    const data = {
      name,
      address,
      telephoneNumber,
      numberOfTeachers,
      numberOfStudents,
      dentalDetails,
      dentalDetails_text,
      toiletFacilities,
      toiletFacilities_text,
      waterSupply,
      waterSupply_text,
      schoolCanteen,
      schoolCanteen_text,
    };
    axios
      .post("http://localhost:8090/schools", data)
      .then(() => {
        resetForm();
        window.alert("School added successfully");

        navigate("/allschool");

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <Link className="btn btn-primary mb-5" to="/allschool">
        Back
      </Link>
      <h3 className="mt-5">Fill the School details</h3>
      <div className="container mt-5" style={{ backgroundColor: "palegoldenrod", padding: "20px" }}>
      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
        <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          aria-describedby="nameHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputAddress"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTelephoneNumber" className="form-label">
              Telephone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTelephoneNumber"
              name="telephoneNumber"
              onChange={(e) => setTelephoneNumber(e.target.value)}
              value={telephoneNumber}
              
            />
          </div>
          <div className="mb-3">
        <label htmlFor="exampleInputNumberOfTeachers" className="form-label">
          Number of Teachers
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputNumberOfTeachers"
          name="numberOfTeachers"
          onChange={(e) => setNumberOfTeachers(e.target.value)}
          value={numberOfTeachers}
        />
      </div>
          <div className="mb-3">
            <label htmlFor="exampleInputNumberOfStudents" className="form-label">
              Number of Students
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputNumberOfStudents"
              name="numberOfStudents"
              onChange={(e) => setNumberOfStudents(e.target.value)}
              value={numberOfStudents}
             
            />
          </div>
          <div className="mb-3">
  <label className="form-label">School Canteen</label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="schoolCanteen"
      id="schoolCanteen-good"
      onChange={setData}
      value="good"
      checked={schoolCanteen === "good"}
    />
    <label className="form-check-label" htmlFor="schoolCanteen-good">
      Good
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="schoolCanteen"
      id="schoolCanteen-intermediate"
      onChange={setData}
      value="intermediate"
      checked={schoolCanteen === "intermediate"}
    />
    <label className="form-check-label" htmlFor="schoolCanteen-intermediate">
      Intermediate
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="schoolCanteen"
      id="schoolCanteen-bad"
      onChange={setData}
      value="bad"
      checked={schoolCanteen === "bad"}
    />
    <label className="form-check-label" htmlFor="schoolCanteen-bad">
      Bad
    </label>
  </div>
</div>

          <div className="mb-3">
            <label htmlFor="exampleInputSchoolCanteenText" className="form-label">
              School Canteen Text
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSchoolCanteenText"
              name="schoolCanteen_text"
              onChange={(e) => setSchoolCanteenText(e.target.value)}
              value={schoolCanteen_text}
              required
            />
          </div>
        </div>
        {/* Second Column */}
        <div className="col-md-6">
        <div className="mb-3">
  <label className="form-label">Dental Details</label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="dentalDetails"
      id="dentalDetails-good"
      onChange={setData}
      value="good"
      checked={dentalDetails === "good"}
    />
    <label className="form-check-label" htmlFor="dentalDetails-good">
      Good
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="dentalDetails"
      id="dentalDetails-intermediate"
      onChange={setData}
      value="intermediate"
      checked={dentalDetails === "intermediate"}
    />
    <label className="form-check-label" htmlFor="dentalDetails-intermediate">
      Intermediate
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="dentalDetails"
      id="dentalDetails-bad"
      onChange={setData}
      value="bad"
      checked={dentalDetails === "bad"}
    />
    <label className="form-check-label" htmlFor="dentalDetails-bad">
      Bad
    </label>
  </div>
</div>

          <div className="mb-3">
            <label htmlFor="exampleInputDentalDetails" className="form-label">
              Explain Dental Details
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDentalDetails"
              name="dentalDetails_text"
              onChange={(e) => setDentalDetailsText(e.target.value)}
              value={dentalDetails_text}
              required
            />
          </div>

          <div className="mb-3">
  <label className="form-label">Toilet Facilities</label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="toiletFacilities"
      id="toiletFacilities-good"
      onChange={setData}
      value="Good"
      checked={toiletFacilities === "Good"}
    />
    <label className="form-check-label" htmlFor="toiletFacilities-good">
      Good
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="toiletFacilities"
      id="toiletFacilities-intermediate"
      onChange={setData}
      value="Intermediate"
      checked={toiletFacilities === "Intermediate"}
    />
    <label className="form-check-label" htmlFor="toiletFacilities-intermediate">
      Intermediate
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="toiletFacilities"
      id="toiletFacilities-bad"
      onChange={setData}
      value="Bad"
      checked={toiletFacilities === "Bad"}
    />
    <label className="form-check-label" htmlFor="toiletFacilities-bad">
      Bad
    </label>
  </div>
</div>

          <div className="mb-3">
            <label htmlFor="exampleInputToiletFacilitiesText" className="form-label">
              Toilet Facilities Text
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputToiletFacilitiesText"
              name="toiletFacilities_text"
              onChange={(e) => setToiletFacilitiesText(e.target.value)}
              value={toiletFacilities_text}
              required
            />
          </div>
          <div className="mb-3">
  <label className="form-label">Water Supply</label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="waterSupply"
      id="waterSupply-good"
      onChange={setData}
      value="Good"
      checked={waterSupply === "Good"}
    />
    <label className="form-check-label" htmlFor="waterSupply-good">
      Good
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="waterSupply"
      id="waterSupply-intermediate"
      onChange={setData}
      value="Intermediate"
      checked={waterSupply === "Intermediate"}
    />
    <label className="form-check-label" htmlFor="waterSupply-intermediate">
      Intermediate
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="waterSupply"
      id="waterSupply-bad"
      onChange={setData}
      value="Bad"
      checked={waterSupply === "Bad"}
    />
    <label className="form-check-label" htmlFor="waterSupply-bad">
      Bad
    </label>
  </div>
</div>

          <div className="mb-3">
            <label htmlFor="exampleInputWaterSupplyText" className="form-label">
              Water Supply Text
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputWaterSupplyText"
              name="waterSupply_text"
              onChange={(e) => setWaterSupplyText(e.target.value)}
              value={waterSupply_text}
              required
            />
          </div>
          
        </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={addSchoolData}>
        Add School
      </button>
    </div>
    </div>
  );
}

export default  AddSchool;