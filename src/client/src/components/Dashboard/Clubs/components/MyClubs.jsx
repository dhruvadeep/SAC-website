export default function MyClubs(props) {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "13rem",
          height:"13rem",
          marginRight: "1rem",
          marginTop:"1rem"
        }}
      >
        <button style={{border:"none"}} onClick={()=>{props.onclick(props.name)}}>

        <img
          src={props.image}
          className="card-img-top"
          alt="My Image"
          style={{ objectFit: "cover" }}
          />
        </button>

      </div>
    </div>
  );
}
