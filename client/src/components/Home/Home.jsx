import React from "react";
import HomeCarousel from "./Carousel";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container className="py-3" style={{ marginTop: "4rem" }}>
        <HomeCarousel />
        <Row>
          <Col className="my-4 py-3 text-center discount-box">
            <h2>10% Instant Discount*</h2>
            <p>on Credit and Debit Cards</p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="box text-center my-2 p-2">
              <h2>Amazing Dealing on TVs | Up to ₹5000 off</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box text-center my-2 p-2">
              <h2>Up to 70% off | Styles for women</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box text-center my-2 p-2">
              <h2>Clearance sale | 50% off on Electronics</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
