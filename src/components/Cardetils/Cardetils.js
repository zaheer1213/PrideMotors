import React, { useEffect, useState } from "react";
import "./Cardetils.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import axios from "axios";
import { BASEURL } from "../Comman/constants";
import { Pagination, Stack } from "@mui/material";
import Loader from "../Loader/Loader";

const Cardetils = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
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

  const getAllCars = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      setLoading(true);
      const response = await axios.get(
        `${BASEURL}/cars/car-detail?page=${page}&limit=${limit}&search=${search}`,
        {
          headers,
        }
      );
      if (response.data) {
        setLoading(false);
        setAllCars(response.data.rows);
        setTotalPages(response.data.pages_count);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const navtodetils = (id) => {
    navigate("/carinformation", { state: { carid: id } });
    window.scroll(0, 0);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = () => {
    getAllCars();
  };
  const handleClear = () => {
    setSearch("");
    getAllCars();
  };
  useEffect(() => {
    getAllCars();
  }, [page, limit]);
  return (
    <>
      {loading ? <Loader /> : ""}
      <NAVIGATION1 />
      <Container className="searchbar-conatiner bg-filler">
        <Row>
          <div className="serchbar">
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
            <input
              type="search"
              placeholder="Enter Model, Brand Name"
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            &nbsp;&nbsp;
            <div>
              <Button
                className="btn inputheight"
                style={{ background: "red", color: "white", width: "150px" }}
                onClick={handleSearch}
              >
                Search Car
              </Button>{" "}
              &nbsp;
              {search && (
                <Button
                  className="btn inputheight"
                  style={{ background: "red", color: "white", width: "150px" }}
                  onClick={handleClear}
                >
                  Clear
                </Button>
              )}
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
              {allCars && allCars.length > 0 ? (
                allCars.map((row) => (
                  <Col md={3} className="mb-3">
                    <div className="inventoryItemsInner">
                      <div className="frameGroup">
                        <div className="image5Wrapper">
                          <img
                            className="image5Icon"
                            loading="lazy"
                            alt=""
                            src={BASEURL + row.image}
                          />
                        </div>
                        <div className="frameContainer">
                          <div className="mgGlosterSharp7StrParent">
                            <div className="mgGlosterSharp">
                              {row.make_year} {row.make} {row.car_model}
                            </div>
                            <b className="rs3200Lakh">₹{row.price}</b>
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
                                <li>{row.km_driven}km</li>
                              </ul>
                            </div>
                            <div className="diesel">
                              <span className="dieselTxt">
                                <ul className="petrol">
                                  <li>{row.fuel_type} </li>
                                </ul>
                              </span>
                            </div>
                            <div className="newDelhi">
                              <ul className="petrol">
                                <li>{row.registration_location}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="enquireBtn2"
                          onClick={() => navtodetils(row.id)}
                        >
                          <div className="enquireNowWrapper">
                            <div className="enquireNow">Enquire Now</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <td colSpan={4}>No Data Found</td>
              )}
              <div className="mt-4 d-flex justify-content-center">
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    className="custom-pagination"
                  />
                </Stack>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cardetils;
