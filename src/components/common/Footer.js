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
        <p>Data provided by Marvel. © 2014 Marvel</p>
      </div>
    </footer>
  );
}
export default Footer