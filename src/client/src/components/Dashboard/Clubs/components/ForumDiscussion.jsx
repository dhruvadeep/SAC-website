import React from 'react'

export default function ForumDiscussion(props) {
  return (
    <>
    <div className="card d-flex flex-row " style={{width: "44rem" , border:"none"}}>
        <div className="py-2" >
            <img src={props.img} className="rounded" style={{height:"4rem"}} alt="..."/>
            {/* <div class="card" style={{width: "4rem" , height: "4rem" , backgroundColor : "rgb(243 130 33)"}}> */}
            {/* </div> */}
        </div>
        <div className="card-body" >
            <b><p className="card-text m-0" style={{fontSize:"1.2rem"}}>{props.heading}</p></b>
            <p className="card-text m-0">by someone</p>
        </div>
        <div className="my-3" style={{color:"#ced4da"}}>{props.time}</div>
    </div>
    <hr className='my-2'></hr>
    </>
  )
}
