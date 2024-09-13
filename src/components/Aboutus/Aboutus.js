import React from "react";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import "./Aboutus.css"; // Make sure to create this CSS file
import TeamMember from "../TeamMember/TeamMember";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Aboutus = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "John is the visionary behind our company.",
      image: "/images/team1.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Jane ensures that our technology is cutting-edge.",
      image: "/images/team2.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Jane ensures that our technology is cutting-edge.",
      image: "/images/team3.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <NAVIGATION1 />
      <section className="about-us-banner">
        <div className="banner-content">
          <h1 className="heading">About Us</h1>
          <p>Discover Your Perfect Pre-Owned Car with Confidence</p>
          <a href="https://www.youtube.com/@pridemotors4842">
            <Button className="cutome-btn" type="submit">
              Watch Now
            </Button>
          </a>
        </div>
      </section>

      <Container className="py-5">
        <Row className="company-overview">
          <Col md={6} className="overview-image">
            <img
              src="/images/aboutus.jpg"
              alt="Company Overview"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="overview-text">
            <h2>Company Overview</h2>
            <p>
              Pride motors working since 2010 in the market, we Deal in used
              cars. We build a trust to the customers from last 14 years. We
              provide Transparent Deal to the customer’s.
            </p>
          </Col>
        </Row>

        <Row className="vision-section mt-5">
          <Col md={12}>
            <h2 className="text-center">Our Vision</h2>
            <p>
              To be India’s most trusted destination for quality used cars,
              offering transparent, customer-focused solutions that blend
              digital convenience with comprehensive vehicle assurance, while
              making car ownership accessible and affordable for every Indian.
              This vision highlights trust, customer focus, digital integration,
              quality assurance, and affordability—key factors for succeeding in
              the Indian used car market.
            </p>
          </Col>
        </Row>
      </Container>
      {/* Team Section */}
      <Container>
        <Row className="company-overview mb-5">
          <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
            Meet Our Team
          </h2>
          <Col md={6} className="overview-text">
            <h2>Naiem Shaikh</h2>
            <p>
              Pride Motor is your trusted partner in the world of pre-owned
              vehicles, proudly serving the PCMC and Pune region. We specialize
              in connecting buyers with high-quality, thoroughly inspected
              pre-owned cars that offer exceptional value and reliability. At
              Pride Motor, we understand that buying a car is a significant
              investment, which is why we are committed to providing a
              transparent, hassle-free experience for our customers. Whether
              you're looking to buy your first car, upgrade to a better model,
              or sell your current vehicle, Pride Motor is here to guide you
              every step of the way with expert advice and unmatched customer
              service.
            </p>
          </Col>
          <Col md={6} className="overview-image">
            <img
              src="/images/aboutus.jpg"
              alt="Company Overview"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} key={index} className="mb-4">
              <TeamMember member={member} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Aboutus;
