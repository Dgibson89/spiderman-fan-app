import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
    
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{ width: '100vw' }} >
      <Navbar.Brand as={Link} className='ps-2' to="/">
        Spiderman Hub
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
