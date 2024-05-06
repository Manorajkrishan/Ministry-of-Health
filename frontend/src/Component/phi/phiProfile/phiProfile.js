import React from 'react'
import HeaderPHI from '../DiseaseManagement/Header/Header'
import DMsideNav from '../DiseaseManagement/DMNav/DMsideNav'
function phiProfile() {

    return (
        <>
            <HeaderPHI />
            <DMsideNav />
            <div className='phiprofile'>
                <h2> PHI profile</h2>
                <div>
                    <div>
                        <header className="bg-primary text-white text-center  py-2 mb-3">
                            <h1>User Profile</h1>
                            <p>PHI123 Profile</p>
                        </header>

                    </div>

                    <div
                        // key={user._id}
                        className="col-md-3 mb-3 container mt-5 d-flex justify-content-center align-items-center"
                    >
                        <div className="card">

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2 className="card-title">PHI123</h2>
                                    </div>

                                </div>
                                <p className="card-text">
                                    <strong>Phone:</strong> 123456789
                                </p>
                                <p className="card-text">
                                    <strong>Email:</strong>phi@123
                                </p>
                                <p className="card-text">
                                    <strong>Password:</strong>123456789
                                </p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <a className="btn btn-warning" href="/editprofile">
                                            Edit Account
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <button
                                            className="btn btn-danger"
                                        // onClick={() => handleDelete(user._id)}
                                        >
                                            Delete Account
                                        </button>

                                    </div>
                                    <div className="col-mr-6">
                                        <a href="https://www.facebook.com/your-facebook-account" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-success" style={{ marginTop: '20px' }}>
                                                Facebook account
                                            </button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default phiProfile