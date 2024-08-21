import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Signup.css";
import { GOOGLECLINETID } from "../Comman/constants";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Signup = () => {
  let [type, setType] = useState("password");
  let [type1, setType1] = useState("password");
  const [check, setCheck] = useState(true);
  const [countryData, setCountryData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefult();
  };

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      setCountryData(data);
      // data.forEach((country) => {
      //   console.log(`Country: ${country.name.common}`);
      //   console.log(`Flag: ${country.flags.png}`);
      //   console.log(`Dial Code: ${country.idd.root}${country.idd.suffixes[0]}`);
      //   console.log("--------------");
      // });
    })
    .catch((error) => console.error("Error fetching countries:", error));

    

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center full-height"
      >
        <Container fluid className="no-padding">
          <Row className="no-padding full-height">
            <Col md={6} className="agentCol">
              <div>
                <img src="/images/key.png" alt="keyimg" className="imgclass" />
                <img
                  src="/images/carimages.png"
                  alt="carimg"
                  className="imgclass mt-5"
                />
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex flex-column align-items-center justify-content-center mt-3"
            >
              <div>
                <h1 className="mb-3 text-center loginheding">
                  Welcome!{" "}
                  <img
                    src="images/hand-wave-icon-18.png"
                    style={{ height: "70px", width: "70px" }}
                  />
                </h1>
                <p className="text-center">
                  Register to unlock powerful tools, connect with <br />
                  customers, and grow your business effortlessly.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <GoogleOAuthProvider clientId={GOOGLECLINETID}>
                  <Button
                    className="cutomebutton1"
                    type="submit"
                    // onClick={() => login()}
                  >
                    <img
                      src="images/Group 1000006014.png"
                      height={23}
                      width={23}
                    />
                    &nbsp;&nbsp;&nbsp; Sign up with Google{" "}
                  </Button>
                </GoogleOAuthProvider>
              </div>
              <Form onSubmit={handleSubmit} className="mt-3">
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className="inputheight bordered-input"
                      type="text"
                      placeholder="Enter your name"
                      // isInvalid={!!errors.name}
                      // onChange={(e) => setName(e.target.value)}
                    />
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faUserAlt} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {/* {errors.name} */}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className="inputheight"
                      type="email"
                      placeholder="Email address"
                      // isInvalid={!!errors.email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {/* {errors.email} */}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPhone" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup>
                    {/* <DropdownButton
                      variant="outline-secondary"
                      title={country.dialCode}
                      id="input-group-dropdown-1"
                    >
                      {countryData.map((countryItem) => (
                        <Dropdown.Item
                          key={countryItem.value}
                          onClick={() => setCountry(countryItem)}
                        >
                          {countryItem.flag} ({countryItem.idd.root})
                        </Dropdown.Item>
                      ))}
                    </DropdownButton> */}
                    <Form.Control
                      className="inputheight"
                      type="number"
                      placeholder="00000 00000"
                      // isInvalid={!!errors.phone}
                      // value={phone}
                      // onChange={(e) => setPhone(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {/* {errors.phone} */}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className="inputheight"
                      type={type}
                      placeholder="Password"
                      // isInvalid={!!errors.password}
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroup.Text
                      onClick={() =>
                        setType(type === "password" ? "text" : "password")
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={type === "password" ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {/* {errors.password} */}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  controlId="formBasicConfirmPassword"
                  className="mb-3"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className="inputheight"
                      type={type1}
                      placeholder="Confirm Password"
                      // isInvalid={!!errors.confirmPassword}
                      // onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputGroup.Text
                      onClick={() =>
                        setType1(type1 === "password" ? "text" : "password")
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={type === "password" ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {/* {errors.confirmPassword} */}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Check
                      type="checkbox"
                      label="I agree to the Terms and Conditions"
                      onChange={(e) => setCheck(e.target.checked)}
                      checked={check}
                    />
                  </div>
                </Form.Group>

                <div className="d-flex align-items-center justify-content-center">
                  <Button className="cutome-btn" type="submit">
                    Sign Up
                  </Button>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <NavLink to="/login">
                      <span className="create-account pointer">
                        Log in here.
                      </span>
                    </NavLink>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Signup;
