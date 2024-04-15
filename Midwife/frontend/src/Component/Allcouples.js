import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from './Header';
import Sidebar from './Sidebar';
import "./main.css";
function Allcouples() {
  const [coupledetails, setCouple] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getCoupleDetails();
  }, []);

  // Function to fetch couple details
  const getCoupleDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8090/coupledetails/');
      setCouple(response.data);
    } catch (error) {
      console.error('Error fetching couple details:', error);
      alert('Error fetching couple details');
    }
  };

  // Function to handle deletion of a couple
  const onDeleteClick = async (userId) => {
    try {
      await axios.delete(`http://localhost:8090/coupledetails/deletecouple/${userId}`);
      alert('Couple Deleted Successfully');
      window.location.href = "/allcouple";
    } catch (error) {
      console.error('Error deleting couple:', error);
      alert('Error deleting couple');
    }
  };

  // Function to handle search input change
  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    try {
      const response = await axios.post('http://localhost:8090/coupledetails/search', { searchTerm: e.target.value });
      setFilteredData(response.data.existingPosts);
    } catch (error) {
      console.error('Error searching couples:', error);
      alert('Error searching couples');
    }
  };

  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div className='AllTable'>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard-Newly Married Couple Management</h1>
            <div>
              <input 
                type="text"
                name="searchQuery" 
                className="form-control form-control-dark w-100 rounded-0" 
                placeholder="Enter NIC..." 
                aria-label="Enter NIC"
                value={searchTerm} 
                onChange={handleSearchChange} 
                style={{ border: '1px solid #ced4da', marginRight: '10px' }}
              />
            </div>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2" style={{ margin: '10px' }}>
                <a href="/addcouple" className="btn btn-sm btn-outline-secondary">+ New Couple</a>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Wife's Name</th>
                  <th scope="col">Wife's NIC</th>
                  <th scope="col">Husband's Name</th>
                  <th scope="col">Husband's NIC</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Family Plan</th>
                  <th scope="col" className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((couple, index) => (
                    <tr key={index}>
                      <td>{(index + 1).toString().padStart(4, '0')}</td>
                      <td>{couple.wifeName}</td>
                      <td>{couple.wifeNic}</td>
                      <td>{couple.husbandName}</td>
                      <td>{couple.husbandNic}</td>
                      <td>{couple.tel}</td>
                      <td>{couple.email}</td>
                      <td>{couple.address}</td>
                      <td>{couple.familyPlan}</td>
                      <td className="text-end">
                        <div className="d-flex flex-row justify-content-end gap-2">
                          <a href={`/viewcouple/${couple._id}`} className="btn btn-primary btn-small" alt="View">
                            <i className="bi bi-eye"></i>
                          </a>
                          <a href={`/editcouple/${couple._id}`} className="btn btn-warning btn-small">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <form className="position-relative">
                            <button onClick={() => onDeleteClick(couple._id)} type="button" className="btn btn-danger btn-small">
                              <i className="bi bi-person-x"></i>
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  coupledetails.map((couple, index) => (
                    <tr key={index}>
                      <td>{(index + 1).toString().padStart(4, '0')}</td>
                      <td>{couple.wifeName}</td>
                      <td>{couple.wifeNic}</td>
                      <td>{couple.husbandName}</td>
                      <td>{couple.husbandNic}</td>
                      <td>{couple.tel}</td>
                      <td>{couple.email}</td>
                      <td>{couple.address}</td>
                      <td>{couple.familyPlan}</td>
                      <td className="text-end">
                        <div className="d-flex flex-row justify-content-end gap-2">
                          <a href={`/viewcouple/${couple._id}`} className="btn btn-primary btn-small" alt="View">
                            <i className="bi bi-eye"></i>
                          </a>
                          <a href={`/editcouple/${couple._id}`} className="btn btn-warning btn-small">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <form className="position-relative">
                            <button onClick={() => onDeleteClick(couple._id)} type="button" className="btn btn-danger btn-small">
                              <i className="bi bi-person-x"></i>
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allcouples;
