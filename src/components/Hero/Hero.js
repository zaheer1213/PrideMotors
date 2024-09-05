import React from "react";
import "./Hero.css";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
// import Brands from "../Brands/Brands";
import Carcards from "../Carcards/Carcards.js";
import Whatwedo from "../Whatwedo/Whatwedo.js";
import Counting from "../Counting/Counting.js";
import Reviews from "../Review/Reviews.js";
import Footer from "../Footer/Footer.js";
import Whychooseus from "../Whychooseus/Whychooseus.js";
import Carbrands from "../Brands/Carbrands.js";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <NAVIGATION1 />
      {/* hero section */}
      <div>
        <Carousel>
          <Carousel.Item>
            <div className="imgcol">
              <img src="images/BANNER.png" alt="BANNER" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imgcol">
              <img src="images/BANNER.png" alt="BANNER" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imgcol">
              <img src="images/BANNER.png" alt="BANNER" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <Brands /> */}
      <Carbrands />
      <Carcards />
      <Whatwedo />
      <Whychooseus />
      <Counting />
      <Reviews />
      <Footer />
    </>
  );
};

export default Hero;
