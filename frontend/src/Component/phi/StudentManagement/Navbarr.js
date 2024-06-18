import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import logo from "../../Assets/logo.png";
import Header from "./Header";
import Footer from "../../footer";

function CustomNavbar() {
  return (
    <>
      <BootstrapNavbar bg="primary" data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand href="#home" style={{ color: 'white' }}>Ministry Of Health</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: 'white', fontSize: '18px' }}>Home</Nav.Link>
            <Nav.Link href="https://www.health.gov.lk/contact-us/" style={{ color: 'white', fontSize: '18px' }}>Contact us</Nav.Link>
            <Nav.Link href="/login" style={{ color: 'white', fontSize: '18px' }}>Login</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
}

export default CustomNavbar;
