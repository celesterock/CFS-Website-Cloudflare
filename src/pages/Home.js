import React from 'react';
import BannerImage from '../assets/shovel.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="background-overlay"></div> {/* Overlay addition */}
      <div className="headerContainer">
        <h1> Country Farm Supply </h1>
        <p>  Gardening & Agricultural Products </p>
      </div>
    </div>
  );
}

export default Home;
