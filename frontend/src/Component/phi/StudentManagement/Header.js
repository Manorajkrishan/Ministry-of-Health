import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import logo from "../../Assets/logo.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
  return (
    <Card className="text-center" style={{ backgroundColor: "#e0f7fa" }}>
      <Card.Body>
        <div className="row">
          <div className="col">
            <img src={logo} alt="Logo" style={{ maxWidth: "100px" }} />
          </div>
          <div className="col" margintop="200px">
          <Card.Title>"ආරෝග්‍යා පරමාලාභා"</Card.Title>
              
            
          </div>
          <div className="col">
            <Card.Title>Ministry of Health</Card.Title>
            <Card.Title>සෞඛ්‍ය අමාත්‍යාංශය</Card.Title>
            <Card.Title>சுகாதார அமைச்சு</Card.Title>
            
            <Button variant="primary">Sign up</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomNavbar;
