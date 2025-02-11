import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/shovel.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="background-overlay"></div> {/* Overlay addition */}
      <div className="headerContainer">
        <h1> Country Farm Supply </h1>
        <p> Everything You Need to Grow </p>
      </div>
    </div>
  );
}

export default Home;
