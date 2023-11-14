import React, { useContext, useState } from "react";
import HeroSection from "../components/common/HeroSection";
import SignupModal from "../components/common/SignupModal";
import ThemeContext from "../utils/ThemeContext";


function HomePage() {
  const { theme } = useContext(ThemeContext); // Use the context to get the theme
  const [showModal, setShowModal] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setIsMinimized(true);
  };

  const openModal = () => {
    setShowModal(true);
    setIsMinimized(false);
  };
  return (
    <div>
      <HeroSection theme={theme} />
      {showModal && <SignupModal showModal={showModal} closeModal={closeModal} />}
      {isMinimized && <button theme={theme} onClick={openModal}>Open Sign Up</button>}
    </div>
  );
}

export default HomePage;
