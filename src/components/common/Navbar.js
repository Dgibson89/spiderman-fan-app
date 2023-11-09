import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeContext from "../../utils/ThemeContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {

  const { theme } = useContext(ThemeContext);

  return (
    
    <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme} sticky="top" >
      <Navbar.Brand as={Link} className='ps-2' to="/">
        Spider Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  className='me-2' />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/history">
            History
          </Nav.Link>
          <Nav.Link as={NavLink} to="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link as={NavLink} to="/media">
            Media
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
  );
};

export default NavigationBar;
