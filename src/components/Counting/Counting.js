import React from "react";
import "./Counting.css";
import { Col, Container, Row } from "react-bootstrap";

const Counting = () => {
  return (
    <>
      {/* <section className="rootInner1">
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
      </section> */}

      <Container fluid className="countingdiv">
        <Row>
          <Col>
            <h1 className="numbersAreTelling">Numbers are telling our story</h1>
            <b className="ametMinimMollit">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </b>
          </Col>
          <Col>
            <div className="card">
              <div className="bg" />
              <div className="metricContainer">
                <div className="metricValue">
                  <div className="m">2.5K+</div>
                  <div className="ticketsDeliveredThis">
                    Successfully Delivered Cars
                  </div>
                </div>
              </div>
              <div className="metricSeparator" />
              <div className="metricContainer1">
                <div className="metricValue">
                  <div className="m">2.6K+</div>
                  <div className="ticketsDeliveredThis">Happy Customers</div>
                </div>
              </div>
              <div className="metricSeparator1">
                <div className="metricSeparatorChild" />
              </div>
              <div className="metricContainer2">
                <div className="metricValue">
                  <div className="m">90%</div>
                  <div className="ticketsDeliveredThis">
                    Customer Satisfaction Rate
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Counting;
