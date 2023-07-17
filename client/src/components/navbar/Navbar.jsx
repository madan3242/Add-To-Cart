import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./navbar.css";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/user.action";

const HomeNavbar = ({toggleLogin, isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <>
      <Navbar className="navbar" fixed="top">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>
              Add To Cart
          </Navbar.Brand>

          {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

            </Offcanvas.Body>
          </Navbar.Offcanvas> */}

          <div className="d-flex">
            <Nav.Link >Mens</Nav.Link>
            <Nav.Link >Womens</Nav.Link>
            <Nav.Link >Kids</Nav.Link>
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
              !isAuthenticated ? <>
                <Button onClick={toggleLogin} variant="null">Login / SignUp</Button>
              </> : <>
                <Button variant="null" onClick={() => dispatch(logout(setIsAuthenticated))}>Logout</Button>
                <AiOutlineUser size={20} onClick={() => navigate('/profile')} />
              </>
            }

            <AiOutlineHeart size={20} onClick={() => navigate('/wishlist')} />
            <BsCart2 size={20} onClick={() => navigate('/cart')} />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
