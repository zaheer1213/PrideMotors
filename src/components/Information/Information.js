import React, { useState } from "react";
import "./Information.css";
import ImageGallery from "react-image-gallery";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import { BASEURL } from "../Comman/constants";

const Information = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    vehicleInterest: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "Phone number is required";
    if (!formData.vehicleInterest)
      formErrors.vehicleInterest = "Vehicle of interest is required";
    if (!formData.inquiryType)
      formErrors.inquiryType = "Inquiry type is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (validate()) {
      try {
        const response = await fetch(`${BASEURL}/booking/inquiry`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response) {
          handleClose();
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            vehicleInterest: "",
            inquiryType: "",
            message: "",
          });
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const images = [
    {
      original: "/images/toyata1.jpeg",
      thumbnail: "/images/toyata1.jpeg",
    },
    {
      original: "/images/toyata2.jpeg",
      thumbnail: "/images/toyata2.jpeg",
    },
    {
      original: "/images/toyata3.png",
      thumbnail: "/images/toyata3.png",
    },
  ];
  return (
    <>
      <NAVIGATION1 />
      <Container className="maininfo">
        <Row>
          <div className="breadcrumb">
            <div className="home-inventory">
              Home /Inventory / Toyota Innova Crysta
            </div>
          </div>
          <Col md={7}>
            {" "}
            <ImageGallery items={images} thumbnailPosition={"left"} />
          </Col>
          <Col md={5}>
            <div className="right-sidebar-wrapper">
              <div className="right-sidebar">
                <div className="price">
                  <div className="toyota-innova-crysta-parent">
                    <b className="toyota-innova-crysta">
                      2016 Toyota Innova Crysta
                    </b>{" "}
                    <br />
                    <b className="toyota-innova-crysta">₹12,50,000</b>
                  </div>
                </div>
                <div className="the-2016-toyota">
                  The 2016 Toyota Innova Crysta is a premium MPV known for its
                  robust build, comfortable interiors, and reliable performance.
                  It's an ideal family car with ample space and advanced
                  features.
                </div>
                <Button className="cutome-btn" onClick={handleShow}>
                  Inquiry now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <div className="carinformation">
              <Row>
                <Col md={6}>
                  {" "}
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/transmission@2x.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">transmission</div>
                      <div className="automatic">Automatic</div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/lifeinsurance@2x.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">insurance</div>
                      <div className="automatic">till feb-2025</div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/factory@2x.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">make year</div>
                      <div className="automatic">2018</div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/mileage@2x.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">KM driven</div>
                      <div className="automatic">35,000 km</div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/clipboard-1@2x copy.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">registry year</div>
                      <div className="automatic">feb 2018</div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/clipboard-1@2x copy.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">registry year</div>
                      <div className="automatic">feb 2018</div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/boss-1@2x.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">ownership</div>
                      <div className="automatic">2nd owner</div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="frame-container">
                    <div className="transmission-wrapper">
                      <img
                        className="transmission-icon"
                        alt=""
                        src="/images/fuelstation@2x.png"
                      />
                    </div>
                    <div className="transmission-parent">
                      <div className="transmission">fuel type</div>
                      <div className="automatic">petrol</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="namerow">
              <Col md={3}>Description</Col>
              <Col md={3}>Reviews </Col>
              <Col md={3}>Support</Col>
              <hr />
            </Row>
          </Col>
        </Row>
        <div className=" reviewconatiner">
          <div className="row align-items-center review-row">
            <div className="col-3 col-md-2">
              <img
                className="review-1-item"
                alt=""
                src="/images/ellipse-142@2x.png"
              />
            </div>

            <div className="col-9 col-md-10">
              <p className="mb-3">⭐⭐⭐⭐⭐</p>
              <p className="mb-2">
                You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                changes.
              </p>
              <p className="mb-1">
                <strong>Bessie Cooper</strong>
              </p>
              <p className="text-muted mb-1">July 20, 2024</p>
            </div>
          </div>
          <div className="row align-items-center review-row">
            <div className="col-3 col-md-2">
              <img
                className="review-1-item"
                alt=""
                src="/images/ellipse-14@2x.png"
              />
            </div>

            <div className="col-9 col-md-10">
              <p className="mb-3">⭐⭐⭐⭐⭐</p>
              <p className="mb-3">
                You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                changes.
              </p>
              <p className="mb-1">
                <strong>Kristin Watson</strong>
              </p>
              <p className="text-muted mb-1">July 20, 2024</p>
            </div>
          </div>
          <div className="row align-items-center review-row">
            <div className="col-3 col-md-2">
              <img
                className="review-1-item"
                alt=""
                src="/images/ellipse-141@2x.png"
              />
            </div>

            <div className="col-9 col-md-10">
              <p className="mb-3">⭐⭐⭐⭐⭐</p>
              <p className="mb-3">
                You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                changes.
              </p>
              <p className="mb-1">
                <strong>Jenny Wilson </strong>
              </p>
              <p className="text-muted mb-1">July 20, 2024</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />

      <Modal show={show} onHide={handleClose} className="popupmodel">
        <Modal.Header closeButton>
          <Modal.Title>Inquire Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Fill out the form below to inquire about our vehicles or services. Our
          team will get back to you shortly.
          <Form className="mt-3">
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="enter Email"
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
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="enter Phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.phoneNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Label>Vehicle of Interest</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter Vehicle of Interest"
                  name="vehicleInterest"
                  value={formData.vehicleInterest}
                  onChange={handleChange}
                  isInvalid={!!errors.vehicleInterest}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.vehicleInterest}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Inquiry Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  isInvalid={!!errors.inquiryType}
                >
                  <option>Open this select menu</option>
                  <option value="for buy">for Buy</option>
                  <option value="for sale">for Sale</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.inquiryType}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mt-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="cutome-btn" onClick={() => handleSubmit()}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Information;
