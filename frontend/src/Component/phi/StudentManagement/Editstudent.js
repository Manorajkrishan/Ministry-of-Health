import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
function Addstudent() {
  // const [inputval, setInputval] = useState({
  //   name: "",
  //   dob: "",
  //   age: "",
  //   address: "",
  //   gender: "",
  //   email: "",
  //   contactnumber: "",
  //   height: "",
  //   weight: "",
  //   bmi: "",
  //   stunting: "",
  //   wasting: "",
  //   overweight: "",
  // });
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
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8090/students/${id}`)
      .then((response) => {
        setName(response.data.name);
        setAge(response.data.age);
        setAddress(response.data.address);
        setDOB(response.data.DOB);
        setGender(response.data.gender);
        setMail(response.data.mail);
        setNumber(response.data.number);
        setHeight(response.data.height);
        setWeight(response.data.weight);
        setBMI(response.data.BMI);
        setStunting(response.data.stunting);
        setWasting(response.data.wasting);
        setOverweight(response.data.overweight);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      case "overweight": // Add this case
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
      // Update this line
      console.log(`Selected ${name}:`, value);
    }
  };

  const EditStudData = () => {
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
      .put(`http://localhost:8090/students/${id}`, data)
      .then(() => {
        Navigate("/");
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
      <Link className="btn btn-primary mb-5" to="/allstud">
        All Students
      </Link>

      <h3 className="mt-5">Fill the Student details</h3>

      <div className="mb-3 w-50">
        <label htmlFor="exampleInputname1" className="form-label">
          Name
        </label>

        <input
          type="text"
          className="form-control"
          id="exampleInputname1"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          aria-describedby="nameHelp"
        />
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="exampleInputdate1" className="form-label">
          DOB
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputdate1"
          name="DOB"
          onChange={(e) => setDOB(e.target.value)}
          value={DOB}
          aria-describedby="dobHelp"
        />
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="exampleInputage1" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputage1"
          name="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          aria-describedby="ageHelp"
        />
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="exampleInputaddress1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputaddress1"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          aria-describedby="addressHelp"
        />
      </div>

      <div className="mb-3 w-50">
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

      {/* Other form inputs */}
      <div className="mb-3 w-50">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="exampleInputcontact" className="form-label">
          Contact Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputcontact"
          name="contactnumber"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          aria-describedby="contactHelp"
        />
      </div>

      <div className="mb-3 w-50">
        <label htmlFor="exampleInputheight" className="form-label">
          Height
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputheight"
          name="height"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
          aria-describedby="heightHelp"
        />
      </div>

      <div className="mb-3 w-50 w-50">
        <label htmlFor="exampleInputweight" className="form-label">
          Weight
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputweight"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          aria-describedby="weightHelp"
        />
      </div>

      <div className="mb-3 w-50">
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

      <div className="mb-3 w-50">
        <label className="form-label">Stunting</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="stunting"
            id="stunting-yes"
            onChange={setData}
            value="yes"
            checked={stunting === "yes"} // Update this line
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
            checked={stunting === "no"} // Update this line
          />
          <label className="form-check-label" htmlFor="stunting-no">
            No
          </label>
        </div>
      </div>

      <div className="mb-3 w-50">
        <label className="form-label">Wasting</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="wasting"
            id="wasting-yes"
            onChange={setData}
            value="yes"
            checked={wasting === "yes"} // Update this line
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
            checked={wasting === "no"} // Update this line
          />
          <label className="form-check-label" htmlFor="wasting-no">
            No
          </label>
        </div>
      </div>

      <div className="mb-3 w-50">
        <label className="form-label">Overweight</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="overweight"
            id="overweight-yes"
            onChange={setData}
            value="yes"
            checked={overweight === "yes"} // Update this line
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
            checked={overweight === "no"} // Update this line
          />
          <label className="form-check-label" htmlFor="overweight-no">
            No
          </label>
        </div>
      </div>

      <div className="mb-3 form-check w-50">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <button type="submit" className="btn btn-primary" onClick={EditStudData}>
        Update Student
      </button>
    </div>
    </div>
    </>
  );
}

export default Addstudent;
