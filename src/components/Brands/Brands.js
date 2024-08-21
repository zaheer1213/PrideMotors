import React from "react";
import "./Brands.css";
import { Container, Row } from "react-bootstrap";
import Carbrands from "./Carbrands";

const Brands = () => {
  return (
    <>
      <Container className="brandssection">
        <Row className="innerrow">
          <div className="buyAndSell">
            <div className="buyCarWrapper">
              <div className="buyCar">Buy Car</div>
            </div>
            <div className="sellCarWrapper">
              <div className="sellCar">Sell Car</div>
            </div>
          </div>
        </Row>
      </Container>
      <Carbrands />
    </>
  );
};

export default Brands;
