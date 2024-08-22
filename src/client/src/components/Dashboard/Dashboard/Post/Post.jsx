import React from 'react'

export default function Post(props) {
  return (
    <>
    <div className="card d-flex flex-row my-1" style={{width: "40rem" , border:'none'}}>
        <div >
            {/* <img src={props.img} className="card-img-top" style={{height:"4rem"}} alt="..."/> */}
            <div class="card" style={{width: "4rem" , height: "4rem" , backgroundColor : "rgb(243 130 33)"}}>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text">{props.heading}</p>
        </div>
        <div className="my-3" style={{color:"#ced4da"}}>{props.time}</div>
    </div>
    <hr></hr>
    </>
  )
}
