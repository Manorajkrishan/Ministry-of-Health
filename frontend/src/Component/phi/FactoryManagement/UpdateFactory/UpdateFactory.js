import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeaderPHI from '../../DiseaseManagement/Header/Header';
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav';

export default function UpdateFactory() {
  const [hotelname, setHotelname] = useState("");
  const [ownername, setOwnername] = useState("");
  const [hoteladdress, setHoteladdress] = useState("");
  const [owneraddress, setOwneraddress] = useState("");
  const [number, setNumber] = useState("");
  const [nic, setNic] = useState("");
  const [hotelnumber, setHotelnumber] = useState("");
  const [workers, setWorkers] = useState("");
  const [wastemanagement, setWastemanagement] = useState("");
  const [sanitary, setSanitary] = useState("");
  const [foodpreparation, setFoodpreparation] = useState("");
  const [foodstorage, setFoodstorage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8090/factory/get/${id}`)
      .then((res) => {
        const factory = res.data.factory;
        setHotelname(factory.hotelname);
        setOwnername(factory.ownername);
        setHoteladdress(factory.hoteladdress);
        setOwneraddress(factory.owneraddress);
        setNumber(factory.number);
        setNic(factory.nic);
        setHotelnumber(factory.hotelnumber);
        setWorkers(factory.workers);
        setWastemanagement(factory.wastemanagement);
        setSanitary(factory.sanitary);
        setFoodpreparation(factory.foodpreparation);
        setFoodstorage(factory.foodstorage);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFactoryData();
  };

  const updateFactoryData = () => {
    const updateFactory = {
      hotelname,
      ownername,
      hoteladdress,
      owneraddress,
      number,
      nic,
      hotelnumber,
      workers,
      wastemanagement,
      sanitary,
      foodpreparation,
      foodstorage
    };

    axios.put(`http://localhost:8090/factory/editfactory/${id}`, updateFactory)
      .then((res) => {
        alert("Updated");
        window.location.replace("/factory/display");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <HeaderPHI />
      <DMsideNav />
      <div style={{ marginLeft: "300px", backgroundColor:"#B2BEB5", minHeight: "100vh", padding: "20px" }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', paddingTop: '10px', paddingBottom: '20px', marginBottom: '20px', borderBottom: '2px solid #000' }}>
            <h1 style={{ fontSize: '24px', margin: '0' }}>Edit {ownername}</h1>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <button style={{ fontSize: '14px', padding: '5px 10px', border: '1px solid #000', marginRight: '10px' }}>?</button>
            </div>
          </div>

          <div style={{ paddingBottom: '20px', marginBottom: '20px', borderBottom: '2px solid #000' }}>
            <nav aria-label="breadcrumb">
              <ol style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '0', padding: '0' }}>
                <li style={{ fontSize: '34px', color: 'blue', marginRight: '10px' }}><a href="/display" style={{ color:'blue', textDecoration: 'none' }}>hotel and factory management</a></li>
                <li style={{ fontSize: '24px', color: 'green' }}>{ownername}</li>
              </ol>
            </nav>
            {/* <div style={{ fontSize: '14px', textAlign: 'end', fontWeight: 'lighter' }}>
              <b>UserId: {id}</b>
            </div> */}
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: 'blue', marginBottom: '10px' }}>Update Details</h3>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="hotelname"> Hotel Name</label>
                <input type="text" id="hotelname" name="hotelname" value={hotelname} onChange={(e) => setHotelname(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Hotel name" required />
              </div>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="ownername"> Owner  Name</label>
                <input type="text" id="ownername" name="ownername" value={ownername} onChange={(e) => setOwnername(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Hotel name" required />
              </div>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="hoteladdress">Hotel address</label>
                <input type="text" id="hoteladdress" name="hoteladdress" value={hoteladdress} onChange={(e) => setHoteladdress(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="NIC" required />
              </div>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="owneraddress">owner address</label>
                <input type="text" id="owneraddress" name="owneraddress" value={owneraddress} onChange={(e) => setOwneraddress(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="NIC" required />
              </div>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="nic">NIC</label>
                <input
                  type="text"
                  id="nic"
                  name="nic"
                  value={nic}
                  onChange={(e) => {
                    // Validate and update the state only if the input matches the pattern
                    if (/^\d{0,12}$/.test(e.target.value)) {
                      setNic(e.target.value);
                    }
                  }}
                  style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
                  placeholder="NIC"
                  
                   // This pattern allows only digits and limits the input to 12 characters
                  title="Please enter numbers only and maximum length of 12 characters"
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="hotelnumber">Hotel contact  number</label>
                <input
                  type="text"
                  id="hotelnumber"
                  name="hotelnumber"
                  value={hotelnumber}
                  onChange={(e) => {
                    // Validate and update the state only if the input matches the pattern
                    if (/^\d{0,10}$/.test(e.target.value)) {
                      setHotelnumber(e.target.value);
                    }
                  }}
                  style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
                  placeholder="Owner Address"
                  pattern="\d{0,10}" // This pattern allows only digits and limits the input to 10 characters
                  title="Please enter numbers only and maximum length of 10 characters"
                  required
                />
              </div>

              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="workers">Number of Workers</label>
                <input
                  type="text"
                  id="workers"
                  name="workers"
                  value={workers}
                  onChange={(e) => {
                    // Allow only numeric values
                    const inputVal = e.target.value;
                    if (/^\d*$/.test(inputVal)) {
                      setWorkers(inputVal);
                    }
                  }}
                  style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
                  placeholder="Workers"
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="wastemanagement"> status of waste management</label>
                <input type="text" id="wastemanagement" name="wastemanagement" value={wastemanagement} onChange={(e) => setWastemanagement(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Hotel Address" required />
              </div>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="sanitary"> description about sanitary facilities</label>
                <input type="text" id="sanitary" name="sanitary" value={sanitary} onChange={(e) => setSanitary(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Hotel Address" required />
              </div>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="foodpreparation"> food preparation methods</label>
                <input type="text" id="foodpreparation" name="foodpreparation" value={foodpreparation} onChange={(e) => setFoodpreparation(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Hotel Address" required />
              </div>
              <div style={{ flex: '1 1 50%', marginRight: '10px' }}>
                <label htmlFor="foodstorage"> food storage methods</label>
                <input type="text" id="foodstorage" name="foodstorage" value={foodstorage} onChange={(e) => setFoodstorage(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Hotel Address" required />
              </div>
            </div>

            <hr style={{ borderTop: '5px solid black', fontWeight: 'bold' }} />

            <div style={{ marginBottom: '20px' }}>
              <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
