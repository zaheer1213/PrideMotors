import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { BASEURL } from "../Comman/constants";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Loader/Loader";

const Verification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);
  const [clintEmail, setClintEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const { saveToken, setAuth } = useContext(AuthContext); // Access saveToken from context

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const verifyOtp = async () => {
    try {
      const payload = {
        email: clintEmail,
        email_otp: otp,
      };
      setLoading(true);
      const response = await axios.post(
        `${BASEURL}/accounts/verify-otp/nt/`,
        payload
      );
      setLoading(false);
      if (response.data.error === false) {
        console.log(response.data.is_admin);
        saveToken(response.data.token, response.data.is_admin);
        if (response.data.is_admin === true) {
          setAuth({
            token: response.data.token,
            isAuthenticated: true,
            isAdmin: true,
          });
        } else {
          navigate("/");
        }

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const emailAddress = location?.state?.useremail;
    setClintEmail(emailAddress);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      {loading ? <Loader /> : ""}
      <Container
        fluid
        className="d-flex align-items-center justify-content-center full-height"
      >
        <Container fluid className="no-padding">
          <Row>
            <Col md={6} className="agentCol">
              <div>
                <div className="mt-5 mb-3">
                  <img
                    src="images/forwardicon.png"
                    onClick={() => window.history.back()}
                    className="pointer"
                  />
                </div>
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
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <div className="text-center mb-4">
                <h1>Verify Your Account</h1>
                <p>
                  Thank you for registering! To finish, verify your
                  <br /> email and phone number..
                </p>
                <p className="text-center">
                  <strong>
                    You can request a new OTP in :{" "}
                    <span
                      style={{
                        height: "32px",
                        width: "73px",
                        borderRadius: "5px",
                        background: "red",
                        color: "white",
                        display: "inline-block",
                        textAlign: "center",
                        lineHeight: "32px",
                      }}
                    >
                      {formatTime(timeLeft)}
                    </span>{" "}
                    &nbsp; seconds.
                  </strong>
                </p>
              </div>
              <div>
                <Form className="forgotpassword-form">
                  <div className="mb-3">
                    <Form.Group>
                      <Form.Label>E-mail Verification:</Form.Label>
                      <div className="">
                        <OTPInput
                          className=""
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => (
                            <input
                              {...props}
                              style={{
                                width: "50px", // Adjust the width here
                                height: "50px", // You can adjust the height as well
                                fontSize: "20px", // Optional: Increase font size for better visibility
                                textAlign: "center", // Optional: Center text within input
                              }}
                            />
                          )}
                        />
                      </div>
                    </Form.Group>
                    <div className="text-end pointer">
                      <span>resend OTP</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      className="cutomebutton"
                      onClick={() => verifyOtp()}
                    >
                      Verify
                    </Button>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-3 pointer">
                    <p onClick={() => navigate("/login")}>
                      Back to <span style={{ color: "#5B549E" }}>Login</span>
                    </p>
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

export default Verification;
