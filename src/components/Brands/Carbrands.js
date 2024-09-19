import React from "react";
import "./Carbrands.css";
import Carcards from "../Carcards/Carcards";

const Carbrands = () => {
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

  const handleChange = (e) => {
    const budget = e.target.value;
    const str = budget.split("-");
    const minPrice = str[0];
    const maxPrice = str[1];
  };
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

      <Carcards />
    </>
  );
};

export default Carbrands;
