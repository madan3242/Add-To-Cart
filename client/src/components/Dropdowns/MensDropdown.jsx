import React from 'react'
import './Dropdown.css'
import { Col, Container, Row } from 'react-bootstrap'

const MensDropdown = ({toggleMenDropdown}) => {
  return (
    <div className='navbar-dropdown' onMouseLeave={toggleMenDropdown}>
      <Container>
      <Row>
        <Col lg={2} className='dropdown-list'>
          <p>Topwear</p>
          <ul>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Polos</li>
            <li>T-Shirts</li>
            <li>Jackets</li>
            <li>Hoodies & Sweatshirts</li>
          </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
          <p>Bottomwear</p>
          <ul>
            <li>Casual Trousers</li>
            <li>Formal Trousers</li>
            <li>Jeans</li>
            <li>Track Pants</li>
            <li>Shorts & 3/4ths</li>
          </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
          <p>Activewear</p>
          <ul>
            <li>Polos</li>
            <li>Sports T-Shirts</li>
            <li>Track Pants</li>
            <li>Sports shoes</li>
          </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
          <p>Ethnic</p><ul>
            <li>Kurtas</li>
            <li>Waistcoats</li>
            <li>Pyjamas</li>
          </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
          <p>Winterwear</p>
          <ul>
            <li>Hoodies & Sweatshirts</li>
            <li>Sweaters & Cardigans</li>
            <li>Jackets</li>
          </ul>
        </Col>
        <Col lg={2} className='dropdown-list'>
          <p>Innerwear</p>
          <ul>
            <li>Boxers</li>
            <li>Briefs</li>
            <li>Vests</li>
            <li>Loungewear</li>
          </ul>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default MensDropdown