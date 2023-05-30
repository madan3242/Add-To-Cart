import React from "react";
import "./footer.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
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
        
        <Row className="footer-list">
          <Col lg={2}>
            <p>Women</p>
            <ul>
              <li>Tops</li>
              <li>Ethnicwear</li>
              <li>Bottoms</li>
              <li>Dresses & Jumpsuits</li>
              <li>Winterwear</li>
              <li>Lingerie</li>
              <li>Nightwear</li>
              <li>Sportswear</li>
            </ul>
          </Col>
          <Col lg={2}>
            <p>Men</p>
            <ul>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Ethnicwear</li>
              <li>Winterwear</li>
              <li>Sportswear</li>
              <li>Innerwear</li>
              <li>Grooming</li>
            </ul>
          </Col>
          <Col lg={2}>
            <p>Kids</p>
            <ul>
              <li>Girls Clothing</li>
              <li>Boys Clothing</li>
              <li>Infants Girls</li>
              <li>Infants Boys</li>
              <li>Winterwear</li>
              <li>Add ons</li>
              <li>The Teen Shop</li>
            </ul>
          </Col>
          <Col lg={2}>
            <p>Explore</p>
            <ul>
              <li>Online Offers</li>
              <li>Store Offers</li>
              <li>Online Gift Card</li>
              <li>Stores Nearby</li>
              <li>EDGE Membership</li>
              <li>Shop on WhatsApp</li>
              <li>Fashion VLOG</li>
              <li>Homecentre</li>
            </ul>
          </Col>
          <Col lg={2}>
            <p>About</p>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Take a Tour</li>
              <li>Blog</li>
              <li>Store Locator</li>
              <li>Landmark Cares</li>
            </ul>
          </Col>
          <Col lg={2}>
            <p>Help</p>
            <ul>
              <li>Contact us</li>
              <li>Shipping</li>
              <li>Returns Process</li>
              <li>Returns Policy</li>
              <li>Help Centre</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer" onClick={() => navigate('/admin')}>All Right Reserved {year} ® - Add To Cart</div>
    </>
  );
};
