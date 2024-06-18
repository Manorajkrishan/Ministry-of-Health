import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

function Allbabies() {
  const [babydetails, setBaby] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    function getBaby() {
      axios.get('http://localhost:8090/babydetails/')
        .then((res) => {
          console.log(res);
          setBaby(res.data);
        })
        .catch((err) => {
          console.error(err);
          alert(err.message);
        });
    }
    getBaby();
  }, []);

  // Function to handle deletion of a staff member
  const onDeleteClick = async (userId) => {
    try {
      await axios.delete(`http://localhost:8090/babydetails/deletebaby/${userId}`);
      alert("Baby deleted");
      window.location.href = "/allbaby";
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  const handleSearch = () => {
    const filteredBabies = babydetails.filter(baby =>
      baby.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBaby(filteredBabies);
    setNoResults(filteredBabies.length === 0);
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="d-flex">
          <div className="input-group me-2">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="form-control"
              name="search"
              placeholder="Search Baby's Name"
            />
            <button onClick={handleSearch} className="btn btn-outline-secondary" type="button">Search</button>
          </div>
          <div className="btn-group">
            <a href="/addbaby" className="btn btn-sm btn-outline-secondary">+ New Baby</a>
          </div>
        </div>
      </div>

      <div className="AllTable table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Weight</th>
              <th scope="col">Height</th>
              <th scope="col">Blood Type</th>
              <th scope="col">Allergies</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col" className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {babydetails.map((babydetail, index) => ( // Changed babydetails to babydetail
              <React.Fragment key={index}>
                <tr>
                  <td>{babydetail.Name}</td>
                  <td>{babydetail.Gender}</td>
                  <td>{babydetail.Weight}</td>
                  <td>{babydetail.Height}</td>
                  <td>{babydetail.BloodType}</td>
                  <td>{babydetail.Allergies}</td>
                  <td>{babydetail.date}</td>
                  <td>{babydetail.phone}</td>
                  <td>{babydetail.Email}</td>
                  <td>{babydetail.Address}</td>
                  <td className="text-end">
                    <div className="d-flex flex-row justify-content-end gap-2">
                      <a href={`/viewbaby/${babydetail._id}`} className="btn btn-primary btn-small" alt="View">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href={`/editbaby/${babydetail._id}`} className="btn btn-warning btn-small">
                        <i className="bi bi-pencil"></i>
                      </a>
                      <form className="position-relative">
                        <button onClick={() => onDeleteClick(babydetail._id)} type="button" className="btn btn-danger btn-small">
                          <i className="bi bi-person-x"></i>
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allbabies;
