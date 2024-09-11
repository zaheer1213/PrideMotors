import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

const Addblogs = () => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [fomrData, setFromData] = useState({
    title: "",
    subtitle: "",
    shorttext: "",
    longtext: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fomrData, [name]: value });
  };

  const validate = () => {
    const newError = {};

    if (!fomrData.title) newError.title = "title is required";
    if (!fomrData.subtitle) newError.subtitle = "subtitle is required";
    if (!fomrData.shorttext) newError.shorttext = "short text is required";
    if (!fomrData.longtext) newError.longtext = "long text is required";
    if (!file) newError.file = " file is required";

    setErrors(newError);
    return Object.keys(newError).length === 0;
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

  const handleSubmit = () => {
    if (!validate()) return;
  };
  return (
    <>
      {/* <Container className="py-5"> */}
      <section className="mt-5 Adblock">
        <div>
          <h1>Add Blogs</h1>
        </div>
        <Row>
          <Form className="mt-3">
            <Row className="w-100">
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    onChange={handleChange}
                    value={fomrData.title}
                    isInvalid={errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Subtitle"
                    name="subtitle"
                    onChange={handleChange}
                    value={fomrData.subtitle}
                    isInvalid={errors.subtitle}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subtitle}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="w-100">
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>ShortText</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter shortText"
                    name="shorttext"
                    rows={4}
                    onChange={handleChange}
                    value={fomrData.shorttext}
                    isInvalid={errors.shorttext}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.shorttext}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>LongText</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter longText"
                    name="longtext"
                    rows={4}
                    onChange={handleChange}
                    value={fomrData.longtext}
                    isInvalid={errors.longtext}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.longtext}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        name="singleimges"
                        accept="image/*"
                        onChange={handleImageChange}
                        isInvalid={!!errors.file}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.file}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    {imagePreview && (
                      <div className="mt-3">
                        <Image
                          src={imagePreview}
                          alt="Selected Preview"
                          thumbnail
                        />
                      </div>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
          <div className="text-center mt-3">
            <Button className="cutome-btn" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </div>
        </Row>
      </section>
      {/* </Container> */}
    </>
  );
};

export default Addblogs;
