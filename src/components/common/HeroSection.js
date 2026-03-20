import React from "react";
import classicSuitImage from "../../assets/images/classicSuit.jpg";
import symbioteSuitImage from "../../assets/images/symbioteSuit.jpg";
import "../../styles/HeroSection.css";

function HeroSection({ theme }) {
  const imageUrl = theme === "light" ? classicSuitImage : symbioteSuitImage;

  const textShadowClass =
    theme === "light" ? "text-shadow-light" : "text-shadow-dark";

  return (
  <div
    className={`hero-section ${theme}`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="hero-content">
      <h1 className={textShadowClass}>
        Swing Into the Spider-Verse: Your Ultimate Portal to All Things Spidey!
      </h1>
    </div>
  </div>
);
}

export default HeroSection;
