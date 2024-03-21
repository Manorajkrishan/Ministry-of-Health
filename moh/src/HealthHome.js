import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddRecords from './AddRecords';


const HealthHome = () => {
    const initialData = [
        { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' }
      ];
    
      const [data, setData] = useState(initialData);
    
      const handleDelete = id => {
        setData(data.filter(item => item.id !== id));
      };
    
      return (
        <div className="container-fluid">
          <div className="row">
            
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <button> <Link to={"/AddRecords"} >Add new Records</Link></button>
              <h2>Student Health Management</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.email}</td>
                      <td>
                       <Link to={"/view"}> <button className="btn btn-primary" onClick={() => console.log(`View: ${item.id}`)}>View</button></Link>
                       <Link to={"/update"}> <button className="btn btn-secondary" onClick={() => console.log(`Update: ${item.id}`)}>Update</button></Link>
                        <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </main>
          </div>
        </div>
        )
}

export default HealthHome





