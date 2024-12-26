import React from 'react'

export default function Clubcard(props) {
  return (
      <div style={{width:"13rem" , marginRight:"1rem"}}>
      <div
        className="card"
        style={{
          width: "13rem",
          height:"13rem",
          marginRight: "1rem",
          marginTop:"1rem"
        }}
      >
        <button style={{border:"none"}} onClick={()=>{props.onclick(props.obj.name)}}>

        <img
          src={props.obj.image}
          className="card-img-top"
          alt="My Image"
          style={{ objectFit: "cover" }}
          />
        </button>

      </div>
    </div>
  )
}
