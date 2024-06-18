import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddFactory.css';
import HeaderPHI from '../../DiseaseManagement/Header/Header';
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav';

function AddFactory() {
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
    const [foodpreperation, setFoodpreperation] = useState("");
    const [foodstorage, setFoodstorage] = useState("");

    async function sendData(e) {
        e.preventDefault();

        const newFactory = {
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
            foodpreperation,
            foodstorage
        };

        try {
            await axios.post("http://localhost:8090/factory/add", newFactory);
            alert("Factory added successfully");
            window.location.replace("/factory/display");
        } catch (error) {
            alert("Failed to add factory. Please try again later.");
            console.error("Error:", error);
        }
    }

    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div className="whole-page" style={{ marginLeft: "300px" }}>
                <h1>Hotel Management</h1>
                <div className="addF-container">
                    <form onSubmit={sendData}>
                        <div className="row form-group mb-4">
                            <div className="col">
                                <label htmlFor="hotelname">Hotel Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hotelname"
                                    name="hotelname"
                                    placeholder="Hotel Name"
                                    value={hotelname}
                                    onChange={(e) => setHotelname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="ownername">Owner Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ownername"
                                    name="ownername"
                                    placeholder="Owner Name"
                                    value={ownername}
                                    onChange={(e) => setOwnername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="hoteladdress">Hotel Address:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hoteladdress"
                                    name="hoteladdress"
                                    placeholder="Hotel Address"
                                    value={hoteladdress}
                                    onChange={(e) => setHoteladdress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="owneraddress">Owner Address:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="owneraddress"
                                    name="owneraddress"
                                    placeholder="Owner Address"
                                    value={owneraddress}
                                    onChange={(e) => setOwneraddress(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row form-group mb-4">
                            <div className="col">
                                <label htmlFor="number">Contact Number:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="number"
                                    name="number"
                                    maxLength={10}
                                    minLength={10}
                                    pattern="\d{10}"
                                    title="Please enter a 10-digit number"
                                    placeholder="Contact Number"
                                    value={number}
                                    onChange={(e) => {
                                        const inputVal = e.target.value;
                                        if (/^\d{0,10}$/.test(inputVal)) {
                                            setNumber(inputVal);
                                        }
                                    }}
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="nic">NIC:</label>
                                <input
                                    type="text"
                                    pattern="\d{0,12}"
                                    className="form-control"
                                    id="nic"
                                    name="nic"
                                    placeholder="NIC"
                                    value={nic}
                                    onChange={(e) => setNic(e.target.value.replace(/\D/,''))}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row form-group mb-4">
                            <div className="col">
                                <label htmlFor="hotelnumber">Hotel Number:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hotelnumber"
                                    name="hotelnumber"
                                    placeholder="Hotel Number"
                                    value={hotelnumber}
                                    onChange={(e) => {
                                        const inputVal = e.target.value;
                                        if (/^\d{0,10}$/.test(inputVal)) {
                                            setHotelnumber(inputVal);
                                        }
                                    }}
                                    pattern="\d{0,10}" // This pattern allows only digits and limits the input to 10 characters
                                    title="Please enter numbers only and maximum length of 10 characters"
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="workers">Number of Workers:</label>
                                <input
                                    type="number" 
                                    className="form-control"
                                    id="workers"
                                    name="workers"
                                    placeholder="Number of Workers"
                                    value={workers}
                                    onChange={(e) => setWorkers(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row form-group mb-4">
                            <div className="col">
                                <label htmlFor="wastemanagement">Description about Waste Management:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="wastemanagement"
                                    name="wastemanagement"
                                    placeholder="Waste Disposal Methods"
                                    value={wastemanagement}
                                    onChange={(e) => setWastemanagement(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row form-group mb-4">
                            <div className="col">
                                <label htmlFor="sanitary">Description about sanitary facilities:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="sanitary"
                                    name="sanitary"
                                    placeholder="sanitary facilities"
                                    value={sanitary}
                                    onChange={(e) => setSanitary(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row form-group mb-4">
                            <div className="col">
                                <label htmlFor="foodpreperation">Description about food preparation methods:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="foodpreperation"
                                    name="foodpreperation"
                                    placeholder="Food Preparation Methods"
                                    value={foodpreperation}
                                    onChange={(e) => setFoodpreperation(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row form-group mb-4">
                            <div className="col">
                                <label htmlFor="foodstorage">Description about food storage methods:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="foodstorage"
                                    name="foodstorage"
                                    placeholder="Food Storage Methods"
                                    value={foodstorage}
                                    onChange={(e) => setFoodstorage(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                       
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddFactory;
