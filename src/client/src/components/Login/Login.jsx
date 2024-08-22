import React from "react";
import "./Login.css"


export default function Login() {
    return (
        <div className="bg-container d-flex justify-content-center align-items-center">

            <div className="card lgcard rounded-0">
                <div className="card-body">

                    <div className="heading">
                        <p className="h4 my-3" style={{ textAlign: "center" }}>Welcome to SAC Portal</p>
                    </div>

                    <div className="card mb-3 border-0 my-5" style={{ maxwidth: "540px" }}>
                        <div className="row g-0 no-gutters d-flex align-items-center justify-content-center gap-5">

                            <div className="col-md-4" style={{width:'15rem'}}>
                                <img src="iitlogo.jpg" className="img-fluid rounded-start" alt="..."/>
                            </div>

                            <div className="col-md-4 p-0" style={{width:'18rem'}}>
                                <div className="card-body d-flex justify-content-center align-items-center flex-column" style={{ padding: "0" }}>

                                    <h5 className="card-title heading_1" style={{ textAlign: "center" }}>Sign in into your SAC Account</h5>

                                    <button type="button" class="btn btn-outline-primary my-4 p-1 pe-3">
                                        <img src="google_2.png" className="img-fluid rounded-start me-3" alt="..." style={{ maxWidth: '80%', height: 'auto' }} />
                                        Sign in with Google
                                    </button>
                                    
                                    <button type="button" class="btn btn-outline-primary p-1 my-3 pe-3">
                                        <img src="user.png" className="img-fluid rounded-start me-3" alt="..." style={{ maxWidth: '80%', height: 'auto' }} />
                                        Continue as a Guest
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}