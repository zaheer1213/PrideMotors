import React from "react";
import "./Carbrands.css";

const Carbrands = () => {
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
              <select className="searchInputLabelsParent">
                <option>Select your Budget</option>
                <option>select</option>
                <option>select</option>
              </select>
            </div>
            <div className="">
              <select className="searchInputLabelsParent">
                <option>Type</option>
                <option>select</option>
                <option>select</option>
              </select>
            </div>
            <div className="seachCarWrapper">
              <b className="seachCar">Seach Car</b>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Carbrands;
