import React from "react";
import classicSuitImage from "../../assets/images/classicSuit.jpg";
import symbioteSuitImage from "../../assets/images/symbioteSuit.jpg";
import "../../styles/HeroSection.css"; 
function HeroSection({ theme }) {
  const imageUrl =
    theme === "light"
      ? classicSuitImage 
      : symbioteSuitImage; 
  return (
    <div
      className={`hero-section ${theme}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
    {/* <p>Welcome to the Spider-Verse!</p> */}
    </div>
  );
}

export default HeroSection;
