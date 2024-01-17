import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000)
  }, [])
  
  return (
    <>
      <Container style={{ height: "405px", marginTop: "4rem" }}>
        <Row>
          <Col lg className="mx-auto text-center">
              <h1>
                <TiTick />
              </h1>
              <h2>Order placed successfully</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderSuccess;
