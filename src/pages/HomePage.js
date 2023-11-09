import React, { useContext } from "react";
import HeroSection from "../components/common/HeroSection";
import ThemeContext from "../utils/ThemeContext";

function HomePage() {
  const { theme } = useContext(ThemeContext); // Use the context to get the theme

  return (
    <div>
      <HeroSection theme={theme} />
    </div>
  );
}

export default HomePage;
