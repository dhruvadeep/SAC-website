import React , {useState , useEffect} from "react";
import "./styles.css";
import ClubPage from "./components/ClubPage";
import axios from 'axios'
import ClubList from "./components/ClubList";

const Clubs = () => {
  const [activeclub , setactiveclub] = useState(false);
  const [clubname,setclubname] = useState("");
  const onclicking = (element)=>{
    setclubname(element);
    setactiveclub(true);
  }
  const [clubdetails,setclubdetails] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/clubs')
    .then((response)=>{
      setclubdetails(response.data)
    }
    )
    .catch((error)=>{
      console.log(error)
    }
    )
  })
  return (
    <>
    {!activeclub && <ClubList onclick = {onclicking}/>}
    {activeclub &&  clubdetails.map(item=>{
          if (item.name===clubname){
            return <ClubPage setactiveclub={setactiveclub} name= {item.name} description = {item.description} ClubHeads = {item.ClubHeads} ClubLeads = {item.ClubLeads} Clubemail={item.Clubemail} ContactNo={item.ContactNo} Joined={item.Joined} image={item.image}/>
          }
        })}
    </>
  );
};

export default Clubs;
