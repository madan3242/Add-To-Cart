import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./navbar.css";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/user.action";

const HomeNavbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <>
      <Navbar className="navbar" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: "pointer"}}>
              Add To Cart
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
          >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Add To Cart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => navigate('/products')}>Products</Nav.Link>
                  <Nav.Link onClick={() => navigate('/products')}>Mobiles</Nav.Link>
                  <Nav.Link >Electronics</Nav.Link>
                  <Nav.Link >Fashion</Nav.Link>
                  <Form>
                    <Form.Control
                      type="search"
                      placeholder="Search for products"
                      className="me-2"
                      aria-label="Search"
                      style={{ width: "300px"}}
                    />
                  </Form>
                  <div style={{ display: "flex", placeItems: "center", padding: "0 15px"}}>
                    {
                      !isAuthenticated ? <>
                        <Button onClick={() => navigate('/login')} variant="null">Login / Signup</Button>
                      </> : <>
                        <Button variant="null" onClick={() => dispatch(logout(setIsAuthenticated))} >Logout</Button>
                        <AiOutlineUser size={25} onClick={() => navigate('/profile')} style={{ margin: "0 10px"}} />
                      </>
                    }
                    <AiOutlineHeart size={25} onClick={() => navigate('/wishlist')} style={{ margin: "0 10px"}} />
                    <BsCart2 size={25} onClick={() => navigate('/cart')} style={{ margin: "0 1px"}} />
                  </div>
                </Nav>
              </Offcanvas.Body>
          </Navbar.Offcanvas>

          

          
          
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
