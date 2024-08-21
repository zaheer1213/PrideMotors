import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Whatwedo.css";

const Whatwedo = () => {
  return (
    <Container className="rootInner mt-5">
      <Row>
        <h1 className="whatYouWill mb-5">What you will get</h1>
        <Col md={4} className="mb-3">
          <div className="sedanIconsParent">
            <div className="sedanIcons">
              <img
                className="sedan1Icon"
                loading="lazy"
                alt=""
                src="/images/sedan-1@2x.png"
              />
            </div>
            <h4 className="wideVehicleSelection">Wide Vehicle Selection</h4>
            <div className="discoverAVariety">
              Discover a variety of quality used cars, from compact to SUVs.
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="sedanIconsParent">
            <div className="sedanIcons">
              <img
                className="sedan1Icon"
                loading="lazy"
                alt=""
                src="/images/sedan-1@2x.png"
              />
            </div>
            <h4 className="wideVehicleSelection">Quality Assurance</h4>
            <div className="discoverAVariety">
              Thorough inspections & detailed history reports for top-notch
              quality
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="sedanIconsParent">
            <div className="sedanIcons">
              <img
                className="sedan1Icon"
                loading="lazy"
                alt=""
                src="/images/sedan-1@2x.png"
              />
            </div>
            <h4 className="wideVehicleSelection">Competitive Pricing</h4>
            <div className="discoverAVariety">
              Transparent, competitive prices with no hidden costs.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Whatwedo;
