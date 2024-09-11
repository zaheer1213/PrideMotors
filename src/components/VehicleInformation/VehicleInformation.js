import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import "./VehicleInformation.css";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { BASEURL, TOKEN } from "../Comman/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../Loader/Loader";

const VehicleInformation = () => {
  const location = useLocation();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [allCarMake, setAllCarMake] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [formData, setFormData] = useState({
    make: "",
    car_model: "",
    year: "",
    variant: "",
    vin: "",
    mileage: "",
    price: "",
    ownership: "",
    registration_location: "",
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
    body_structure_damage: "",
    flooded_body: "",
    color: "",
    totalkm: "",
    registration_number: "",
    registry_year: "",
    rto_location: "",
  });
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [initialFormData, setinitialFormData] = useState({});
  const [loading, setLoading] = useState(false);

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
    if (!formData.car_model) newErrors.car_model = "Model is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.variant) newErrors.variant = "Variant is required";
    if (!formData.vin) newErrors.vin = "vin is required";
    if (!formData.mileage) newErrors.mileage = "mileage is required";
    if (!formData.price) newErrors.price = "price is required";
    if (!formData.ownership) newErrors.ownership = "ownership is required";
    if (!formData.registration_location)
      newErrors.registration_location = "registration Location is required";
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
    if (!formData.body_structure_damage)
      newErrors.body_structure_damage = "body Structure Damage is required";
    if (!formData.flooded_body)
      newErrors.flooded_body = "flooded Body is required";
    if (!formData.totalkm) newErrors.totalkm = "Total kilometer is required";
    if (!formData.color) newErrors.color = "Color is required";
    if (!id) {
      if (!file) newErrors.file = "File is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      // Form validation check
      if (!validateForm()) return;

      const data = new FormData();

      // Helper function to append only changed fields (for edit mode)
      const appendChangedFields = (field, value) => {
        if (formData[field] !== initialFormData[field] || !id) {
          // Append if field changed or if it's a new record (no id)
          data.append(field, value);
        }
      };

      // Conditionally append fields based on whether we're editing or creating
      appendChangedFields("make", formData.make);
      appendChangedFields("car_title", formData.car_model);
      appendChangedFields("car_model", formData.car_model);
      appendChangedFields("make_year", formData.year);
      appendChangedFields("variant", formData.variant);
      appendChangedFields("vin", formData.vin);
      appendChangedFields("mileage", formData.mileage);
      appendChangedFields("price", formData.price);
      appendChangedFields("ownership", formData.ownership);
      appendChangedFields(
        "registration_location",
        formData.registration_location
      );
      appendChangedFields("insurance", formData.insuranceValidity);
      appendChangedFields("fuel_type", formData.fuelType);
      appendChangedFields("engine_capacity", formData.engineCapacity);
      appendChangedFields("transmission", formData.transmission);
      appendChangedFields("condition", formData.condition);
      appendChangedFields("key_features", formData.keyFeatures);
      appendChangedFields("convenience_feature", formData.convenienceFeatures);
      appendChangedFields("description", formData.description);
      appendChangedFields("warranty", formData.warranty);
      appendChangedFields("seller_name", formData.sellerInfo);
      appendChangedFields("contact_no", formData.contactNumber);
      appendChangedFields("location", formData.location);
      appendChangedFields(
        "body_structure_damage",
        formData.body_structure_damage
      );
      appendChangedFields("flooded_body", formData.flooded_body);
      appendChangedFields("km_driven", formData.totalkm);
      appendChangedFields("color", formData.color);
      appendChangedFields("registration_number", formData.registration_number);
      appendChangedFields("registry_year", formData.registry_year);
      appendChangedFields("rto_location", formData.rto_location);

      // Append image fields (only if they have changed)
      if (file) {
        appendChangedFields("image", file);
      }

      // Append existing images (edit mode)
      if (id && Array.isArray(initialFormData.car_images)) {
        initialFormData.car_images.forEach((existingImage) => {
          data.append("car_images", existingImage.car_image);
        });
      }

      // Append newly uploaded images
      if (uploadedImages.length > 0) {
        uploadedImages.forEach((image) => {
          if (!image.isExisting) {
            data.append("car_images", image);
          }
        });
      }

      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      let response;
      if (id) {
        // Edit mode (PUT request)
        data.append("is_approved", true);
        response = await axios.put(
          `${BASEURL}/admin-dashboard/car-detail/${id}`,
          data,
          {
            headers,
          }
        );
      } else {
        // Create mode (POST request)
        data.append("is_approved", true);
        response = await axios.post(
          `${BASEURL}/admin-dashboard/car-detail`,
          data,
          {
            headers,
          }
        );
      }

      if (response.status === 201 || response.data.error === false) {
        navigate("/admin-allCars");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCarById = async (id) => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      setLoading(true);
      const response = await axios.get(`${BASEURL}/cars/car-detail/${id}`, {
        headers,
      });
      setLoading(false);

      if (response) {
        const data = response.data.data;

        // Ensure car_image is an array
        const carImages = data.car_image ? data.car_image : [];

        setFormData({
          make: data.make,
          car_model: data.car_model,
          year: data.make_year,
          variant: data.variant,
          vin: data.vin,
          mileage: data.mileage,
          price: data.price,
          ownership: data.ownership,
          registration_location: data.registration_location,
          insuranceValidity: data.insurance,
          fuelType: data.fuel_type,
          engineCapacity: data.engine_capacity,
          transmission: data.transmission,
          condition: data.condition,
          keyFeatures: data.key_features,
          convenienceFeatures: data.convenience_feature,
          description: data.description,
          warranty: data.warranty,
          sellerInfo: data.seller_name,
          contactNumber: data.contact_no,
          location: data.location,
          body_structure_damage: data.body_structure_damage,
          flooded_body: data.flooded_body,
          color: data.color,
          totalkm: data.km_driven,
          registration_number: data.registration_number,
          registry_year: data.registry_year,
          rto_location: data.rto_location,
        });

        setImagePreview(BASEURL + data.image);
        setinitialFormData(data);
        loadExistingImages(carImages); // Passing carImages array
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const loadExistingImages = (imagesArray) => {
    const formattedImages = imagesArray.map((image) => ({
      id: image.id, // Use this to differentiate between server images and newly uploaded ones
      preview: `${BASEURL}${image.car_image}`, // Full URL for displaying existing images
      isExisting: true, // Flag to differentiate existing images from newly uploaded ones
    }));
    setUploadedImages((prev) => [...prev, ...formattedImages]);
  };

  const handleBack = () => {
    window.history.back();
  };
  useEffect(() => {
    const carsId = location?.state?.carID;
    if (carsId) {
      setId(carsId);
      getCarById(carsId);
    }
    getAllCarBrands();
  }, []);
  return (
    <>
      {loading ? <Loader /> : ""}
      <Container>
        <Container className="py-5 vehiclapages ">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="backicon pointer mb-3"
            onClick={handleBack}
          />
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
                    name="car_model"
                    value={formData.car_model}
                    onChange={handleChange}
                    isInvalid={!!errors.car_model}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.car_model}
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
            <Row className="mt-3">
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
                    type="number"
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
                    name="registration_location"
                    value={formData.registration_location}
                    onChange={handleChange}
                    isInvalid={!!errors.registration_location}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.registration_location}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Registration Number"
                    name="registration_number"
                    value={formData.registration_number}
                    onChange={handleChange}
                    isInvalid={!!errors.registration_number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.registration_number}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Registry Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Registry Year"
                    name="registry_year"
                    value={formData.registry_year}
                    onChange={handleChange}
                    isInvalid={!!errors.registry_year}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.registry_year}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Rto Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Rto Location"
                    name="rto_location"
                    value={formData.rto_location}
                    onChange={handleChange}
                    isInvalid={!!errors.rto_location}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.rto_location}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
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
                        type="number"
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
              <Col className="">
                <Form.Label>
                  Upload the image you want to display at the front
                </Form.Label>
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
                    name="body_structure_damage"
                    value={formData.body_structure_damage}
                    onChange={handleChange}
                    isInvalid={!!errors.body_structure_damage}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.body_structure_damage}
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
                    name="flooded_body"
                    value={formData.flooded_body}
                    onChange={handleChange}
                    isInvalid={!!errors.flooded_body}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.flooded_body}
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
