import React from "react";
import Henry from "../asset/Henry.jpeg";
import "../ css/Hero.css";
import People from "../asset/People";
const Hero = () => {
  return (
    <div className='img-container'>
      <img src={Henry} alt='hero' className='hero-img' />
      <h1 class='hero-txt'>Henry VIII and Six Wives</h1>
    </div>
  );
};

export default Hero;
