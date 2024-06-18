import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Sidebar from '../SideBar';
import { Link } from "react-router-dom";

export default function EditVaccine() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [dob, setdob] = useState("");
  const [email, setemail] = useState("");
  const [contactno, setcontact] = useState("");
  const [agegroup, setagegroup] = useState("");
  const [gender, setgender] = useState("");
  const [vaccines, setVaccines] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8090/vaccinedetails/get/${id}`)
      .then((res) => {
        const vaccine = res.data.vaccine;
        setname(vaccine.name);
        setage(vaccine.age);
        setdob(vaccine.dob);
        setemail(vaccine.email);
        setcontact(vaccine.contactno);
        setgender(vaccine.gender);
        setVaccines(vaccine.vaccines);
        // Set the age group state based on the fetched data
        setagegroup(vaccine.agegroup); // This line ensures the correct age group is selected in the dropdown
        // Check the checkboxes for selected vaccines
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
          if (vaccine.vaccines.includes(checkbox.value)) {
            checkbox.checked = true;
          }
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  function updateVaccine(e) {
    e.preventDefault();
    const updatedVaccine = {
      name,
      age,
      dob,
      email,
      contactno,
      agegroup,
      gender,
      vaccines,
    };

    // Send updated vaccine details to the server
    axios
      .put(
        `http://localhost:8090/vaccinedetails/editvaccine/${id}`,
        updatedVaccine
      )
      .then(() => {
        alert("Vaccine Updated");
        window.location.href = "/allvaccine";
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  // Function to handle deletion of a couple record
  const onDeleteClick = async () => {
    await axios
      .delete(`http://localhost:8090/vaccinedetails/deletecouple/${id}`)
      .then(() => {
        alert("Vaccine deleted");
        window.location.href = "/vaccinedetails";
      });
  };
  function handleCheckboxChange(e) {
    const vaccine = e.target.value;
    if (vaccines.includes(vaccine)) {
      setVaccines(vaccines.filter(item => item !== vaccine));
    } else {
      setVaccines([...vaccines, vaccine]);
    }
  }

  return (
    <div>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <Sidebar />
      <div style ={{marginLeft:"300px"}}>
      <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Edit {name}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button className="btn btn-sm btn-outline-secondary">?</button>
          </div>
        </div>
      </div>

      <div className="col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/allvaccine">Vaccine Management</a></li>
                <li className="breadcrumb-item active">{name} </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <form onSubmit={updateVaccine}>
        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
              required
            />
          </div>

          <div className="col">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              placeholder="Age"
              required
            />
          </div>
        </div>

        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" className="form-control" id="dob" name="dob" value={dob} onChange={(e) => setdob(e.target.value)} placeholder="Date of birth" required />
          </div>
          <div className="col">
            <label htmlFor="hotelAddress">Email:</label>
            <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" required />
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="contact">Contact Number:</label>
            <input type="number" className="form-control" id="contactno" name="contactno" value={contactno} onChange={(e) => setcontact(e.target.value)} placeholder="Contact No" required />
          </div>
          <div className="col">
            {/* <label htmlFor="hotelAddress">Age Group:</label>
            <input type="text" className="form-control" id="agegroup" name="agegroup" value={agegroup} onChange={(e) => setagegroup(e.target.value)} placeholder="Email" required /> */}
             <label htmlFor="ageGroup" >Age Group:</label>
            <select className="form-select" id="agegroup" value={agegroup} onChange={(e) => setagegroup(e.target.value)} disabled>
                  <option value="">Select Age Group</option>
                  <option value="4to6">4 to 6</option>
                  <option value="7to10">7 to 10</option>
                  <option value="11to12">11 to 12</option>
                  <option value="13to18">13 to 18</option>
                  <option value="19above">19 above</option>
                </select>
          </div>
          
              
        </div>
        <div className="row form-group mb-4">
          <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender:</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={(e) => setgender(e.target.value)} />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={(e) => setgender(e.target.value)} />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="other" value="other" checked={gender === "other"} onChange={(e) => setgender(e.target.value)} />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
        </div>

        <hr style={{ borderTop: '5px solid black', fontWeight: 'bold' }} />

        <div className="row form-group mb-4">
        
          <div className="col">
              {agegroup && (
                <div>
                  <h4>Vaccines for {agegroup}</h4>
                  <ul>
                    {agegroup === "4to6" && (
                      <>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine1" value="DTap(Tetanus)- Dose 5" checked={vaccines.includes("DTap(Tetanus)- Dose 5")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">DTap(Tetanus)- Dose 5</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine2" value="Polio - Dose 4" checked={vaccines.includes("Polio - Dose 4")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Polio - Dose 4</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine3" value="MMR - Dose 2" checked={vaccines.includes("MMR - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">MMR - Dose 2</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine4" value="Chickenpox - Dose 2" checked={vaccines.includes("Chickenpox - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Chickenpox - Dose 2</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine5" value="Influenza - Dose 1" checked={vaccines.includes("Influenza - Dose 1")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 1</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine6" value="Influenza - Dose 2" checked={vaccines.includes("Influenza - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 2</label><br></br>
                      
                      </>
                    )}
                    {agegroup === "7to10" && (
                      <>
                        <input className="form-check-input" type="checkbox" id="vaccine1" value="HPV" checked={vaccines.includes("HPV")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">HPV</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine2" value="DTap(Tetanus)- Dose 5" checked={vaccines.includes("DTap(Tetanus)- Dose 5")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">DTap(Tetanus)- Dose 5</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine3" value="Polio - Dose 4" checked={vaccines.includes("Polio - Dose 4")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Polio - Dose 4</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine4" value="MMR - Dose 2" checked={vaccines.includes("MMR - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">MMR - Dose 2</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine5" value="Chickenpox - Dose 2" checked={vaccines.includes("Chickenpox - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Chickenpox - Dose 2</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine6" value="Influenza - Dose 1" checked={vaccines.includes("Influenza - Dose 1")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 1</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine7" value="Influenza - Dose 2" checked={vaccines.includes("Influenza - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 2</label><br></br>
                        
                       
                      </>
                    )}
                    {agegroup === "11to12" && (
                      <>
                        <input className="form-check-input" type="checkbox" id="vaccine1" value="HPV" checked={vaccines.includes("HPV")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">HPV</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine2" value="Tdap" checked={vaccines.includes("Tdap")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Tdap</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine3" value="Meningococcal A" checked={vaccines.includes("Meningococcal A")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Meningococcal A</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine4" value="Dengue" checked={vaccines.includes("Dengue")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Dengue</label><br></br>
                     
                       
                      
                        <input className="form-check-input" type="checkbox" id="vaccine5" value="Influenza - Dose 1" checked={vaccines.includes("Influenza - Dose 1")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 1</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine6" value="Influenza - Dose 2" checked={vaccines.includes("Influenza - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 2</label><br></br>
                        
                        
                        
                       
                      </>
                    )}
                    {agegroup === "13to18" && (
                      <>
                      <label className="form-check-label" htmlFor="vaccine1">Covid 19 </label><br></br>
                        <input className="form-check-input" type="checkbox" id="vaccine1" value="Covid 19 1st dose - Astrazeneca" checked={vaccines.includes("Covid 19 1st dose - Astrazeneca")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Covid 19 1st dose - Astrazeneca</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine2" value="Covid 19 1st dose - Sinopharm" checked={vaccines.includes("Covid 19 1st dose - Sinopharm")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 1st dose - Sinopharm</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine3" value="Covid 19 1st dose - Pfizer" checked={vaccines.includes("Covid 19 1st dose - Pfizer")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 1st dose - Pfizer</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine4" value="Covid 19 1st dose - Moderna" checked={vaccines.includes("Covid 19 1st dose - Moderna")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 1st dose - Moderna</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine7" value="Covid 19 2nd dose - Astrazeneca" checked={vaccines.includes("Covid 19 2nd dose - Astrazeneca")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Covid 19 2nd dose - Astrazeneca</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine8" value="Covid 19 2nd dose - Sinopharm" checked={vaccines.includes("Covid 19 2nd dose - Sinopharm")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 2nd dose - Sinopharm</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine8" value="Covid 19 2nd dose - Pfizer" checked={vaccines.includes("Covid 19 2nd dose - Pfizer")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 2nd dose - Pfizer</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine9" value="Covid 19 2nd dose - Moderna" checked={vaccines.includes("Covid 19 2nd dose - Moderna")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 2nd dose - Moderna</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine10" value="Covid 19 3rd dose - Astrazeneca" checked={vaccines.includes("Covid 19 3rd dose - Astrazeneca")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Covid 19 3rd dose - Astrazeneca</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine11" value="Covid 19 3rd dose - Sinopharm" checked={vaccines.includes("Covid 19 3rd dose - Sinopharm")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 3rd dose - Sinopharm</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine12" value="Covid 19 3rd dose - Pfizer" checked={vaccines.includes("Covid 19 3rd dose - Pfizer")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 3rd dose - Pfizer</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine13" value="Covid 19 3rd dose - Moderna" checked={vaccines.includes("Covid 19 3rd dose - Moderna")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 3rd dose - Moderna</label><br></br>
                       
                      
                        <input className="form-check-input" type="checkbox" id="vaccine5" value="Influenza - Dose 1" checked={vaccines.includes("Influenza - Dose 1")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 1</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine6" value="Influenza - Dose 2" checked={vaccines.includes("Influenza - Dose 2")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Influenza - Dose 2</label><br></br>
                        
                        {/* Add other vaccines for age group 13to18 */}
                      </>
                    )}
                    {agegroup === "19above" && (
                      <>
                        <input className="form-check-input" type="checkbox" id="vaccine14" value="Hepatitis A" checked={vaccines.includes("Hepatitis A")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Hepatitis A</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine15" value="Hepatitis B" checked={vaccines.includes("Hepatitis B")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Hepatitis B</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine16" value="Meningococcal B" checked={vaccines.includes("Meningococcal B")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Meningococcal B</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine17" value="Hib" checked={vaccines.includes("Hib")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Hib</label><br></br>

                      <label className="form-check-label" htmlFor="vaccine1">Covid 19 </label><br></br>
                        <input className="form-check-input" type="checkbox" id="vaccine1" value="Covid 19 1st dose - Astrazeneca" checked={vaccines.includes("Covid 19 1st dose - Astrazeneca")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Covid 19 1st dose - Astrazeneca</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine2" value="Covid 19 1st dose - Sinopharm" checked={vaccines.includes("Covid 19 1st dose - Sinopharm")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 1st dose - Sinopharm</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine3" value="Covid 19 1st dose - Pfizer" checked={vaccines.includes("Covid 19 1st dose - Pfizer")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 1st dose - Pfizer</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine4" value="Covid 19 1st dose - Moderna" checked={vaccines.includes("Covid 19 1st dose - Moderna")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 1st dose - Moderna</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine7" value="Covid 19 2nd dose - Astrazeneca" checked={vaccines.includes("Covid 19 2nd dose - Astrazeneca")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Covid 19 2nd dose - Astrazeneca</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine8" value="Covid 19 2nd dose - Sinopharm" checked={vaccines.includes("Covid 19 2nd dose - Sinopharm")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 2nd dose - Sinopharm</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine8" value="Covid 19 2nd dose - Pfizer" checked={vaccines.includes("Covid 19 2nd dose - Pfizer")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 2nd dose - Pfizer</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine9" value="Covid 19 2nd dose - Moderna" checked={vaccines.includes("Covid 19 2nd dose - Moderna")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 2nd dose - Moderna</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine10" value="Covid 19 3rd dose - Astrazeneca" checked={vaccines.includes("Covid 19 3rd dose - Astrazeneca")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Covid 19 3rd dose - Astrazeneca</label><br></br>
                     
                        <input className="form-check-input" type="checkbox" id="vaccine11" value="Covid 19 3rd dose - Sinopharm" checked={vaccines.includes("Covid 19 3rd dose - Sinopharm")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 3rd dose - Sinopharm</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine12" value="Covid 19 3rd dose - Pfizer" checked={vaccines.includes("Covid 19 3rd dose - Pfizer")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 3rd dose - Pfizer</label><br></br>
                      
                        <input className="form-check-input" type="checkbox" id="vaccine13" value="Covid 19 3rd dose - Moderna" checked={vaccines.includes("Covid 19 3rd dose - Moderna")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine2">Covid 19 3rd dose - Moderna</label><br></br>

                        <input className="form-check-input" type="checkbox" id="vaccine18" value="MMR" checked={vaccines.includes("MMR")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">MMR</label><br></br>
                        <input className="form-check-input" type="checkbox" id="vaccine19" value="Chickenpox" checked={vaccines.includes("Chickenpox")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">Chickenpox</label><br></br>
                        <input className="form-check-input" type="checkbox" id="vaccine20" value="HPV" checked={vaccines.includes("HPV")} onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="vaccine1">HPV</label><br></br>
                       
                        {/* Add other vaccines for age group 19above */}
                      </>
                    )}
                  </ul>
                </div>
              )}


           
          </div>
         
        </div>

        <div className="form-group mb-4">
          <button type="submit" className="btn btn-primary">Update Vaccine</button>
          {/* <button type="button" onClick={onDeleteClick} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete Vaccine</button> */}
        </div>
        
      </form>

      <div className="modal fade" tabIndex="-1" role="dialog" id="deleteModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Deletion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete the couple record for {name}?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}
