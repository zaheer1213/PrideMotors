import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const movetohome = () => {
    navigate("/");
  };
  return (
    <Container className="unauthorized-main">
      <div className="unauthorized">
        <div className="text-center">
          <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"60px",color:"red",marginBottom:"50px"}}/>
          <h1>401 Unauthorized</h1>
          <p>Access denied due to invalid Cardentials</p>
          <Button className="cutomebutton mt-3" onClick={movetohome}>
            Home
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Unauthorized;
