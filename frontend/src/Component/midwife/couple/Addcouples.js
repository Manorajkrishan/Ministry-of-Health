import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

export default function AddCouples() {
  const [wifeName, setWifeName] = useState("");
  const [husbandName, setHusbandName] = useState("");
  const [wifeNic, setWifeNic] = useState("");
  const [husbandNic, setHusbandNic] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [marriageno, setMarriageno] = useState("");
  const [familyPlan, setFamilyPlan] = useState("");
  const [marriageCertificatePhoto, setMarriageCertificatePhoto] = useState(null);

  const navigate = useNavigate();

  const validateNIC = (nic) => {
    const regex = /^[0-9]{9}[vV]|[0-9]{12}$/;
    return regex.test(nic);
  };

  const handleMarriageCertificatePhotoUpload = (e) => {
    const file = e.target.files[0];
    setMarriageCertificatePhoto(file);
  };

  const addCouple = async (e) => {
    e.preventDefault();

    if (!validateNIC(wifeNic) || !validateNIC(husbandNic)) {
      alert('Please enter valid NIC numbers.');
      return;
    }

    const formData = new FormData();
    formData.append("wifeName", wifeName);
    formData.append("husbandName", husbandName);
    formData.append("wifeNic", wifeNic);
    formData.append("husbandNic", husbandNic);
    formData.append("email", email);
    formData.append("tel", tel);
    formData.append("address", address);
    formData.append("marriageno", marriageno);
    formData.append("familyPlan", familyPlan);
    formData.append("marriageCertificatePhoto", marriageCertificatePhoto);

    try {
      await axios.post("http://localhost:8090/coupledetails/addcouple", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Couple Added");
      navigate("/allcouple");
    } catch (err) {
      console.error(err);
      alert("Error adding couple");
    }
  };

  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        <div className="tableCouple">
          <div className="col-md-9">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Newly Married Couples</h1>
            </div>

            <div className="col py-3">
              <div className="row">
                <div className="col">
                  <p>
                    <a href="/allcouple">Newly Married Couple Management / </a>
                    New Couple
                  </p>
                </div>
                <div className="col text-end fw-lighter">
                  <b></b>
                </div>
              </div>
            </div>

            <form onSubmit={addCouple}>
              <div className="row form-group mb-4">
                {/* Wife details */}
                <div className="col">
                  <h3>Wife</h3>
                  <label htmlFor="wifeName">Wife's Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="wifeName"
                    name="wifeName"
                    placeholder="Wife Name"
                    value={wifeName}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const regex = /^[A-Za-z ]+$/; // Regular expression to allow letters, numbers, and spaces
                  
                      if (regex.test(inputValue) || e.nativeEvent.inputType === "deleteContentBackward") {
                        setWifeName(inputValue);
                      }
                    }}
                    required
                  />
                </div>
                {/* Husband details */}
                <div className="col">
                  <h3>Husband</h3>
                  <label htmlFor="husbandName">Husband's Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="husbandName"
                    name="husbandName"
                    placeholder="Husband Name"
                    value={husbandName}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const regex = /^[A-Za-z ]+$/; // Regular expression to allow letters, numbers, and spaces
                  
                      if (regex.test(inputValue) || e.nativeEvent.inputType === "deleteContentBackward") {
                        setHusbandName(inputValue);
                      }
                    }}
                    required
                  />
                </div>
              </div>

              {/* Other couple details */}
              <div className="row form-group mb-5">
                <div className="col">
                  <label htmlFor="wifeNic">Wife's NIC : </label>
                  <input
                    type="text"
                    className={`form-control ${!validateNIC(wifeNic) ? 'is-invalid' : ''}`}
                    id="wifeNic"
                    name="wifeNic"
                    placeholder="Wife NIC"
                    maxLength="12"
                    minLength="10"
                    onChange={(e) => setWifeNic(e.target.value)}
                    value={wifeNic}
                    required
                  />
                  {!validateNIC(wifeNic) && (
                    <div className="invalid-feedback">
                      Please enter a valid NIC number.
                    </div>
                  )}
                </div>

                <div className="col">
                  <label htmlFor="husbandNic">Husband's NIC : </label>
                  <input
                    type="text"
                    className={`form-control ${!validateNIC(husbandNic) ? 'is-invalid' : ''}`}
                    id="husbandNic"
                    name="husbandNic"
                    placeholder="Husband NIC"
                    maxLength="12"
                    minLength="10"
                    onChange={(e) => setHusbandNic(e.target.value)}
                    value={husbandNic}
                    required
                  />
                  {!validateNIC(husbandNic) && (
                    <div className="invalid-feedback">
                      Please enter a valid NIC number.
                    </div>
                  )}
                </div>
              </div>

              {/* Email and Telephone */}
              <div className="row form-group mb-4">
                <div className="col">
                  <label htmlFor="tel">Telephone : </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+94</span>
                    </div>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      name="tel"
                      placeholder="771234567"
                      maxLength="9"
                      minLength="9"
                      title="Please enter a valid telephone number."
                      value={tel}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const regex = /^[0-9]+$/; // Regular expression to allow letters, numbers, and spaces
                    
                        if (regex.test(inputValue) || e.nativeEvent.inputType === "deleteContentBackward") {
                          setTel(inputValue);
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="invalid-feedback">
                    Please enter a valid telephone number.
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    maxLength="54"
                    minLength="12"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="row form-group mb-4">
                <div className="col">
                  <label htmlFor="address"> Address : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Marriage Certificate No and Photo */}
              <div className="row form-group mb-4">
                <div className="col">
                  <label htmlFor="marriageno"> Marriage Certificate No : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="marriageno"
                    name="marriageno"
                    placeholder="Marriage Certificate No"
                    onChange={(e) => setMarriageno(e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="marriageCertificatePhoto">Marriage Certificate Photo:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="marriageCertificatePhoto"
                    name="marriageCertificatePhoto"
                    accept="image/*"
                    onChange={(e) => handleMarriageCertificatePhotoUpload(e)}
                    required
                  />
                </div>
              </div>

              {/* Family Plan */}
              <div>
                <label htmlFor="familyPlan">Family Plan : </label>
                <i> </i>
                <input
                  type="radio"
                  name="familyPlan"
                  value="earlyBabyPlan"
                  onChange={(e) => setFamilyPlan(e.target.value)}
                />{' '}
                Early Baby Plan
                <i> </i>
                <i> </i>
                <input
                  type="radio"
                  name="familyPlan"
                  value="lateBabyPlan"
                  onChange={(e) => setFamilyPlan(e.target.value)}
                />{' '}
                Late Baby Plan
              </div>

              <br />
              <div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  id="addButton"
                  data-bs-target="#deleteModal"
                >
                  Add Couple
                </button>
                <i> </i>
                <button type="reset" className="btn btn-primary" id="resetButton">
                  Reset
                </button>
              </div>
            </form>

            <div className="modal fade" tabIndex="-1" role="dialog" id="deleteModal">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="modal-title"></div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <b>New record is successfully added.</b>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
