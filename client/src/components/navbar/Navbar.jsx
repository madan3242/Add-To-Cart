import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

const HomeNavbar = ({toggleDropdown, toggleLogin}) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="navbar" fixed="top">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>
              Add To Cart
          </Navbar.Brand>

          <div className="d-flex">
            <Nav.Link onClick={toggleDropdown}>Mens</Nav.Link>
            <Nav.Link onClick={toggleDropdown}>Womens</Nav.Link>
            <Nav.Link onClick={toggleDropdown}>Kids</Nav.Link>
          </div>

          <Form>
            <Form.Control
              type="search"
              placeholder="Search for products"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button onClick={toggleLogin} variant="null">Login / SignUp</Button>
          </Container>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
