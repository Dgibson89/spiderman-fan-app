import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeContext from "../../utils/ThemeContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  const { theme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  // Function to handle link clicks
  const handleSelect = () => setExpanded(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={theme}
      variant={theme}
      sticky="top"
      expanded={expanded}
      onToggle={(newExpanded) => setExpanded(newExpanded)}
    >
      <Navbar.Brand as={Link} className='ps-2' to="/" onClick={handleSelect}>
        Spider Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-2' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact onClick={handleSelect}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/history" onClick={handleSelect}>
            History
          </Nav.Link>
          <Nav.Link as={NavLink} to="/gallery" onClick={handleSelect}>
            Gallery
          </Nav.Link>
          <Nav.Link as={NavLink} to="/media" onClick={handleSelect}>
            Media
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
