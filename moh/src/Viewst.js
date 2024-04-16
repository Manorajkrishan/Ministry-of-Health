import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
export default function View() {

    const [getstud, SetGetstud] = useState([]);

    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5000/getstud/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        
        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            SetGetstud(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    return (
      <div className="container mt-5">
      <div className="row justify-content-end">
          <div className="col-md-6">
              {/* Main content */}
              <h4>All Student Information</h4>
              <div className='underline'></div>
              <ul className="list-group mt-4">
                  <li className="list-group-item active" aria-current="true">All Information About</li>
                  <li className="list-group-item">Student Name: {getstud.name}</li>
                  <li className="list-group-item">Student Address: {getstud.address}</li>
                  <li className="list-group-item">Parent name: {getstud.parent}</li>
                  <li className="list-group-item">Student Mobile: {getstud.contact}</li>
                  <li className="list-group-item">Student Health issue: {getstud.health}</li>
              </ul>
              <Link className='btn btn-primary mt-5' to="/HealthHome">Back</Link>
          </div>
      </div>
  </div>
  
    )
}