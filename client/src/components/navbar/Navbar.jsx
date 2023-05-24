import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>
              Fashion Cart
          </Navbar.Brand>
          <div className="d-flex">
            <Nav.Link>Mens</Nav.Link>
            <Nav.Link>Womens</Nav.Link>
            <Nav.Link>Kids</Nav.Link>
          </div>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search for products"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          </Container>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
