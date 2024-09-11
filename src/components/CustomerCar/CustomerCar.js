import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";
import { BASEURL } from "../Comman/constants";

const CustomerCar = () => {
  const [allCarMake, setAllCarMake] = useState([]);
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    price: "",
    year: "",
    rto: "",
    variant: "",
    ownership: "",
    KMDriven: "",
  });

  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.make) newErrors.make = "Make is required";
    if (!formData.model) newErrors.model = "model is required";
    if (!formData.price) newErrors.price = "price is required";
    if (!formData.year) newErrors.year = "year is required";
    if (!formData.rto) newErrors.rto = "rto is required";
    if (!formData.variant) newErrors.variant = "variant is required";
    if (!formData.ownership) newErrors.ownership = "ownership is required";
    if (!formData.KMDriven) newErrors.KMDriven = "KM Driven is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      const payload = {
        make: formData.make,
        car_model: formData.model,
        mileage: formData.mileage,
        price: formData.price,
        year: formData.year,
        rto_location: formData.rto,
        variant: formData.variant,
        ownership: formData.ownership,
        km_driven: formData.KMDriven,
        user: "",
      };

      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.post(
        `${BASEURL}/admin-dashboard/selling-request`,
        payload,
        {
          headers,
        }
      );
      if (response.data) {
        handleShow();
        setFormData({
          make: "",
          model: "",
          price: "",
          year: "",
          rto: "",
          variant: "",
          ownership: "",
          KMDriven: "",
        });
      }
      console.log(formData);
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
                <Form.Select
                  aria-label="Default select example"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  isInvalid={!!errors.make}
                >
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
                <Form.Control.Feedback type="invalid">
                  {errors.make}
                </Form.Control.Feedback>
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
                  onChange={handleChange}
                  value={formData.model}
                  isInvalid={!!errors.model}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.model}
                </Form.Control.Feedback>
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
                  onChange={handleChange}
                  value={formData.price}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
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
                  onChange={handleChange}
                  value={formData.year}
                  isInvalid={!!errors.year}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.year}
                </Form.Control.Feedback>
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
                  name="rto"
                  onChange={handleChange}
                  value={formData.rto}
                  isInvalid={!!errors.rto}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.rto}
                </Form.Control.Feedback>
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
                  onChange={handleChange}
                  value={formData.variant}
                  isInvalid={!!errors.variant}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.variant}
                </Form.Control.Feedback>
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
                  onChange={handleChange}
                  value={formData.ownership}
                  isInvalid={!!errors.ownership}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.ownership}
                </Form.Control.Feedback>
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
                  name="KMDriven"
                  onChange={handleChange}
                  value={formData.KMDriven}
                  isInvalid={!!errors.KMDriven}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.KMDriven}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className="mt-3">
          <Button className="cutome-btn" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </div>
      </Container>
      <Footer />

      {/* success model */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Vehicle Information Added Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomerCar;
