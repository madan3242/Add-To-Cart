import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WomensDropdown = ({toggleWomenDropdown}) => {
  return (
    <div className="navbar-dropdown" onMouseLeave={toggleWomenDropdown}>
      <Container>
        <Row>
        <Col lg={2} className='dropdown-list'>
            <p>Ethnic & Fusion Wear</p>
            <ul>
                <li>Kurtas & Kurtis</li>
                <li>Kurta Sets</li>
                <li>Ethnic Dresses</li>
                <li>Tops & Tunics</li>
                <li>Leggings & Churidars</li>
                <li>Pants & Palazzos</li>
                <li>Skirts</li>
                <li>Dupattas & Stoles</li>
            </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
            <p>Western Wear</p>
            <ul>
                <li>Tops & Tees</li>
                <li>Dresses & Jumpsuits</li>
                <li>Jeans & Jeggings</li>
                <li>Shorts & Skirts</li>
                <li>Trousers</li>
                <li>Jackets & Shrugs</li>
            </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
            <p>Lingerie/Sleepwear</p>
            <ul>
                <li>Bras</li>
                <li>Briefs/Panties</li>
                <li>Cami & Slips</li>
                <li>Shapewear</li>
                <li>Nightwear</li>
            </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
            <p>SportsWear</p>
            <ul>
                <li>Tops & Tees</li>
                <li>Sports Bra</li>
                <li>Leggings</li>
                <li>Joggers & Tracks</li>
                <li>Sweatshirts & Jackets</li>
            </ul>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WomensDropdown;
