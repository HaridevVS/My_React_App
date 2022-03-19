import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpg";
import "../styles/Home.css";
function Home() {
  return (
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1>PIZZA CORNER</h1>
      <p>Pizza To Fit Any Taste</p>
      <Link to="/menu"/>
      <button>
        ORDER NOW
      </button>
      </div>
  </div>  
  );
}

export default Home;