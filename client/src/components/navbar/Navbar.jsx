import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { userLogout } from "../../services/auth.services";
import { useDispatch } from "react-redux";

const HomeNavbar = ({toggleLogin, isloggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout(setIsLoggedIn))
  }
  
  return (
    <>
      <Navbar className="navbar" fixed="top">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>
              Add To Cart
          </Navbar.Brand>

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
              !isloggedIn ? <>
                <Button onClick={toggleLogin} variant="null">Login / SignUp</Button>
              </> : <>
                <Button variant="null" onClick={logout}>Logout</Button>
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
