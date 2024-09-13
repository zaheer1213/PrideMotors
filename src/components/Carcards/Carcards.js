import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Carcards.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Comman/constants";

const Carcards = () => {
  const navigate = useNavigate();
  const [allCars, setAllCars] = useState([]);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCars();
  }, []);
  return (
    <>
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
          {/* <Col md={3} className="mb-3">
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
                <div className="enquireBtn2" onClick={() => navtodetils()}>
                  <div className="enquireNowWrapper">
                    <div className="enquireNow">Enquire Now</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
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
                <div className="enquireBtn2" onClick={() => navtodetils()}>
                  <div className="enquireNowWrapper">
                    <div className="enquireNow">Enquire Now</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
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
                <div className="enquireBtn2" onClick={() => navtodetils()}>
                  <div className="enquireNowWrapper">
                    <div className="enquireNow">Enquire Now</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className="mb-3">
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
                <div className="enquireBtn2" onClick={() => navtodetils()}>
                  <div className="enquireNowWrapper">
                    <div className="enquireNow">Enquire Now</div>
                  </div>
                </div>
              </div>
            </div>
          </Col> */}
          <div className="mt-5 text-center" onClick={navtoinformation}>
            <Button className="cutome-btn">See All Cars</Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Carcards;
