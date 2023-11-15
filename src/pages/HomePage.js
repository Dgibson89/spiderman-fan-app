import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import HeroSection from "../components/common/HeroSection";
import SignupModal from "../components/common/SignupModal";
import ThemeContext from "../utils/ThemeContext";


function HomePage() {
  const { theme } = useContext(ThemeContext); // Use the context to get the theme
  const [showModal, setShowModal] = useState(() => !sessionStorage.getItem('modalShown'));
  const [isMinimized, setIsMinimized] = useState(() => sessionStorage.getItem('modalMinimized') === 'true');

  useEffect(() => {
    if (showModal) {
      sessionStorage.setItem('modalShown', 'true');
    }
    sessionStorage.setItem('modalMinimized', isMinimized.toString());
  }, [showModal, isMinimized]);

  const closeModal = () => {
    setShowModal(false);
    setIsMinimized(true);
    sessionStorage.setItem('modalMinimized', 'true');
  };

  const openModal = () => {
    setShowModal(true);
    setIsMinimized(false);
    sessionStorage.setItem('modalMinimized', 'false');
  };

  return (
    <div>
      <HeroSection theme={theme} />
      {showModal && <SignupModal showModal={showModal} closeModal={closeModal} />}
      {!showModal && isMinimized && (
        theme === 'dark' ? 
          <Button className="btn-placement" variant="dark" onClick={openModal}>Open Sign Up</Button> :
          <Button className="custom-light-button btn-placement" onClick={openModal}>Open Sign Up</Button>
      )}
    </div>
  );
}

export default HomePage;
