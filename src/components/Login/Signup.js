import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BASEURL, GOOGLECLINETID } from "../Comman/constants";
import "./Signup.css";
import axios from "axios";
import Loader from "../Loader/Loader";
const Signup = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [type1, setType1] = useState("password");
  const [check, setCheck] = useState(true);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
    confirmpassword: "",
  });
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!signupData.name) newErrors.name = "Name is required.";
    if (!signupData.email) newErrors.email = "Email is required.";
    if (!signupData.phoneno) newErrors.phoneno = "Phone number is required.";
    if (!signupData.password) newErrors.password = "Password is required.";
    if (signupData.password !== signupData.confirmpassword)
      newErrors.confirmpassword = "Passwords do not match.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        setErrors({});
        setLoading(true);
        const sendData = new FormData();
        sendData.append("username", signupData.name);
        sendData.append("email", signupData.email);
        sendData.append("mobile_number", signupData.phoneno);
        sendData.append("password", signupData.password);
        sendData.append("profile_pic", file);

        const response = await axios.post(
          `${BASEURL}/accounts/register/nt/`,
          sendData
        );
        if (response.data) {
          setLoading(false);
          const email = response?.data?.data?.email;
          navigate("/verification", { state: { useremail: email } });
        }
      } catch (errors) {
        setLoading(false);
        const emailMessage = errors?.response?.data?.message[0];
        const mobileMessage = errors?.response?.data?.message[1];

        setMessage(emailMessage || mobileMessage || "Internal Server Error");
        handleShow();
      }
    }
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      {loading ? <Loader /> : ""}
      <Container
        fluid
        className="d-flex align-items-center justify-content-center full-height"
      >
        <Container fluid className="no-padding">
          <Row className="no-padding full-height">
            <Col md={6} className="agentCol">
              <div>
                <img src="/images/final-logo-pride0104-1@2x.png" alt="pride" />
                <img
                  src="/images/key.png"
                  alt="keyimg"
                  className="imgclass mt-3"
                />
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
                    alt="wave"
                  />
                </h1>
                <p className="text-center">
                  Register to unlock powerful tools, connect with <br />
                  customers, and grow your business effortlessly.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <GoogleOAuthProvider clientId={GOOGLECLINETID}>
                  <Button className="cutomebutton1" type="submit">
                    <img
                      src="images/Group 1000006014.png"
                      height={23}
                      width={23}
                      alt="Google"
                    />
                    &nbsp;&nbsp;&nbsp; Sign up with Google
                  </Button>
                </GoogleOAuthProvider>
              </div>
              <Form className="mt-3" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className="inputheight bordered-input"
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={signupData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faUserAlt} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
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
                      name="email"
                      value={signupData.email}
                      onChange={handleChange}
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
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Profile Pic</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className="inputheight"
                      type="file"
                      placeholder="Email address"
                      name="profilePic"
                      onChange={(e) => {
                        const selectedFile = e.target.files[0];
                        setFile(selectedFile);
                      }}
                      isInvalid={!!errors.file}
                    />
                    <InputGroup.Text>
                      {file ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="profile preview"
                          style={{
                            height: "30px",
                            width: "30px",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <FontAwesomeIcon icon={faUser} />
                      )}
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.file}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPhone" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className="inputheight"
                      type="number"
                      placeholder="00000 00000"
                      name="phoneno"
                      value={signupData.phoneno}
                      onChange={handleChange}
                      isInvalid={!!errors.phoneno}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneno}
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
                      name="password"
                      value={signupData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
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
                      {errors.password}
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
                      name="confirmpassword"
                      value={signupData.confirmpassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmpassword}
                    />
                    <InputGroup.Text
                      onClick={() =>
                        setType1(type1 === "password" ? "text" : "password")
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={type1 === "password" ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmpassword}
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
      {/* model */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button style={{ background: "red" }} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signup;
