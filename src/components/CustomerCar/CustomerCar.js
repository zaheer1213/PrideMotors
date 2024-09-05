import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";

const CustomerCar = () => {
  const [allCarMake, setAllCarMake] = useState([]);

  const getAllCarBrands = async () => {
    try {
      const respose = await axios.get(
        "https://private-anon-c091913906-carsapi1.apiary-mock.com/manufacturers"
      );
      if (respose) {
        setAllCarMake(respose.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCarBrands();
  }, []);
  return (
    <>
      <NAVIGATION1 />
      <Container className="py-5 addcarform">
        <h2>Vehicle Information</h2>
        <p>
          Complete the form below to upload your vehicle to our inventory.
          Ensure all details are accurate to attract the right buyers.
        </p>
        <Form className="mt-5">
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Make</Form.Label>
                <Form.Select aria-label="Default select example" name="make">
                  <option>Open this select menu</option>
                  {allCarMake &&
                    allCarMake.map((row) => (
                      <option value={row.name}>{row.name}</option>
                    ))}
                  <option value="Maruti">Maruti</option>
                  <option value="Mahindra">Mahindra</option>
                  <option value="Tata">Tata</option>
                  <option value="Skoda">Skoda</option>
                  <option value="MG">MG</option>
                  <option value="Citroen">Citroen</option>
                  <option value="BYD">BYD</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Model"
                  name="model"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  name="price"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Parches Year</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Year"
                  name="year"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>RTO Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter RTO Location"
                  name="rtolocation"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Variant</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Variant"
                  name="variant"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Ownership</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Ownership"
                  name="ownership"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>KM Driven</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter KM Driven"
                  name="kmdriven"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className="mt-3">
          <Button className="cutome-btn ">Submit</Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CustomerCar;
