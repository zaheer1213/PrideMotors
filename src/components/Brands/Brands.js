import React from "react";
import "./Brands.css";
import { Container, Row } from "react-bootstrap";
import Carbrands from "./Carbrands";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const navigate = useNavigate();

  const movetodetils = () => {
    navigate("/allcarsdetils");
    window.scroll(0, 0);
  };

  const movetosell = () => {
    navigate("/vehicleinformation");
    window.scroll(0, 0);
  };
  return (
    <>
      <Container className="brandssection">
        <Row className="innerrow">
          <div className="buyAndSell">
            <div className="buyCarWrapper">
              <div className="buyCar" onClick={() => movetodetils()}>
                Buy Car
              </div>
            </div>
            <div className="sellCarWrapper">
              <div className="sellCar" onClick={() => movetosell()}>
                Sell Car
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Carbrands />
    </>
  );
};

export default Brands;
