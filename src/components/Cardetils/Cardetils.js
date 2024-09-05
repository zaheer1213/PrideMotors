import React, { useState } from "react";
import "./Cardetils.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";

const Cardetils = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [availableFilters, setAvailableFilters] = useState([
    "maruti suzuki",
    "tata",
    "Toyota",
  ]);
  const [DiscountFilter, setDiscountFilter] = useState([
    "Less than ₹ 200,000",
    "₹ 200,000 - ₹ 400,000",
    "₹ 200,000 - ₹ 400,000",
    "Greater than ₹ 20,00,000",
  ]);
  const [rating, setRating] = useState([
    "5⭐⭐⭐⭐⭐",
    "4⭐⭐⭐⭐",
    "3⭐⭐⭐",
    "2⭐⭐",
    "1⭐",
  ]);
  const handleRemoveFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
  };

  const handleAddFilter = (filter) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <>
      <NAVIGATION1 />
      <Container  className="searchbar-conatiner bg-filler">
        <Row>
          <div className="serchbar">
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
            <input
              type="search"
              placeholder="Enter Model, Brand Name"
              className="search-input"
            />
            &nbsp;&nbsp;
            <div>
              <Button
                className="btn inputheight"
                style={{ background: "red", color: "white", width: "150px" }}
              >
                Search Car
              </Button>
            </div>
          </div>
        </Row>
      </Container>
      <Container fluid className="mb-5">
        <Row>
          <Col md={3}>
            <div className="sidebar-col">
              <div className="filterrow">
                <strong>Filters</strong>
                <div>
                  <p className="pointer" onClick={() => setSelectedFilters([])}>
                    Clear all
                  </p>
                </div>
              </div>
              <div className="selected-filters">
                <div className="filter-container">
                  {selectedFilters.map((filter, index) => (
                    <div key={index} className="filter-badge">
                      {filter}
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="remove-icon"
                        onClick={() => handleRemoveFilter(filter)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h6>Brands</h6>
              <Form>
                {availableFilters.map((filter, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={filter}
                    onChange={() => handleAddFilter(filter)}
                  />
                ))}
              </Form>
              <hr />
              <h6>Your Budget</h6>
              <Form>
                {DiscountFilter.map((filter, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={filter}
                    onChange={() => handleAddFilter(filter)}
                  />
                ))}
              </Form>
              <hr />
              <h6>Customer Rating</h6>
              <Form>
                {rating.map((filter, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={filter}
                    onChange={() => handleAddFilter(filter)}
                  />
                ))}
              </Form>
            </div>
          </Col>
          <Col md={9} className="">
            <Row>
              <div className="line">
                <h1 className="exploreOurInventory">Search Results</h1>
                <hr></hr>
              </div>
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-51@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">
                          2018 Maruti Suzuki Swift
                        </div>
                        <b className="rs3200Lakh">₹5,75,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>35,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Petrol</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="enquireBtn2"
                      onClick={() => navigate("/carinformation")}
                    >
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-5-1@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">2019 Hyundai Creta</div>
                        <b className="rs3200Lakh">₹9,90,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>28,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Diesel</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="enquireBtn2">
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-5-21@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">2017 Ford EcoSport</div>
                        <b className="rs3200Lakh">₹6,20,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>42,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Petrol</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="enquireBtn2">
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-5-31@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">
                          2016 Toyota Innova Crysta
                        </div>
                        <b className="rs3200Lakh">₹12,50,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>50,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Petrol</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="enquireBtn2">
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-51@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">
                          2018 Maruti Suzuki Swift
                        </div>
                        <b className="rs3200Lakh">₹5,75,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>35,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Petrol</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="enquireBtn2">
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-5-1@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">2019 Hyundai Creta</div>
                        <b className="rs3200Lakh">₹9,90,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>28,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Diesel</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="enquireBtn2">
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-5-21@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">2017 Ford EcoSport</div>
                        <b className="rs3200Lakh">₹6,20,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>42,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Petrol</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="enquireBtn2">
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="inventoryItemsInner">
                  <div className="frameGroup">
                    <div className="image5Wrapper">
                      <img
                        className="image5Icon"
                        loading="lazy"
                        alt=""
                        src="/images/image-5-31@2x.png"
                      />
                    </div>
                    <div className="frameContainer">
                      <div className="mgGlosterSharp7StrParent">
                        <div className="mgGlosterSharp">
                          2016 Toyota Innova Crysta
                        </div>
                        <b className="rs3200Lakh">₹12,50,000</b>
                      </div>
                      <div className="frameDiv">
                        <div className="ratingStarsWrapper">
                          <img
                            className="ratingStarsIcon"
                            alt=""
                            src="/images/star-icons.svg"
                          />
                        </div>
                        <div className="div">4.5</div>
                      </div>
                      <div className="kmParent">
                        <div className="km">
                          <ul className="petrol">
                            <li>50,000 km</li>
                          </ul>
                        </div>
                        <div className="diesel">
                          <span className="dieselTxt">
                            <ul className="petrol">
                              <li>Petrol</li>
                            </ul>
                          </span>
                        </div>
                        <div className="newDelhi">
                          <ul className="petrol">
                            <li>Pimpri-Chinchwad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="enquireBtn2">
                      <div className="enquireNowWrapper">
                        <div className="enquireNow">Enquire Now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cardetils;
