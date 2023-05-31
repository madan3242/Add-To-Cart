import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'

const HomeNavbar = ({toggleDropdown, toggleLogin, loggedIn}) => {
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
          <div className="navbar-buttons">
            {
              !loggedIn ? <>
                <Button onClick={toggleLogin} variant="null">Login / SignUp</Button>
              </> : <>
                <Button variant="null">Logout</Button>
                <AiOutlineUser size={20} onClick={navigate('/profile')} />
              </>
            }

            <AiOutlineHeart size={20} />
            <BsCart2 size={20} />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
