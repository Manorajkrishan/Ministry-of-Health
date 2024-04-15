import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AddCouples() {
  const [wifeName, setWifeName] = useState("");
  const [husbandName, setHusbandName] = useState("");
  const [wifeNic, setWifeNic] = useState("");
  const [husbandNic, setHusbandNic] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [familyPlan, setFamilyPlan] = useState("");

  const navigate = useNavigate();

  const validateNIC = (nic) => {
    const regex = /^(1[9][1-9][0-9]|200[0-7])([0-9]{10})$|^(1[0-9]|[2-9][0-9])([0-9]{8})([Vv])$/;
    return regex.test(nic);
  };

  const addCouple = (e) => {
    e.preventDefault();

    if (!validateNIC(wifeNic) || !validateNIC(husbandNic)) {
      alert('Please enter valid NIC numbers.');
      return;
    }

    const newCouple = {
      wifeName,
      husbandName,
      wifeNic,
      husbandNic,
      email,
      tel,
      address,
      familyPlan
    };

    axios.post("http://localhost:8090/coupledetails/addcouple", newCouple)
      .then(() => {
        alert("Couple Added");
        navigate("/allcouple");
      })
      .catch((err) => {
        alert(err);
      });
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
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/allcouple">Newly Married Couple Management</a></li>
                      <li className="breadcrumb-item active">New Couple</li>
                    </ol>
                  </nav>
                </div>
                <div className="col text-end fw-lighter">
                  <b></b>
                </div>
              </div>
            </div>

            <form onSubmit={addCouple}>
              <div className="row form-group mb-4">
                <div className="col">
                  <h3>Wife</h3>
                  <label htmlFor="wifeName">Wife's Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="wifeName"
                    name="wifeName"
                    placeholder="Wife Name"
                    onChange={(e) => setWifeName(e.target.value)}
                    required
                  />
                </div>

                <div className="col">
                  <h3>Husband</h3>
                  <label htmlFor="husbandName">Husband's Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="husbandName"
                    name="husbandName"
                    placeholder="Husband Name"
                    onChange={(e) => setHusbandName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row form-group mb-5">
                <div className="col">
                  <label htmlFor="wifeNic">Wife's NIC : </label>
                  <input
                    type="text"
                    className="form-control"
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
                    className="form-control"
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

              <hr style={{ borderTop: '5px solid black', fontWeight: 'bold' }} />

              <div className="row form-group mb-4">
                <div className="col">
                  <label htmlFor="tel">Telephone : </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    name="tel"
                    placeholder="Telephone"
                    pattern="07[0-9]{8}"
                    maxLength="10"
                    minLength="10"
                    title="Please enter a valid telephone number starting with 07."
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid telephone number starting with 07.
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
