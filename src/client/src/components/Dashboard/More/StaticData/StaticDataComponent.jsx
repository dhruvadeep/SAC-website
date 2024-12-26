import React from 'react';

export default function StaticDataComponent(props) {
  return (
    <div className="container mt-5" >
      <div className="card lgcard border-0" style={{ borderColor: 'rgb(250, 199, 170)' }}>
        <div className="row" style={{ marginLeft: '25px', backgroundColor: '#ffffff', border: '40px solid rgb(250, 199, 170)', display: 'flex', alignItems: 'stretch', height: '220px', width: '700px' }}>
          <div className="container d-flex flex-row my-3">
            <div className="container d-flex flex-column" style={{ paddingTop: '1rem' }}>
              <div className="clubName container d-flex align-items-center m-0 gap-5" style={{ position: 'absolute', top: '0px', left: '60px', padding: '0.5rem' }}>
                <p><strong>{props.heading}</strong></p>
              </div>
              <div className="container m-0">
                <a href={props.link} target="_blank" rel="noopener noreferrer"></a><a href={props.link} target="_blank" rel="noopener noreferrer">{props.overview}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





// import React from 'react';


// function StaticDataComponent(props) {

//   const containerStyle = {
//     margin: '5px auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     overflowY: 'auto',
//     scrollSnapType: 'y mandatory',
//     padding: '10px',
//     gap: '10px',
//     scrollPadding: '10px',
//     width: '1000px',
//     height: '600px',
//     backgroundColor: 'white',
//     border: '2px solid coral',
//     alignItems: 'flex-start'
//   };

//   const itemStyle = {
//     scrollSnapAlign: 'center',
//     flex: '0 0 60%',
//     height: '500px',
//     width: '900px',
//     marginBottom: '20px',
//     minHeight: '500px',
//     background: 'linear-gradient(120deg, coral 30%, rgb(255, 187, 163) 88%, rgb(255, 185, 160) 40%, coral 48%)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'bisque',
//     textAlign: 'center',
//     fontSize: '1.3rem',
//     lineHeight: '1.3em',
//     fontWeight: '400',
//     fontFamily: 'sans-serif',
//     borderRadius: '.2rem'
//   };

//   return (
//     <div>
//       <h2>{props.heading}</h2>

//       <div style={containerStyle}>
      
//         <div className="item" style={itemStyle}>PAGE 1 </div>
//         <div className="item" style={itemStyle}>PAGE 2 
//         <a href={props.link}>pdf </a>
//         <br/>
//         <p>
//           {props.overview}
//         </p>
//         </div>
//         <div className="item" style={itemStyle}>PAGE 3 </div>

//       </div>
//     </div>
//   );
// }

// export default StaticDataComponent;

