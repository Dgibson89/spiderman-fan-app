import React, { useContext } from 'react'
import "../../styles/Footer.css"
import ThemeContext from "../../utils/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  const footerColorClass =
  theme === "light" ? "footer-light" : "footer-dark";

  return (
    <footer className={`footer sticky-footer ${footerColorClass}`}>
      <div className="container">
    <p className="footer-disclaimer">
  Marvel characters and images are © Marvel. This is a non-commercial fan application.
</p>
      </div>
    </footer>
  );
}
export default Footer