import React from "react";
import "./footer.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row className="newsletter">
          <Col lg={6}>
              <h2>Subscribe to our awesome emails.</h2>
              <p>Get our latest offers and news straight in your inbox.</p>

              <Col lg={10}>
              <Form>
                <InputGroup className="mb-3" size="lg">
                  <Form.Control
                    placeholder="Please enter an email address"
                    aria-label="Please enter an email address"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="dark" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </Form>
              </Col>
          </Col>
        </Row>
      </Container>
      <div className="footer" onClick={() => navigate('/admin')}>All Right Reserved {year} ® - Add To Cart</div>
    </>
  );
};

export default Footer;
