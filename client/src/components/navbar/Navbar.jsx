import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { userLogout } from "../../services/auth.services";
import { useDispatch } from "react-redux";
import MensDropdown from '../../components/dropdowns/MensDropdown'
import WomensDropdown from '../../components/dropdowns/WomensDropdown'
import KidsDropdown from '../../components/dropdowns/KidsDropdown'

const HomeNavbar = ({toggleLogin, isloggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);
  const [showKidsDropdown, setShowKidsDropdown] = useState(false);

  const toggleMenDropdown = () => {
    setShowMenDropdown(!showMenDropdown);
    setShowWomenDropdown(false);
    setShowKidsDropdown(false)
  }

  const toggleWomenDropdown = () => {
    setShowWomenDropdown(!showWomenDropdown);
    setShowMenDropdown(false)
    setShowKidsDropdown(false)
  }

  const toggleKidsDropdown = () => {
    setShowKidsDropdown(!showKidsDropdown);
    setShowMenDropdown(false)
    setShowWomenDropdown(false)
  }

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
            <Nav.Link onMouseEnter={toggleMenDropdown}>Mens</Nav.Link>
            <Nav.Link onMouseEnter={toggleWomenDropdown}>Womens</Nav.Link>
            <Nav.Link onMouseEnter={toggleKidsDropdown}>Kids</Nav.Link>
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

      {showMenDropdown && <MensDropdown toggleMenDropdown={toggleMenDropdown} />}
      {showWomenDropdown && <WomensDropdown toggleWomenDropdown={toggleWomenDropdown} />}
      {showKidsDropdown && <KidsDropdown toggleKidsDropdown={toggleKidsDropdown} />}
    </>
  );
};

export default HomeNavbar;
