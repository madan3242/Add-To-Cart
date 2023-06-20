import React from "react";
import './dropdown.css'
import { Col, Container, Row } from "react-bootstrap";

const KidsDropdown = ({toggleKidsDropdown}) => {
  return (
    <div className="navbar-dropdown" onMouseLeave={toggleKidsDropdown}>
      <Container>
        <Row>
          <Col lg={2} className="dropdown-list">
            <p>Boys</p>
            <ul>
              <li>T-Shirts/Polos</li>
              <li>Shirts</li>
              <li>Jeans</li>
              <li>Shorts</li>
              <li>Trackpants & Joggers</li>
              <li>Sweatshirts & hoodies</li>
              <li>Pants</li>
              <li>Clothing Sets</li>
              <li>Jackets & Waistcoat</li>
              <li>Innerwear</li>
              <li>Ethnic Wear</li>
            </ul>
          </Col>
          <Col lg={2} className="dropdown-list">
            <p>Girls</p>
            <ul>
              <li>Tops & Tees</li>
              <li>Dresses/Jumpsuits</li>
              <li>Clothing Sets</li>
              <li>Jeans</li>
              <li>Knit Bottoms</li>
              <li>Innerwear</li>
              <li>Shorts & Skirts</li>
              <li>TrackPants/Joggers</li>
              <li>Ethnic Wear</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KidsDropdown;
