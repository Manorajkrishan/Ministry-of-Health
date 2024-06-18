import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

function Allmothers() {
  const [motherdetails, setMother] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getMother();
  }, []);

  const getMother = async () => {
    try {
      const response = await axios.get('http://localhost:8090/motherdetails/');
      setMother(response.data);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Function to handle deletion of a mother
  const onDeleteClick = async (userId) => {
    try {
      await axios.delete(`http://localhost:8090/motherdetails/deletemother/${userId}`);
      alert('Mother Deleted Successfully');
      window.location.href = "/allmother";
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Function to handle search input change
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    try {
      const response = await axios.post('http://localhost:8090/motherdetails/search', { searchTerm: value });
      setFilteredData(response.data.existingPosts);
    } catch (error) {
      console.error('Error searching mothers:', error);
      alert('Error searching mothers');
    }
  };

  const mothersToDisplay = filteredData.length > 0 ? filteredData : motherdetails;

  return (
    <div>
      <div>
        <Header/>
        <Sidebar/>
      </div>
      <div className='AllTable'>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard - Pregnant Mother Management</h1>
        <div>
          <input 
            type="text"
            name="searchQuery" 
            className="form-control form-control-dark w-100 rounded-0" 
            placeholder="Enter Name..." 
            aria-label="Enter Name"
            value={searchTerm} 
            onChange={handleSearchChange} 
            style={{ border: '1px solid #ced4da', marginRight: '10px' }}
          />
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <a href="/addmother" className="btn btn-sm btn-outline-secondary">+ New Mother</a>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Pregnant Months</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
              <th scope="col">Last Consult</th>
              <th scope="col">Next Consult</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Proof pic</th> */}
              <th scope="col" className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
  {mothersToDisplay.map((mother, index) => (
    <tr key={index}>
      <td>{(index + 1).toString().padStart(4, '0')}</td>
      <td>{mother.name}</td>
      <td>{new Date(mother.dob).toLocaleDateString()}</td>
      <td>{mother.age}</td>
      <td>{mother.bloodgroup}</td>
      <td>{mother.pregnantmonthcount}</td>
      <td>{mother.contact}</td>
      <td>{mother.address}</td>
      <td>{new Date(mother.lastconsult).toLocaleDateString()}</td>
      <td>{new Date(mother.nextconsult).toLocaleDateString()}</td>
      <td>{mother.email}</td>
      <td>{mother.status}</td>
      {/* <td>
        <img src={`http://localhost:8090/uploads/${mother.proofpic}.jpg`} alt="NIC" style={{ maxWidth: '100px' }} />
      </td> */}
      <td className="text-end">
        <div className="d-flex flex-row justify-content-end gap-2">
          <a href={`/viewmother/${mother._id}`} className="btn btn-primary btn-small" alt="View">
            <i className="bi bi-eye"></i>
          </a>
          <a href={`/editmother/${mother._id}`} className="btn btn-warning btn-small">
            <i className="bi bi-pencil"></i>
          </a>
          <button onClick={() => onDeleteClick(mother._id)} className="btn btn-danger btn-small">
            <i className="bi bi-person-x"></i>
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
      </div>
    </div>
  );
}

export default Allmothers;
