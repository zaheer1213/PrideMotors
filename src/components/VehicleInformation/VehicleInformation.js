import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import "./VehicleInformation.css";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { BASEURL, TOKEN } from "../Comman/constants";
import { useNavigate } from "react-router-dom";

const VehicleInformation = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [allCarMake, setAllCarMake] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    variant: "",
    vin: "",
    mileage: "",
    price: "",
    ownership: "",
    registrationLocation: "",
    insuranceValidity: "",
    fuelType: "",
    engineCapacity: "",
    transmission: "",
    condition: "",
    keyFeatures: "",
    convenienceFeatures: "",
    description: "",
    warranty: "",
    sellerInfo: "",
    contactNumber: "",
    location: "",
    bodyStructureDamage: "",
    floodedBody: "",
    color: "",
    totalkm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles
      .filter((file) => file.type.startsWith("image/"))
      .map((file) =>
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.make) newErrors.make = "Make is required";
    if (!formData.model) newErrors.model = "Model is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.variant) newErrors.variant = "Variant is required";
    if (!formData.vin) newErrors.vin = "vin is required";
    if (!formData.mileage) newErrors.mileage = "mileage is required";
    if (!formData.price) newErrors.price = "price is required";
    if (!formData.ownership) newErrors.ownership = "ownership is required";
    if (!formData.registrationLocation)
      newErrors.registrationLocation = "registration Location is required";
    if (!formData.insuranceValidity)
      newErrors.insuranceValidity = "insurance Validity is required";
    if (!formData.fuelType) newErrors.fuelType = "fuelType is required";
    if (!formData.engineCapacity)
      newErrors.engineCapacity = "engineCapacity is required";
    if (!formData.transmission)
      newErrors.transmission = "transmission is required";
    if (!formData.condition) newErrors.condition = "condition is required";
    if (!formData.keyFeatures)
      newErrors.keyFeatures = "keyFeatures is required";
    if (!formData.description)
      newErrors.description = "description is required";
    if (!formData.warranty) newErrors.warranty = "warranty is required";
    if (!formData.sellerInfo) newErrors.sellerInfo = "sellerInfo is required";
    if (!formData.contactNumber)
      newErrors.contactNumber = "contact Number is required";
    if (!formData.location) newErrors.location = "location is required";
    if (!formData.bodyStructureDamage)
      newErrors.bodyStructureDamage = "body Structure Damage is required";
    if (!formData.floodedBody)
      newErrors.floodedBody = "flooded Body is required";
    if (!formData.totalkm) newErrors.totalkm = "Total kilometer is required";
    if (!formData.color) newErrors.color = "Color is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      const data = new FormData();
      data.append("make", formData.make);
      data.append("car_title", formData.model);
      data.append("car_model", formData.model);
      data.append("make_year", formData.year);
      data.append("variant", formData.variant);
      data.append("vin", formData.vin);
      data.append("mileage", formData.mileage);
      data.append("price", formData.price);
      data.append("ownership", formData.ownership);
      data.append("registration_location", formData.registrationLocation);
      data.append("insurance", formData.insuranceValidity);
      data.append("fuel_type", formData.fuelType);
      data.append("engine_capacity", formData.engineCapacity);
      data.append("transmission", formData.transmission);
      data.append("condition", formData.condition);
      data.append("key_features", formData.keyFeatures);
      data.append("convenience_feature", formData.convenienceFeatures);
      data.append("description", formData.description);
      data.append("warranty", formData.warranty);
      data.append("seller_name", formData.sellerInfo);
      data.append("contact_no", formData.contactNumber);
      data.append("location", formData.location);
      data.append("bodyStructureDamage", formData.bodyStructureDamage);
      data.append("floodedBody", formData.floodedBody);
      data.append("km_driven", formData.totalkm);
      data.append("color", formData.color);

      uploadedImages.forEach((image) => {
        data.append("car_images", image);
      });

      const headers = {
        "x-access-token": TOKEN,
      };

      const response = await axios.post(`${BASEURL}/cars/car-detail`, data, {
        headers,
      });
      console.log(response);
      if (response.status === 201) {
        navigate("/");
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
      <Container>
        <Container className="py-5 vehiclapages">
          <h2>Vehicle Information</h2>
          <p>
            Complete the form below to upload your vehicle to our inventory.
            Ensure all details are accurate to attract the right buyers.
          </p>
          <hr />
          <h5>Vehicle Info</h5>
          <Form>
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
                    onChange={handleChange}
                    value={formData.make}
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
                    value={formData.model}
                    onChange={handleChange}
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
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Purchase Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Purchase Year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    isInvalid={!!errors.year}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.year}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Variant</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Variant"
                    name="variant"
                    value={formData.variant}
                    onChange={handleChange}
                    isInvalid={!!errors.variant}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.variant}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Vehicle Identification No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter VIN"
                    name="vin"
                    value={formData.vin}
                    onChange={handleChange}
                    isInvalid={!!errors.vin}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.vin}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Mileage</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mileage"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    isInvalid={!!errors.mileage}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mileage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5">
              <h5>Pricing & Ownership</h5>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Ownership</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="ownership"
                    value={formData.ownership}
                    onChange={handleChange}
                    isInvalid={!!errors.ownership}
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">More Than Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.ownership}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Registration Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Registration Location"
                    name="registrationLocation"
                    value={formData.registrationLocation}
                    onChange={handleChange}
                    isInvalid={!!errors.registrationLocation}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.registrationLocation}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <div className="text-start">
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Insurance Validity</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter Insurance Validity"
                        name="insuranceValidity"
                        value={formData.insuranceValidity}
                        onChange={handleChange}
                        isInvalid={!!errors.insuranceValidity}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.insuranceValidity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Total KM</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Total KM"
                        name="totalkm"
                        value={formData.totalkm}
                        onChange={handleChange}
                        isInvalid={!!errors.totalkm}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalkm}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Color</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Insurance Validity"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        isInvalid={!!errors.color}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.color}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Row>
            <Row className="mt-5">
              <h5>Engine & Transmission</h5>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Fuel Type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleChange}
                    isInvalid={!!errors.fuelType}
                  >
                    <option>Open this select menu</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                    <option value="Biodiesel">Biodiesel</option>
                    <option value="Ethanol">Ethanol</option>
                    <option value="Electric car">
                      Plug-in hybrid (electric car)
                    </option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.fuelType}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Engine Capacity in CC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Engine Capacity"
                    name="engineCapacity"
                    value={formData.engineCapacity}
                    onChange={handleChange}
                    isInvalid={!!errors.engineCapacity}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.engineCapacity}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Transmission</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    isInvalid={!!errors.transmission}
                  >
                    <option>Open this select menu</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                    <option value="semi-automatic transmission">
                      Semi-automatic transmission
                    </option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.transmission}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5">
              <h5>Condition & Features</h5>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Condition</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="explain condition in brief"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    isInvalid={!!errors.condition}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.condition}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Key Features</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="explain Key Features in brief"
                    name="keyFeatures"
                    value={formData.keyFeatures}
                    onChange={handleChange}
                    isInvalid={!!errors.keyFeatures}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.keyFeatures}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Convenience Features</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="explain Convenience Features in brief"
                    name="convenienceFeatures"
                    value={formData.convenienceFeatures}
                    onChange={handleChange}
                    isInvalid={!!errors.convenienceFeatures}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.convenienceFeatures}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5">
              <h5>Media</h5>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Images</Form.Label>
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>
                      Drag & drop some images here, or click to select files
                    </p>
                  </div>
                </Form.Group>
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Warranty in Year</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="warranty"
                    value={formData.warranty}
                    onChange={handleChange}
                    isInvalid={!!errors.warranty}
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                    <option value="9">Nine</option>
                    <option value="10">Ten</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.warranty}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <h5>Seller Info</h5>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Seller Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Seller Name"
                    name="sellerInfo"
                    value={formData.sellerInfo}
                    onChange={handleChange}
                    isInvalid={!!errors.sellerInfo}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.sellerInfo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Contact Number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.contactNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.contactNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Location / Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Location or Address"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      isInvalid={!!errors.location}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.location}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Body Structure Damage</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Body Structure Damage"
                    name="bodyStructureDamage"
                    value={formData.bodyStructureDamage}
                    onChange={handleChange}
                    isInvalid={!!errors.bodyStructureDamage}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.bodyStructureDamage}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Flooded Body</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Flooded Body"
                    name="floodedBody"
                    value={formData.floodedBody}
                    onChange={handleChange}
                    isInvalid={!!errors.floodedBody}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.floodedBody}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <div className="text-center mt-5">
            <Button className="cutome-btn " onClick={() => handleSubmit()}>
              Submit Listing
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default VehicleInformation;
