import React, { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
function Editschool() {
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

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8090/schools/${id}`)
      .then((response) => {
        setName(response.data.name);
        setAddress(response.data.address);
        setTelephoneNumber(response.data.telephoneNumber);
        setNumberOfTeachers(response.data.numberOfTeachers);
        setNumberOfStudents(response.data.numberOfStudents);
        setDentalDetails(response.data.dentalDetails);
        setDentalDetailsText(response.data.dentalDetails_text);
        setToiletFacilities(response.data.toiletFacilities);
        setToiletFacilitiesText(response.data.toiletFacilities_text);
        setWaterSupply(response.data.waterSupply);
        setWaterSupplyText(response.data.waterSupply_text);
        setSchoolCanteen(response.data.schoolCanteen);
        setSchoolCanteenText(response.data.schoolCanteen_text);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
      case "schoolCanteen": // Add this case
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
      // Update this line
      console.log(`Selected ${name}:`, value);
    }
  };

  const editSchoolData = () => {
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
      .put(`http://localhost:8090/schools/${id}`, data)
      .then(() => {
        Navigate("/allschool");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
                <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
    <div className="container mt-5">
      <Link className="btn btn-primary mb-5" to="/allschool">
        All School
      </Link>

      <h3 className="mt-5">Edit School Details</h3>
      <div className="container mt-5">
        <div col="1">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
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
              required
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
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputNumberOfTeachers"
              className="form-label"
            >
              Number of Teachers
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputNumberOfTeachers"
              name="numberOfTeachers"
              onChange={(e) => setNumberOfTeachers(e.target.value)}
              value={numberOfTeachers}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputNumberOfStudents"
              className="form-label"
            >
              Number of Students
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputNumberOfStudents"
              name="numberOfStudents"
              onChange={(e) => setNumberOfStudents(e.target.value)}
              value={numberOfStudents}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDentalDetails" className="form-label">
              Dental Details
            </label>
            <div>
              <input
                type="radio"
                id="goodDentalDetails"
                name="dentalDetails"
                value="Good"
                checked={dentalDetails === "Good"}
                onChange={(e) => setDentalDetails(e.target.value)}
                required
              />
              <label htmlFor="goodDentalDetails">Good</label>
            </div>
            <div>
              <input
                type="radio"
                id="intermediateDentalDetails"
                name="dentalDetails"
                value="Intermediate"
                checked={dentalDetails === "Intermediate"}
                onChange={(e) => setDentalDetails(e.target.value)}
              />
              <label htmlFor="intermediateDentalDetails">Intermediate</label>
            </div>
            <div>
              <input
                type="radio"
                id="badDentalDetails"
                name="dentalDetails"
                value="Bad"
                checked={dentalDetails === "Bad"}
                onChange={(e) => setDentalDetails(e.target.value)}
              />
              <label htmlFor="badDentalDetails">Bad</label>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputDentalDetailsText"
              className="form-label"
            >
              Explain Dental Details
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDentalDetailsText"
              name="dentalDetails"
              onChange={(e) => setDentalDetails(e.target.value)}
              value={dentalDetails}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputToiletFacilities"
              className="form-label"
            >
              Toilet Facilities
            </label>
            <div>
              <input
                type="radio"
                id="goodToiletFacilities"
                name="toiletFacilities"
                value="Good"
                checked={toiletFacilities === "Good"}
                onChange={(e) => setToiletFacilities(e.target.value)}
                required
              />
              <label htmlFor="goodToiletFacilities">Good</label>
            </div>
            <div>
              <input
                type="radio"
                id="intermediateToiletFacilities"
                name="toiletFacilities"
                value="Intermediate"
                checked={toiletFacilities === "Intermediate"}
                onChange={(e) => setToiletFacilities(e.target.value)}
              />
              <label htmlFor="intermediateToiletFacilities">Intermediate</label>
            </div>
            <div>
              <input
                type="radio"
                id="badToiletFacilities"
                name="toiletFacilities"
                value="Bad"
                checked={toiletFacilities === "Bad"}
                onChange={(e) => setToiletFacilities(e.target.value)}
              />
              <label htmlFor="badToiletFacilities">Bad</label>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputToiletFacilitiesText"
              className="form-label"
            >
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
            <label htmlFor="exampleInputWaterSupply" className="form-label">
              Water Supply
            </label>
            <div>
              <input
                type="radio"
                id="goodWaterSupply"
                name="waterSupply"
                value="Good"
                checked={waterSupply === "Good"}
                onChange={(e) => setWaterSupply(e.target.value)}
                required
              />
              <label htmlFor="goodWaterSupply">Good</label>
            </div>
            <div>
              <input
                type="radio"
                id="intermediateWaterSupply"
                name="waterSupply"
                value="Intermediate"
                checked={waterSupply === "Intermediate"}
                onChange={(e) => setWaterSupply(e.target.value)}
              />
              <label htmlFor="intermediateWaterSupply">Intermediate</label>
            </div>
            <div>
              <input
                type="radio"
                id="badWaterSupply"
                name="waterSupply"
                value="Bad"
                checked={waterSupply === "Bad"}
                onChange={(e) => setWaterSupply(e.target.value)}
              />
              <label htmlFor="badWaterSupply">Bad</label>
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
          <div className="mb-3">
            <label htmlFor="exampleInputSchoolCanteen" className="form-label">
              School Canteen
            </label>
            <div>
              <input
                type="radio"
                id="goodSchoolCanteen"
                name="schoolCanteen"
                value="Good"
                checked={schoolCanteen === "Good"}
                onChange={(e) => setSchoolCanteen(e.target.value)}
                required
              />
              <label htmlFor="goodSchoolCanteen">Good</label>
            </div>
            <div>
              <input
                type="radio"
                id="intermediateSchoolCanteen"
                name="schoolCanteen"
                value="Intermediate"
                checked={schoolCanteen === "Intermediate"}
                onChange={(e) => setSchoolCanteen(e.target.value)}
              />
              <label htmlFor="intermediateSchoolCanteen">Intermediate</label>
            </div>
            <div>
              <input
                type="radio"
                id="badSchoolCanteen"
                name="schoolCanteen"
                value="Bad"
                checked={schoolCanteen === "Bad"}
                onChange={(e) => setSchoolCanteen(e.target.value)}
              />
              <label htmlFor="badSchoolCanteen">Bad</label>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputSchoolCanteenText"
              className="form-label"
            >
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={editSchoolData}
        >
          Edit School
        </button>
      </div>
    </div>
    </div></>
  );
}

export default Editschool;
