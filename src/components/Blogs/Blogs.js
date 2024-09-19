import React, { useEffect, useState } from "react";
import NAVIGATION1 from "../NAVIGATION1/NAVIGATION1";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import axios from "axios";
import { BASEURL } from "../Comman/constants";
import { Pagination, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const blogdetils = [
    {
      id: 1,
      image: "/images/safty2.jpg",
      title: "Essential Car Safety Tips Every Driver Should Know",
      Subtitle: "Stay Safe on the Road: Essential Car Safety Tips",
      shortText:
        "Learn crucial car safety tips that every driver should know to ensure a safer driving experience for you and your passengers",
      LongText:
        "Car safety is not just about driving carefully; it’s about being proactive in maintaining your vehicle and understanding the features designed to protect you. This blog post covers a range of safety tips, from regular vehicle checks like tire maintenance and brake inspections to adopting defensive driving techniques that can prevent accidents. We’ll also dive into the importance of modern safety features such as airbags, traction control, and how to use them effectively. Whether you’re a new driver or a seasoned one, these tips will help you stay safe on the road.",
    },
    {
      id: 2,
      title: "Why Buying a Used Car is a Smart Financial Move",
      image: "/images/buycar.jpg",
      Subtitle: "The Smart Choice: Benefits of Buying a Used Car",
      shortText:
        "Discover why purchasing a used car can be a financially savvy decision, offering great value without sacrificing quality",
      LongText:
        "Buying a second-hand car is often seen as a practical and economical choice. This blog post explores the numerous benefits of purchasing a used vehicle, from significant cost savings to avoiding the steep depreciation that new cars face as soon as they leave the dealership. You’ll learn about the reliability of certified pre-owned programs, how to assess a used car’s condition, and tips for negotiating the best price. We’ll also discuss why used cars can offer more value for money than new cars and how they can be a smart investment for budget-conscious buyers.",
    },
    {
      id: 3,
      title: "Top Car Safety Features to Consider When Buying a Vehicle",
      image: "/images/safty.jpg",
      Subtitle: "Must-Have Car Safety Features for Your Next Vehicle",
      shortText:
        "Explore the top car safety features you should prioritize when purchasing a new or used vehicle, ensuring peace of mind on the road.",
      LongText:
        "When it comes to buying a car, safety should be a top priority. This blog post highlights the essential safety features that every modern car should have. We’ll explain the benefits of advanced driver-assistance systems (ADAS), including automatic emergency braking, lane departure warnings, and electronic stability control (ESC). You’ll also learn about the importance of airbags, rearview cameras, and adaptive cruise control. Whether you’re looking for a new or used vehicle, these features will provide enhanced protection for you and your passengers, making your driving experience safer and more secure.",
    },
  ];

  const getAllBlogs = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(
        `${BASEURL}/cars/blog?page=${page}&limit=${limit}`,
        {
          headers,
        }
      );
      if (response) {
        setAllBlogs(response.data.rows);
        setTotalPages(response.data.pages_count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const movetoblog = (id) => {
    navigate("/particularblog", { state: id });
  };
  useEffect(() => {
    getAllBlogs();
  }, [page, limit]);
  return (
    <>
      <NAVIGATION1 />
      <div className="text-center mt-5">
        <h2 style={{ fontWeight: "bold" }}>Blogs</h2>
      </div>
      <Container className="py-5">
        <Row>
          {allBlogs && allBlogs.length > 0 ? (
            <>
              {allBlogs.map((res) => (
                <Col className="mb-5" key={res.id}>
                  <Card className="team-member-card">
                    <Card.Img src={BASEURL + res.image} alt="image" />
                    <Card.Body>
                      <Card.Title>{res.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted mt-3">
                        {res.slug}
                      </Card.Subtitle>
                      <Card.Text>{res.content}</Card.Text>
                      <div className="">
                        <Button
                          className="cutome-btn"
                          onClick={() => movetoblog(res.id)}
                        >
                          Learn more
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
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
            </>
          ) : (
            <td>No Data Found</td>
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Blogs;
