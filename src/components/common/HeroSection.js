import React from "react";
import classicSuitImage from "../../assets/images/classicSuit.jpg";
import symbioteSuitImage from "../../assets/images/symbioteSuit.jpg";
import "../../styles/HeroSection.css"; // Path to your CSS file
function HeroSection({ theme }) {
  const imageUrl =
    theme === "light"
      ? classicSuitImage // Replace with your light theme image path
      : symbioteSuitImage; // Replace with your dark theme image path

  return (
    <div
      className={`hero-section ${theme}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Content of your hero section */}
    </div>
  );
}

export default HeroSection;
