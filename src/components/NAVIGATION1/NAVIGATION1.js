import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./NAVIGATION1.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { BASEURL } from "../Comman/constants";
import Loader from "../Loader/Loader";

const NAVIGATION1 = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const getUserdetils = async () => {
    try {
      const headers = {
        "x-access-token": auth.token,
      };
      setLoading(true);
      const response = await axios.get(`${BASEURL}/accounts/user-profile`, {
        headers,
      });
      if (response.data) {
        setLoading(false);
        setUserInfo(response?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setAuth({
      token: "",
      isAuthenticated: false,
      isAdmin: false,
    });
    setUserInfo({});
  };
  useEffect(() => {
    getUserdetils();
  }, []);

  useEffect(() => {
    getUserdetils();
  }, []);
  return (
    <>
      {/* {loading ? <Loader /> : ""} */}
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
                <Nav.Link href="/" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="/allcarsdetils" className="nav-link">
                  Buy Used Car
                </Nav.Link>
                <Nav.Link href="/addcar" className="nav-link">
                  Sell Car
                </Nav.Link>
                <Nav.Link href="/aboutus" className="nav-link">
                  About Us
                </Nav.Link>
                <Nav.Link href="/blogs" className="nav-link">
                  Blogs
                </Nav.Link>
                <Nav.Link href="/contactUs" className="nav-link">
                  Contact Us
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
                {userInfo && userInfo?.profile_pic ? (
                  <img
                    src={BASEURL + userInfo.profile_pic}
                    alt="logo"
                    className="dbd974090c35e48bdb8c3273b07fb4Icon"
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
                    src="images/1dbd974090c35e48bdb8c3273b07fb4esvg@2x.png"
                    alt="logo"
                    className="dbd974090c35e48bdb8c3273b07fb4Icon"
                  />
                )}
              </Nav.Link>
              <NavDropdown
                title={<span className="dropdown-title">Account</span>}
                id="user-nav-dropdown"
              >
                <NavDropdown.Item href="/addcar">Add Car</NavDropdown.Item>
                <NavDropdown.Item href="/bookAppointment">
                  Book Test Drive
                </NavDropdown.Item>
                {auth?.token ? (
                  <NavDropdown.Item href="" onClick={() => handleLogout()}>
                    Log Out
                  </NavDropdown.Item>
                ) : (
                  <>
                    <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NAVIGATION1;
