import React from 'react'
import { FaPlus } from "react-icons/fa";
export default function OpportunityCard(props) {
  return (
    <>
    <div className="card mt-2" style={{border:"none"}}>
        <div className="card lgcard border-0 w-200 mb-3" style={{width:"43rem"}}>
            <div className="row" style={{ backgroundColor: 'rgb(250 199 170)' }}>
                <div className="col-md-8 border-primary" >
                    <div className="container d-flex flex-row my-3">
                        <div className='logo mt-3'>
                            <img src="https://imgs.search.brave.com/UWcdz0qOM8w4GiYkAf4whayq8imfZEFa_sqmPBXgUww/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA" className="rounded-circle" alt="..." style={{ width: '3.5rem', height: '3.5rem' }} />
                        </div>
                        <div className="container d-flex flex-column" style={{ paddingTop: '1rem' }}>
                            <div className='clubName container d-flex align-items-center m-0 gap-3' >
                                <div><strong>{props.clubName}</strong></div>
                                <div>{props.time}</div>
                                <div className='' style={{backgroundColor:(props.status === "Ongoing") ? "rgb(0,160,45)" :  "black" ,color:"white" , width:"5rem", textAlign:"center" , borderRadius:"5px"}}>{props.status}</div>
                            </div>
                            <div className="container mt-3" >
                                <h5 className="card-title">{props.eventTitle}</h5>
                                <div className="card-text">
                                    {props.content}
                                </div>
                            </div>
                            <div className='container mt-3 d-flex flex-row'>
                              <div className='mx-3' style={{backgroundColor:"white" , width:"5rem" , textAlign:"center"}}>{props.Skill1}</div>
                              <div className='mx-3' style={{backgroundColor:"white" , width:"5rem" , textAlign:"center"}}>{props.Skill2}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: 'rgb(250 199 170)' , fontSize:"1.2rem"}}>
                        <div>Members : 8/10</div>
                        <div className='my-3' style={{fontSize:"1.5rem"}}>
                        <button disabled={props.status==="Completed"} type="button" className="btn" style={{backgroundColor: (props.status==="Ongoing") ?  "white" : "rgb(94,96,96)" , color:(props.status==="Ongoing") ? "rgb(243 130 33)" : "rgb(130 , 130 , 130)"}}>
                            <FaPlus /> JOIN
                        </button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</>

  )
}
