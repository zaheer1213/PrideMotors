import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Whychooseus.css";

const Whychooseus = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      number: "01",
      title: "Wide Selection of Quality Vehicles",
      description:
        "At Pride Motors, we offer an extensive inventory of carefully inspected used cars. Whether you're looking for a compact city car or a spacious SUV, we have the perfect vehicle to match your needs.",
      img: "/images/ladycar.png",
    },
    {
      number: "02",
      title: "Competitive Pricing",
      description:
        "We strive to offer the best prices in the market. Our transparent pricing ensures you get great value for your money, with no hidden costs or surprises.",
      img: "/images/paisa.png",
    },
    {
      number: "03",
      title: "Exceptional Customer Service",
      description:
        "We strive to offer the best prices in the market. Our transparent pricing ensures you get great value for your money, with no hidden costs or surprises.",
      img: "/images/customer.png",
    },
  ];

  return (
    <div className="whychooseusmain">
      <div className="haedingclass">
        <h1>Why to Choose Us</h1>
        <hr className="underline" />
      </div>
      <div className="row">
        <div className="col-md-8">
          <div style={{ width: "100%", margin: "auto", padding: "40px 0" }}>
            <Slider {...settings}>
              {slidesData.map((slide, index) => (
                <div key={index} className="slide-container">
                  <div className="slide-image">
                    <img src={slide.img} alt={slide.title} />
                  </div>
                  <div className="slide-content">
                    <div className="emptyIcon">{slide.number}</div>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-md-4">
          <div className="quetionimg">
            <img src="/images/Group 17.png" alt="whyimg" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Whychooseus;
