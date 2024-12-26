import React from 'react'
import '../More/ProjectApproval/ProjectApprStyle.css'

export default function AnncmtComponent(props) {
    return (
        <>
            <div className="anncCont c container d-flex mt-5">
                <div className="cc card lgcard border-0 w-200 mb-3">
                    <div className="row" style={{ backgroundColor: 'rgb(250 199 170)' }}>
                        {/* First column (Announcement)*/}
                        <div className="col-md-8 border-primary" >
                            {/* <!-- Content for the first part of the card --> */}
                            <div className="container d-flex flex-row my-3">
                                {/* logo of club */}
                                <div className='logo'>
                                    <img src={props.logo_image} className="rounded-circle" alt="..." style={{ width: '3.5rem', height: '3.5rem' }} />
                                </div>
                                <div className="container d-flex flex-column" style={{paddingTop:'1rem'}}>
                                    {/* club name */}
                                    <div className='clubName container d-flex align-items-center m-0 gap-5' >
                                        <p style={{fontSize: '1rem'}}><strong>{props.clubName}</strong></p>
                                        <p style={{color:'rgb(104,104,104)', fontSize:'0.8rem'}}>{props.time}</p>
                                    </div>
                                    {/* content of announcement */}
                                    <div className="container m-0 p-0" >
                                        <h5 className="card-title">{props.eventTitle}</h5>
                                        <p className="card-text ">
                                            {props.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second column (POSTER)*/}
                        <div className="col-md-4">
                            <div className="card border-0 rounded-0 my-4"style={{height:'13rem', backgroundColor:'#CCCCFF'}}>
                                <div className="card-body d-flex justify-content-center align-items-center text-center">
                                    {/* content of poster */}
                                <p className="card-text">
                                        POSTER<br></br>
                                        (Optional)
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
