import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

// Inside the component function


export default function EditCouple() {
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
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  // Function to handle file input change
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setMarriageCertificatePhoto(file);
  };


  const { id } = useParams();

  const validateNIC = (nic) => {
    const nicCheck = /^[0-9]{9}[vV]|[0-9]{12}$/;
    return nicCheck.test(nic);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    axios.get(`http://localhost:8090/coupledetails/get/${id}`)
      .then((res) => {
        const couple = res.data.couple;
        setWifeName(couple.wifeName);
        setHusbandName(couple.husbandName);
        setWifeNic(couple.wifeNic);
        setHusbandNic(couple.husbandNic);
        setEmail(couple.email);
        setTel(couple.tel);
        setAddress(couple.address);
        setMarriageno(couple.marriageno)
        setMarriageCertificatePhoto(couple.marriageCertificatePhoto)
        setFamilyPlan(couple.familyPlan);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const updateCouple = (e) => {
    e.preventDefault();
  
    if (!validateNIC(wifeNic) || !validateNIC(husbandNic)) {
      setError('Please enter valid NIC numbers.');
      return;
    }
  
    let updatedMarriageCertificatePhoto = marriageCertificatePhoto; // Initialize variable to store updated value
  
    // Check if marriageCertificatePhoto is an object (file) and convert it to a string (file path)
    if (typeof marriageCertificatePhoto === 'object') {
      updatedMarriageCertificatePhoto = URL.createObjectURL(marriageCertificatePhoto); // Convert file to object URL
    }
  
    const updatedCouple = {
      wifeName,
      husbandName,
      wifeNic,
      husbandNic,
      email,
      tel,
      address,
      marriageCertificatePhoto: updatedMarriageCertificatePhoto, // Use the updated value
      familyPlan
    };
  
    axios.put(`http://localhost:8090/coupledetails/editcouple/${id}`, updatedCouple)
      .then(() => {
        alert("Couple Updated");
        window.location.href = "/allcouple";
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const onDeleteClick = async () => {
    await axios.delete(`http://localhost:8090/coupledetails/deletecouple/${id}`)
      .then(() => {
        alert("Couple deleted");
        window.location.href = "/allcouple";
      });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className='tableCouple'>
        <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Edit {wifeName} & {husbandName}</h1>
        </div>

        <div className="col py-3">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/allcouple">Newly Married Couple Management</a></li>
                  <li className="breadcrumb-item active">{wifeName} & {husbandName}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <form onSubmit={updateCouple}>
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
                value={wifeNic}
                onChange={(e) => setWifeNic(e.target.value)}
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
                value={husbandNic}
                onChange={(e) => setHusbandNic(e.target.value)}
                required
              />
              {!validateNIC(husbandNic) && (
                <div className="invalid-feedback">
                  Please enter a valid NIC number.
                </div>
              )}
            </div>
          </div>

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
                value={email}
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
                value={address}
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
                    value={marriageno}
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
                      onChange={handleFileInputChange} // Call the function to handle file input change
                      ref={fileInputRef} // Attach the ref to the file input
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
              checked={familyPlan === 'earlyBabyPlan'}
              onChange={(e) => setFamilyPlan(e.target.value)}
            />{' '}
            Early Baby Plan
            <i> </i>
            <i> </i>
            <input
              type="radio"
              name="familyPlan"
              value="lateBabyPlan"
              checked={familyPlan === 'lateBabyPlan'}
              onChange={(e) => setFamilyPlan(e.target.value)}
            />{' '}
            Late Baby Plan
          </div>

          <br />
          <div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Update Couple
            </button>
            <i> </i>
            <button type="button" onClick={onDeleteClick} className="btn btn-danger">
              Delete Couple
            </button>
          </div>
          {error && <div className="text-danger">{error}</div>}
        </form>
      </div>
    </div>
  );
}
