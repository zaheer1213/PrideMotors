import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Comman/constants";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { saveToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [errors, setErrors] = useState({});

  // Function to validate the form inputs
  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Email validation
    if (!email) {
      valid = false;
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      formErrors.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      valid = false;
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      valid = false;
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);
    return valid;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // API call using axios
        const response = await axios.post(`${BASEURL}/accounts/login/nt/`, {
          email,
          password,
        });
        if (response) {
          console.log("Login successful:", response.data);
          saveToken(response.data.token);
          navigate("/");
        }

        // Handle successful login, e.g., store token, redirect, etc.
      } catch (error) {
        console.error("Login error:", error);
        setErrors({ api: "Login failed. Please try again." });
      }
    }
  };
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Container fluid>
          <Row className="">
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center login-image-col"
            >
              <div className="icons">
                <div>
                  <img
                    src="images/forwardicon.png"
                    onClick={() => navigate("/")}
                    className="pointer"
                  />
                </div>
                <img
                  src="images/loginimg.png"
                  alt="Registration illustration"
                  className="login-image"
                />
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex flex-column align-items-center justify-content-center"
              style={{
                backgroundColor: "#FFFFFF",
                padding: "2rem",
              }}
            >
              <div className="login-form-container">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className="loginicon"
                  />
                </div>
                <h1 className="mb-5 text-center loginheding">Welcome back!</h1>
                <p className="text-center">
                  Log in to manage your business, connect with customers, and
                  grow with our powerful tools.
                </p>
                {/* onSubmit={handleSubmit} */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label className="mb-2">Email Address</Form.Label>
                    <InputGroup>
                      <Form.Control
                        className="inputheight"
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!errors.email}
                      />
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label className="mb-2">Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        className="inputheight"
                        type={type}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={!!errors.password}
                      />
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          className="pointer"
                          icon={type === "password" ? faEyeSlash : faEye}
                          onClick={() =>
                            setType(type === "password" ? "text" : "password")
                          }
                        />
                      </InputGroup.Text>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <div className="d-flex align-items-center justify-content-center">
                    <Button className="cutomebutton" type="submit">
                      Login
                    </Button>
                  </div>

                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <NavLink to="/signup">
                      <p>
                        Not a member?{" "}
                        <span className="create-account pointer">
                          Create an account.
                        </span>
                      </p>
                    </NavLink>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Login;
