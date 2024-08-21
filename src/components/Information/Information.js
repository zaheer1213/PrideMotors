import React, { useState } from "react";
import "./Information.css";
import ImageGallery from "react-image-gallery";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";

const Information = () => {
  const [show, setShow] = useState(false);

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
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
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
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Label>Vehicle of Interest</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Label>Inquiry Type</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="cutome-btn" onClick={handleClose}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Information;
