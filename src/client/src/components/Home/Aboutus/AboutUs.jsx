// import React from "react";
// import "./AboutUs.css";

// const AboutUs = () => {
//   return (
//     <div id='homeAbout' className="container abtus d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
//       <h1 className="abtTit position-relative d-inline-block pb-4">About Us</h1>
//       <div className="abtDat d-flex flex-column justify-content-center align-items-center row">
//         <p className="abtPara col-8 my-4">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
//           corporis, ipsa, nihil quibusdam aperiam consequuntur enim labore aut
//           veniam excepturi natus magni maxime rerum ab. Laborum delectus soluta
//           corrupti officiis!
//         </p>
        
//         <div className="abtimg">
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;






import React, { useState, useEffect } from "react";
import "./AboutUs.css";


const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust 3 if you have more images
    }, 4000); // Change slide every 4 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Adjust 3 if you have more images
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust 3 if you have more images
  };

  return (
    <div id="homeAbout" className="container abtus d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
      <h1 className="abtTit position-relative d-inline-block pb-4">About Us</h1>
      <div className="abtDat d-flex flex-column justify-content-center align-items-center row">
        <p className="abtPara col-8 my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel corporis, ipsa, nihil quibusdam aperiam consequuntur enim labore aut veniam excepturi natus magni maxime rerum ab. Laborum delectus soluta corrupti officiis!
        </p>
        
        <div className="abtimg">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                <img src="Banner0.jpg" className="d-block w-100" alt="1" />
              </div>
              <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                <img src="Banner1.jpg" className="d-block w-100" alt="2" />
              </div>
              <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                <img src="Banner2.jpg" className="d-block w-100" alt="3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" onClick={handlePrev}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={handleNext}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
