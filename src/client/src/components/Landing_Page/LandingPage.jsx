import React from 'react'
import "./LandingPage.css"
export default function LandingPage() {
  return (
    <div className='landingpage'>
      <div className="image">
        <img src='./SAClogo.png' alt='No image found' id='lpimage'/>
      </div>
      <div className='par d-flex align-items-center justify-content-center' style={{width:'100vw'}}>
        <div className="spinner-border text-warning" style={{
          width : "4rem" ,
          height : "4rem",
          position : "absolute",
          top : "80vh",
        }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}
