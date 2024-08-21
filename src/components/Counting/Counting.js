import React from "react";
import "./Counting.css";

const Counting = () => {
  return (
    <>
      <section className="rootInner1">
        <div className="statsParent">
          <div className="stats">
            <img className="bgIcon" alt="" src="/images/bg.svg" />
            <h1 className="numbersAreTelling">Numbers are telling our story</h1>
            <b className="ametMinimMollit">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </b>
          </div>
          <img
            className="rectangleIcon"
            alt=""
            src="/images/rectangle@2x.png"
          />
          <div className="card">
            <div className="bg" />
            <div className="metricContainer">
              <div className="metricValue">
                <div className="m">2M+</div>
                <div className="ticketsDeliveredThis">
                  Tickets Delivered This Month
                </div>
              </div>
            </div>
            <div className="metricSeparator" />
            <div className="metricContainer1">
              <div className="metricValue">
                <div className="m">46K+</div>
                <div className="ticketsDeliveredThis">
                  Active Customers Rate
                </div>
              </div>
            </div>
            <div className="metricSeparator1">
              <div className="metricSeparatorChild" />
            </div>
            <div className="metricContainer2">
              <div className="metricValue">
                <div className="m">99%</div>
                <div className="ticketsDeliveredThis">
                  Customer Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counting;
