import React , {useState , useEffect} from "react";
import LayoutLeft from "../../Layout/LayoutLeft/LayoutLeft";
import LayoutRight from "../../Layout/LayoutRight/LayoutRight";
import MyClubs from "./MyClubs";
import axios from 'axios'

const ClubList = (props) => {
  const [nodisplay , setnodisplay] = useState(false);
  const [clubdetails,setclubdetails] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/clubs')
    .then((response)=>{
      setclubdetails(response.data)
    }
    )
    .catch((error)=>{
      setnodisplay(true);
    }
    )
  })
  return (
    <>
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
          </h1>
        </div>
        <div>
        <div id="Clubs" className="clubs my-5" >
          <div className="container" >
            <h3>My Clubs</h3>
          </div>
            <div className="d-flex flex-row card-group">
              {clubdetails.map((items,index)=>{
                if (items.Joined==="yes"){
                  return  <MyClubs key={index} image={items.image} name={items.name} onclick={props.onclick}/>
                }
              })}
            </div>
              {
                nodisplay && <div style={{fontSize:"1.3rem",marginLeft:"1rem",marginBottom:"1rem"}}> No Clubs Joined </div>
                }
        </div>

        <div id="Clubs" className="clubs">
          {/* button at start and other at end side */}
          <div className="container d-flex justify-content-between" >
            <h3>Other Clubs</h3>
            <button type="button"  className="btn btn-primary" style={{backgroundColor: 'rgb(243 130 33) ' , borderStyle:'none' , color:"white" ,width:"5rem", float:'right' ,marginRight:"2rem"}}>View All</button>
          </div>
          <div className="d-flex flex-row card-group">
              {clubdetails.map((items,index)=>{
                if (items.Joined==="no"){
                  return  <MyClubs key={index} image={items.image} name={items.name} onclick={props.onclick}/>
                }
              })}
            </div>
        </div>
        </div>
      </div>
      </div>
      <div style={{ width: "20rem" }}>
        <LayoutRight />
      </div>
    </div>
    </>
  );
};

export default ClubList;
