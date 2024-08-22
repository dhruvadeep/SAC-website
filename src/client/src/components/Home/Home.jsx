import React from "react";
import CalAnce from "./CalAnce/CalAnce";
import AboutUs from "./Aboutus/AboutUs";
import Councils from "./Councils/Councils";
import Footer from "./Footer/Footer";
import "./home.css";
import Nav from "./Navbar/Nav";

const Home = () => {
  return (
    <div className="home" style={{ overflowY: "scroll", zIndex: "1" }}>
      <Nav/>
      <CalAnce />
      <AboutUs />
      <Councils />
      <Footer />
    </div>
  );
};

export default Home;
