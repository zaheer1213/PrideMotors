import React from "react";
import "./Hero.css";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Brands from "../Brands/Brands";
import Carcards from "../Carcards/Carcards.js";
import Whatwedo from "../Whatwedo/Whatwedo.js";
import Counting from "../Counting/Counting.js";
import Reviews from "../Review/Reviews.js";
import Footer from "../Footer/Footer.js";
import Whychooseus from "../Whychooseus/Whychooseus.js";

const Hero = () => {
  return (
    <>
      <NAVIGATION1 />
      {/* <div className="banner">
        <div className="file581Parent">
          <img
            className="file581"
            loading="lazy"
            alt=""
            src="/images/file-58-1@2x.png"
          />
          <img className="frameChild" alt="" src="/images/group-6.svg" />
        </div>
        <div className="rectangleParent">
          <div className="frameItem" />
          <b className="findYourPerfectContainer">
            <span className="findYourPerfectContainer1">
              <span className="small-heading">Find Your Perfect Car,</span>
              <span className="buyWithConfidence"> Buy with Confidence</span>
            </span>
          </b>
        </div>
      </div> */}
      <div className="imgcol">
        <img src="images/BANNER.png" alt="BANNER" />
      </div>
      <Brands />
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
