import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Comman/constants";
import moment from "moment";

const GetBlogsById = () => {
  const location = useLocation();
  const [blogData, setBlogData] = useState({});

  const getBlogById = async (id) => {
    try {
      const response = await axios.get(`${BASEURL}/cars/blog/${id}`);
      if (response.data) {
        console.log(response);
        if (response) {
          setBlogData(response.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const blogid = location.state;
    if (blogid) {
      getBlogById(blogid);
    }
  }, []);
  return (
    <>
      <NAVIGATION1 />
      <Container className="py-5 mb-3">
        <Row className="align-items-stretch">
          {" "}
          <Col md={6} className="d-flex">
            <div className="blog-img w-100 h-100">
              {" "}
              <img
                src={BASEURL + blogData.image}
                alt="..."
                className="img-fluid h-100"
                style={{ objectFit: "cover", borderRadius: "20px" }}
              />
            </div>
          </Col>
          <Col md={6} className="d-flex">
            <div className="w-100 h-100 d-flex flex-column justify-content-center">
              <h2>{blogData.title}</h2>
              <strong className="mb-3">{blogData.slug}</strong>
              <p>{blogData.content}</p>
              <p>{blogData.blog_summary}</p>
              <div>
                <small className="text-muted">
                  {moment(blogData.published_date).format("YYYY-MM-DD HH:mm")}
                </small>{" "}
                &nbsp;
                <small>{blogData.author}</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default GetBlogsById;
