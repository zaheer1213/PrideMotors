import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./Carcards.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Comman/constants";
import { Pagination, Stack } from "@mui/material";

const Carcards = () => {
  const navigate = useNavigate();
  const [allCars, setAllCars] = useState([]);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const carTypes = [
    {
      id: 1,
      name: "Hatchback",
      value: "Hatchback",
    },
    {
      id: 2,
      name: "SUV",
      value: "SUV",
    },
    {
      id: 3,
      name: "Sports car",
      value: "Sports car",
    },
    {
      id: 4,
      name: "Hatchback",
      value: "Hatchback",
    },
    {
      id: 5,
      name: "Sedan",
      value: "Sedan",
    },
    {
      id: 6,
      name: "Convertible",
      value: "Convertible",
    },
    {
      id: 7,
      name: "Hybrid",
      value: "Hybrid",
    },
    {
      id: 8,
      name: "Pickup truck",
      value: "Pickup truck",
    },

    {
      id: 9,
      name: "Luxury",
      value: "Luxury",
    },
    {
      id: 10,
      name: "Station Wagon",
      value: "hatchback",
    },
    {
      id: 11,
      name: "Compact car",
      value: "Compact car",
    },
    {
      id: 12,
      name: "Jeep",
      value: "Jeep",
    },
    {
      id: 13,
      name: "Compact car",
      value: "Compact car",
    },
    {
      id: 14,
      name: "Coupe",
      value: "Coupe",
    },
    {
      id: 15,
      name: "Minivan",
      value: "Minivan",
    },
    {
      id: 16,
      name: "Crossover",
      value: "Crossover",
    },
    {
      id: 17,
      name: "Electric vehicle",
      value: "Electric vehicle",
    },
    {
      id: 18,
      name: "Limousine",
      value: "Limousine",
    },
  ];

  const navtodetils = (id) => {
    navigate("/carinformation", { state: { carid: id } });
    window.scroll(0, 0);
  };

  const navtoinformation = () => {
    navigate("/allcarsdetils");
    window.scroll(0, 0);
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
      if (response.data) {
        setAllCars(response.data.rows);
        setTotalPages(response.data.pages_count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const budget = e.target.value;
    const str = budget.split("-");
    const minPrice = str[0];
    const maxPrice = str[1];
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getAllFiltersCar = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}/cars/car-filter1?min_price=0&max_price=0&car_type=`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCars();
    getAllFiltersCar();
  }, [page, limit]);
  return (
    <>
      <div className="maindiv">
        <h4>Select Your Car Brand To Get Started</h4>
        <div className="logoes">
          <div className="logoes">
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/marutisuzukipng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/mahindrapng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/kia.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/tatapng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/toyotapng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/volkswagenpng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/hondapng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/renaultpng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/fordpng@2x.png"
              />
            </div>
            <div className="logoscards">
              <img
                className="marutiSuzukipngIcon"
                loading="lazy"
                alt=""
                src="/images/hyundaipng@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="search">
          <form className="searchInputs">
            <div className="searchWrapper">
              <img className="searchIcon" alt="" src="/images/search.svg" />
            </div>
            <div className="">
              <select
                className="searchInputLabelsParent"
                onChange={handleChange}
              >
                <option>Select your Budget</option>
                <option value="50000">Less than 50K </option>
                <option value="50000 - 100000">50K - 1L</option>
                <option value="100000 - 150000">1L - 1.5L</option>
                <option value="150000 - 200000">1.5L - 2L</option>
                <option value="200000 - 250000">2L - 2.5L</option>
                <option value="250000 - 30000">2.5L - 3L</option>
              </select>
            </div>
            <div className="">
              <select className="searchInputLabelsParent">
                <option>Type</option>
                {carTypes.map((row) => (
                  <option value={row.value} key={row.id}>
                    {row.name}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className="seachCarWrapper">
              <b className="seachCar">Seach Car</b>
            </div>
          </form>
        </div>
      </div>
      <Container className="cardsconatiner">
        <Row>
          <div className="line">
            <h1 className="exploreOurInventory">Explore Our Inventory</h1>
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

          <div className="mt-5 text-center" onClick={navtoinformation}>
            <Button className="cutome-btn">See All Cars</Button>
          </div>
        </Row>
      </Container>


    </>
  );
};

export default Carcards;
