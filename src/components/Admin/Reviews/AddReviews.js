import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

const AddReviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review_text: "",
    rating: "",
  });
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const validate = () => {
    const newError = {};
    if (!formData.name) newError.name = "Name is require";
    if (!formData.email) newError.email = "email is require";
    if (!formData.review_text) newError.review_text = "review_text is require";
    if (!formData.rating) newError.rating = "rating is require";
    if (!formData.name) newError.name = "Name is require";

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };
  const handleSubmit = () => {
    if (!validate()) return;
  };
  return (
    <>
      <Container className="py-5">
        <Row>
          <h1 className="text-center">Add Reviews</h1>{" "}
          {/* Center the heading */}
          <Form className="mt-3">
            <Row className="justify-content-center">
              {" "}
              <Col md={6}>
                {" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className="w-100"
                    name="name"
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="w-100"
                    name="email"
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    className="w-100"
                    onChange={handleImageChange}
                    isInvalid={!!errors.file}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.file}
                  </Form.Control.Feedback>
                  {imagePreview && (
                    <div className="mt-3">
                      <Image
                        src={imagePreview}
                        alt="Selected Preview"
                        thumbnail
                        className="imagePreview"
                      />
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Rating</Form.Label>
                  <Form.Select
                    className="w-100"
                    name="rating"
                    onChange={handleChange}
                    isInvalid={!!errors.rating}
                  >
                    <option value={5}>⭐⭐⭐⭐⭐</option>
                    <option value={4}>⭐⭐⭐⭐</option>
                    <option value={3}>⭐⭐⭐</option>
                    <option value={2}>⭐⭐</option>
                    <option value={1}>⭐</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.rating}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    className="w-100"
                    name="review_text"
                    onChange={handleChange}
                    isInvalid={errors.review_text}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.review_text}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <div className="text-center">
            {" "}
            <Button
              variant="danger"
              className="mt-3"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddReviews;
