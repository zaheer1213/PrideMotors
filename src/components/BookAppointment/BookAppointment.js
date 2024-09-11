import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import axios from "axios";
import { BASEURL } from "../Comman/constants";

const BookAppointment = () => {
  const [show1, setShow1] = useState(false);
  const [formData, setFormData] = useState({
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
  const [userId, setUserId] = useState(null);
  const [allCars, setAllCars] = useState([]);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);

  const handlechange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const networkError = {};
    if (!formData.full_name) networkError.full_name = "Full Name is require";
    if (!formData.email_address)
      networkError.email_address = "Email is require";
    if (!formData.phone_number) networkError.phone_number = "phone is require";
    if (!formData.date) networkError.date = "date is require";
    if (!formData.time) networkError.time = "time is require";
    if (!formData.car_model) networkError.car_model = "Car model is require";
    if (!formData.car) networkError.car = "Car is require";
    if (!formData.preferred_location)
      networkError.preferred_location = "Location is require";

    setErrors(networkError);
    return Object.keys(networkError).length === 0;
  };
  const hanldeSubmit = async () => {
    try {
      if (!validate()) {
        return;
      }
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const payload = {
        full_name: formData.full_name,
        email_address: formData.email_address,
        date: formData.date,
        time: formData.time,
        car_model: formData.car_model,
        preferred_location: formData.preferred_location,
        user: userId,
        car: formData.car,
        notes: formData.notes
      };
      const response = await axios.post(
        `${BASEURL}/booking/test-drive`,
        payload,
        {
          headers,
        }
      );
      if (response.data) {
        setShow1(true);
        setFormData({
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

  const getAllCars = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(
        `${BASEURL}/cars/car-detail?page=${page}&limit=${limit}`,
        {
          headers,
        }
      );
      if (response) {
        setAllCars(response.data.rows);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose1 = () => {
    setShow1(false);
  };
  useEffect(() => {
    const userID = localStorage.getItem("UUID");
    setUserId(userID);
    getAllCars();
  }, []);
  return (
    <>
      <NAVIGATION1 />
      <Container className="py-5 addcarform">
        <h2>Book a Test Drive</h2>
        <p>
          Book a free test drive today and get behind the wheel to feel the
          performance and comfort firsthand.
        </p>
        <Form className="mt-5">
          <Row className="mt-3">
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handlechange}
                  isInvalid={!!errors.full_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.full_name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handlechange}
                  isInvalid={!!errors.email_address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email_address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handlechange}
                  isInvalid={!!errors.phone_number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone_number}
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
                <Form.Label>Car Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Car Model"
                  name="car_model"
                  value={formData.car_model}
                  onChange={handlechange}
                  isInvalid={errors.car_model}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.car_model}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Select Car</Form.Label>
                <Form.Select
                  name="car"
                  value={formData.car}
                  onChange={handlechange}
                  isInvalid={!!errors.car}
                >
                  {allCars &&
                    allCars.map((res) => (
                      <option value={res.id}>{res.car_model}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.car}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Preferred Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Select a time"
                  name="preferred_location"
                  value={formData.preferred_location}
                  onChange={handlechange}
                  isInvalid={errors.preferred_location}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.preferred_location}
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
                <Form.Label>Preferred Test Drive Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Select a date"
                  name="date"
                  value={formData.date}
                  onChange={handlechange}
                  isInvalid={errors.date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Preferred Test Drive Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Select a time"
                  name="time"
                  value={formData.time}
                  onChange={handlechange}
                  isInvalid={errors.time}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.time}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Form.Group className="mb-3">
              <Form.Label>Comments/Additional Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter any additional requests"
                name="notes"
                value={formData.notes}
                onChange={handlechange}
              />
            </Form.Group>
          </Row>
        </Form>
        <div className="mt-3">
          <Button className="cutome-btn " onClick={() => hanldeSubmit()}>
            Submit
          </Button>
        </div>
      </Container>

      {/* Success Modal */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Request Send Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookAppointment;
