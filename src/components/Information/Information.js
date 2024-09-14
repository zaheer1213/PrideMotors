import React, { useEffect, useState } from "react";
import "./Information.css";
import ImageGallery from "react-image-gallery";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import { BASEURL } from "../Comman/constants";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Information = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    vehicleInterest: "",
    inquiryType: "",
    message: "",
  });
  const [formData1, setFormData1] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    date: "",
    time: "",
    car_model: "",
    preferred_location: "",
    user: "",
    car: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [errors1, setErrors1] = useState({});

  const [carInfo, setCarInfo] = useState({});
  const [userId, setUserId] = useState(null);
  const [carId, setCarId] = useState(null);
  const [images, setimages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlechange1 = (e) => {
    const { value, name } = e.target;
    setFormData1({ ...formData, [name]: value });
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
  const validate1 = () => {
    let formErrors = {};

    if (!formData1.full_name) formErrors.full_name = "Full name is required";
    if (!formData1.email) {
      formErrors.email_address = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData1.email_address)) {
      formErrors.email_address = "Email address is invalid";
    }
    if (!formData1.phone_number)
      formErrors.phone_number = "Phone number is required";
    if (!formData1.date) formErrors.date = "Date is required";
    if (!formData1.time) formErrors.time = "Time is required";
    if (!formData1.car_model) formErrors.car_model = "Car Model is required";
    if (!formData1.preferred_location)
      formErrors.preferred_location = "Preferred Location is required";

    setErrors1(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (validate()) {
      try {
        const payload = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_no: formData.phoneNumber,
          vehicle_name: formData.vehicleInterest,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        };
        const response = await fetch(`${BASEURL}/booking/inquiry`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(payload),
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

  const handleBook = async () => {
    try {
      if (!validate1()) {
        return;
      }
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const payload = {
        full_name: formData1.full_name,
        email_address: formData1.email_address,
        date: formData1.date,
        time: formData1.time,
        car_model: formData1.car_model,
        preferred_location: formData1.preferred_location,
        user: userId,
        car: carId,
        notes: formData1.notes,
      };
      const response = await axios.post(
        `${BASEURL}/booking/test-drive`,
        payload,
        {
          headers,
        }
      );
      if (response.data) {
        setShow1(false);
        setFormData1({
          full_name: "",
          email_address: "",
          phone_number: "",
          date: "",
          time: "",
          car_model: "",
          preferred_location: "",
          user: "",
          car: "",
          notes: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const getCarsById = async (id) => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(`${BASEURL}/cars/car-detail/${id}`, {
        headers,
      });
      if (response.data) {
        setCarInfo(response.data.data);
        const images = response.data.data.car_image.map((item) => ({
          original: `${BASEURL}${item.car_image}`, // Full image
          thumbnail: `${BASEURL}${item.car_image}`, // Thumbnail
        }));
        setimages(images);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const carID = location.state.carid;
    if (carID) {
      getCarsById(carID);
      setCarId(carID);
    }
    const userID = localStorage.getItem("UUID");
    setUserId(userID);
  }, []);
  return (
    <>
      <NAVIGATION1 />
      <Container className="maininfo">
        <Row>
          <div className="breadcrumb">
            <div className="home-inventory">
              Home /Inventory / {carInfo.make} {carInfo.car_model}
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
                      {carInfo.make_year} {carInfo.make} {carInfo.car_model}
                    </b>{" "}
                    <br />
                    <b className="toyota-innova-crysta">₹{carInfo.price}</b>
                  </div>
                </div>
                <div className="the-2016-toyota">{carInfo.key_features}</div>
                <div
                  className="buttons"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="danger" onClick={handleShow}>
                    Inquiry Now
                  </Button>{" "}
                  &nbsp;&nbsp;
                  <Button variant="danger" onClick={handleShow1}>
                    Book Test Drive
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          {carInfo && (
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
                        <div className="transmission">Transmission</div>
                        <div className="automatic">{carInfo?.transmission}</div>
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
                        <div className="transmission">Insurance</div>
                        <div className="automatic">
                          till {carInfo.insurance}
                        </div>
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
                        <div className="transmission">Make Year</div>
                        <div className="automatic">{carInfo.registry_year}</div>
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
                        <div className="transmission">KM Driven</div>
                        <div className="automatic">{carInfo.km_driven} km</div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="frame-container">
                      <div className="transmission-wrapper">
                        <img
                          className="transmission-icon"
                          alt=""
                          src="/images/location (2).png"
                          style={{ height: "60px", width: "61px" }}
                        />
                      </div>
                      <div className="transmission-parent">
                        <div className="transmission">Registry Location</div>
                        <div className="automatic">
                          {carInfo.registration_location}
                        </div>
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
                        <div className="transmission">Registry Year</div>
                        <div className="automatic">{carInfo.make_year}</div>
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
                        <div className="transmission">Ownership</div>
                        <div className="automatic">
                          {carInfo.ownership} owner
                        </div>
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
                        <div className="transmission">Fuel Type</div>
                        <div className="automatic">{carInfo.fuel_type}</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          )}
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

      <Modal show={show1} onHide={handleClose1} className="popupmodel">
        <Modal.Header closeButton>
          <Modal.Title>Book a Test Drive</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Book a free test drive today and get behind the wheel to feel the
          performance and comfort firsthand.
          <Form className="mt-3">
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter Full Name"
                    name="firstName"
                    value={formData1.full_name}
                    onChange={handlechange1}
                    isInvalid={!!errors1.full_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors1.full_name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="enter Phone Number"
                    name="lastName"
                    value={formData1.phone_number}
                    onChange={handlechange1}
                    isInvalid={!!errors1.phone_number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors1.phone_number}
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
                    value={formData1.email_address}
                    onChange={handlechange1}
                    isInvalid={!!errors1.email_address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors1.email_address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Car Model</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter Car Model"
                    name="phoneNumber"
                    value={formData1.car_model}
                    onChange={handlechange1}
                    isInvalid={!!errors1.car_model}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors1.car_model}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Label>Preferred Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter Preferred Location"
                  name="vehicleInterest"
                  value={formData1.preferred_location}
                  onChange={handlechange1}
                  isInvalid={!!errors1.preferred_location}
                />
                <Form.Control.Feedback type="invalid">
                  {errors1.preferred_location}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="enter Date"
                  name="vehicleInterest"
                  value={formData1.date}
                  onChange={handlechange1}
                  isInvalid={!!errors1.date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors1.date}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="enter Vehicle of Interest"
                  name="vehicleInterest"
                  value={formData1.time}
                  onChange={handlechange1}
                  isInvalid={!!errors1.time}
                />
                <Form.Control.Feedback type="invalid">
                  {errors1.time}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData1.message}
                    onChange={handlechange1}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="cutome-btn" onClick={() => handleBook()}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Information;
