import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import HeroSection from "../components/common/HeroSection";
import ThemeContext from "../utils/ThemeContext";

function HomePage() {
  const { theme } = useContext(ThemeContext); // Use the context to get the theme

  const constructionImageUrl =
    "https://www.seekpng.com/png/detail/259-2598162_page-in-under-construction.png";
  return (
    <div>
      <Container>
        <img
          className="img-fluid p-1"
          src={constructionImageUrl}
          alt="coming soon!"
        />
      </Container>
      <HeroSection theme={theme} />
    </div>
  );
}

export default HomePage;
