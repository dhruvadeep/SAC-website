import React from 'react'
import LayoutLeft from "../../Layout/LayoutLeft/LayoutLeft";
import LayoutRight from "../../Layout/LayoutRight/LayoutRight";
import { Link } from 'react-router-dom'
import ForumDiscussion from './ForumDiscussion'

export default function ClubPage(props) {
  return (
    <div className="d-flex flex-row">
    <div style={{ width: "20rem" }}>
      <LayoutLeft ele="clubs" />
    </div>
    <div className="d-flex justify-content-center" style={{width:'calc(100% - 42rem)'}}>
    <div
      className="container"
      style={{ width: "46rem", margin: "3rem 1rem", textAlign: "justify"}}>
      <div className="container">
        <h1>Clubs
        <button style={{border:"none" , backgroundColor:"white"}} onClick={()=>{props.setactiveclub(false)}}>&lt;</button>
        </h1>
      </div>
      <div className="container">
      <div className="card-title my-4" style={{fontSize:"2rem"}}>{props.name}</div>
      <div className="card my-3" style={{border:"none"}}>
        <div className='card d-flex flex-row my-2' style={{border:"none"}}>
          <div className="card" style={{width: "12rem" , marginRight:"2rem" ,border:"none"}}>
            <img src={props.image} className="card-img-top" alt="..." style={{height:"12rem" , width:"12rem" , objectFit:"cover"}}/>
          </div>
          <div className="card" style={{width: "27rem" , padding:"1rem" , border:"none"}}>{props.description}</div>
        </div>
        <div className="card d-flex flex-row justify-content-center my-4" style={{border:"none", marginTop:"1rem"}}>
          <div className="card" style={{fontSize:"1.3rem" ,width:"18rem" , padding:"1rem" ,margin:"1rem",backgroundColor:"rgb(246,165,95)" , border:"none"}}>
            <ul>
              <li><b>Club Heads</b></li>
              <div style={{fontSize:"1rem"}}>
              {props.ClubHeads}
              </div>
              <li><b>Club Leads</b></li>
              <div style={{fontSize:"1rem"}}>
              {props.ClubLeads}
              </div>
            </ul>
          </div>
          <div className="card" style={{fontSize:"1.2rem" ,width:"18rem" , padding:"1rem" ,margin:"1rem", backgroundColor:"rgb(126,128,128)" , color:"white" , border:"none"}}>
          <ul>
              <li><b>Club Mail ID</b></li>
              <div style={{fontSize:"1rem"}}>
              {props.Clubemail}
              </div>
              <li><b>Head Contact Number</b></li>
              <div style={{fontSize:"1rem"}}>
              {props.ContactNo}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="card my-5" style={{border:"none" , borderRadius:"10px"}}>
          <div className='container my-3'>
              <h3 style={{display:"inline"}}>Forum Discussions</h3>
              <Link to="/announcements">
                  <button type="button"  className="btn btn-primary" style={{backgroundColor: 'rgb(243 130 33) ' , borderStyle:'none' , color:"white" , float:'right' }}>View All</button>
              </Link>
          </div>
          <ForumDiscussion img={props.image} heading="Disc1" time="2 days ago"/>
          <ForumDiscussion img={props.image} heading="Disc2" time="1 day ago"/>
          <ForumDiscussion img={props.image} heading="Disc3" time="3 days ago"/>
          <ForumDiscussion img={props.image} heading="Disc4" time="4 days ago"/>          
      </div>
      <div className='d-flex justify-content-center'>
        <button class="btn" type="button" onClick={()=>{alert("Request Sent")}} disabled={props.Joined==="yes"} style={{fontSize:"1.5rem" , borderRadius:"1rem" ,color:"black" ,backgroundColor: 'rgb(243 130 33)'}}>Request to Join</button>
      </div>
    </div>
    </div>
    </div>
    <div style={{ width: "20rem" }}>
      <LayoutRight />
    </div>
  </div>
  )
}
