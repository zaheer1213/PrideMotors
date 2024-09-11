import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASEURL } from "../Comman/constants";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [show1, setShow1] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newError = {};

    if (!formData.name) newError.name = "name is require";
    if (!formData.email) newError.email = "email is require";
    if (!formData.phone) newError.phone = "phone is require";
    if (!formData.location) newError.location = "location is require";
    if (!formData.message) newError.message = "message is require";

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };
  const handleSubmit = async () => {
    try {
      if (!validate()) return;

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        message: formData.message,
      };
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.post(`${BASEURL}/booking/contact`, payload, {
        headers,
      });
      if (response.data) {
        setShow1(true);
        setMessage("details send successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose1 = () => {
    setShow1(false);
  };
  return (
    <>
      <NAVIGATION1 />
      <div style={{ minHeight: "80vh", padding: "20px" }}>
        <div style={{ backgroundColor: "#f7f7f7", padding: "20px 50px" }}>
          <Row className="mb-5">
            {/* Contact Form Column */}
            <Col md={6} className="mb-4">
              <h2 className="text-center mb-4">Contact Us</h2>
              <div className="bg-white p-4 rounded shadow-sm">
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter your phone number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          isInvalid={!!errors.location}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.location}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    className="w-100 cutome-btn"
                    style={{ backgroundColor: "#007bff", color: "#fff" }}
                    onClick={() => handleSubmit()}
                  >
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Admin Info Column */}
            <Col md={6}>
              <h2 className="text-center mb-4">Get In Touch</h2>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size="lg"
                      className="me-2 iocn-color"
                    />
                    <span>
                      Old Mumbai - Pune Hwy, Kasarwadi, Pimpri-Chinchwad,
                      Maharashtra 411034
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      className="me-2 iocn-color"
                    />
                    <span>info@example.com</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="lg"
                      className="me-2 iocn-color"
                    />
                    <span>(123) 456-7890</span>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2x"
                      className="iocn-color"
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      className="iocn-color"
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      className="iocn-color"
                    />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="2x"
                      className="iocn-color"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.315976451333!2d73.82188997422273!3d18.60485238250516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8916e174327%3A0x30deb6fa4cbfe9ff!2sPride%20Motors!5e0!3m2!1sen!2sin!4v1725443886466!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Row>
        </div>
      </div>

      {/* Success Modal */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
};

export default ContactUs;
