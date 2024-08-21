import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./NAVIGATION1.css";

const NAVIGATION1 = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          {/* First Column: Logo */}
          <Navbar.Brand href="/" className="me-auto">
            <img
              src="images/final-logo-pride0102@2x.png"
              className="d-inline-block align-top finalLogoPride0102"
              alt="Logo"
            />
          </Navbar.Brand>

          {/* Navbar Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="navbarResponsive" />

          {/* Navbar Collapse for Collapsible Content */}
          <Navbar.Collapse id="navbarResponsive">
            {/* Second Column: Centered Text */}
            <div className="center-section mx-auto">
              <Nav className="list">
                <Nav.Link href="#features" className="nav-link">
                  Buy used car
                </Nav.Link>
                <Nav.Link href="#pricing" className="nav-link">
                  Sell car
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link">
                  page name
                </Nav.Link>
                <Nav.Link href="#pricing" className="nav-link">
                  page name
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link">
                  page name
                </Nav.Link>
              </Nav>
            </div>

            {/* Third Column: User Name with Dropdown */}
            <Nav className="ms-auto user-section">
              <Nav.Link href="#favorites">
                <img
                  className="bf6340572e7389b8b545ad752218eeIcon"
                  alt=""
                  src="images/a7b5a250e71331e76e52ae4c1ac245d4svg.svg"
                />
              </Nav.Link>
              <Nav.Link href="#user">
                <img
                  src="images/1dbd974090c35e48bdb8c3273b07fb4esvg@2x.png"
                  alt="logo"
                  className="dbd974090c35e48bdb8c3273b07fb4Icon"
                />
              </Nav.Link>
              <NavDropdown
                title={<span className="dropdown-title">Account</span>}
                id="user-nav-dropdown"
              >
                <NavDropdown.Item href="/vehicleinformation">
                  Add Car
                </NavDropdown.Item>
                <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NAVIGATION1;
