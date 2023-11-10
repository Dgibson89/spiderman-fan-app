import React, { useContext, useState } from "react";
import HeroSection from "../components/common/HeroSection";
import SignupModal from "../components/common/SignupModal";
import ThemeContext from "../utils/ThemeContext";


function HomePage() {
  const { theme } = useContext(ThemeContext); // Use the context to get the theme
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  return (
    <div>
      <HeroSection theme={theme} />
      <SignupModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default HomePage;
