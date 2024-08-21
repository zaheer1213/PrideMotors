import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import "./VehicleInformation.css";
import { useDropzone } from "react-dropzone";

const VehicleInformation = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  const handleDelete = (index) => {
    const imageToDelete = uploadedImages[index];
    setDeletedImages((prev) => [...prev, imageToDelete]);
    setUploadedImages((prev) =>
      prev.filter((_, imgIndex) => imgIndex !== index)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <>
      <NAVIGATION1 />
      <Container>
        <Container className="py-5 vehiclapages">
          <h2>Vehicle Information</h2>
          <p>
            Complete the form below to upload your vehicle to our inventory.
            Ensure all details are accurate to attract the right buyers.
          </p>
          <hr />
          <h5>Vehicle Info</h5>
          <Row>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Make</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Model</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Year</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Variant</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>VIN</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Mileage</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>Pricing & Ownership</h5>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ownership</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Registration Location</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Insurance Validity</Form.Label>
                  <Form.Control type="date" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>Engine & Transmission</h5>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Fuel Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Engine Capacity</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Transmission</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>Condition & Features</h5>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Condition</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Key Features</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Convenience Features</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>Media</h5>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Upload Images</Form.Label>
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>
                      Drag & drop some images here, or click to select files
                    </p>
                  </div>
                </Form.Group>
              </Form>
            </Col>

            <Col>
              <div className="image-container">
                {uploadedImages.length > 0 && (
                  <>
                    <h3>Uploaded Images</h3>
                    <div className="images-grid">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="image-wrapper">
                          <img src={image.preview} alt={`upload-${index}`} />
                          <button
                            className="delete-button"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>Additional Details</h5>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Warranty </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <h5>Seller Info</h5>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Seller Info</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Location</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <Button className="cutome-btn ">Submit Listing</Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default VehicleInformation;
