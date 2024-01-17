import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/user/user.action";
import "./navbar.css";
import { Badge, Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'

const HomeNavbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(keyword.trim()){
      navigate(`/products/${keyword}`)
    }else {
      navigate(`/products`)
    }
  }
  
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
                  <Nav.Link onClick={() => navigate('/products')} style={{ cursor: "pointer"}}>Products</Nav.Link>
                  <Nav.Link onClick={() => navigate('/products')} style={{ cursor: "pointer"}}>Mobiles</Nav.Link>
                  <Nav.Link onClick={() => navigate('/products')} style={{ cursor: "pointer"}}>Electronics</Nav.Link>
                  <Nav.Link onClick={() => navigate('/products')} style={{ cursor: "pointer"}}>Fashion</Nav.Link>
                  <Form style={{ display: "flex", placeItems: "center"}} onSubmit={handleSubmit}>
                    <Form.Control
                      type="search"
                      placeholder="Search for products"
                      className="me-2"
                      aria-label="Search"
                      style={{ width: "300px"}}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </Form>
                  <div style={{ display: "flex", placeItems: "center", padding: "0 15px"}}>
                    {
                      !isAuthenticated ? <>
                        <Button onClick={() => navigate('/login')} variant="null" >Login / Signup</Button>
                      </> : <>
                        <Button variant="null" onClick={() => dispatch(logout(navigate, setIsAuthenticated))} >Logout</Button>
                        <AiOutlineUser size={25} onClick={() => navigate('/profile')} style={{ margin: "0 10px", cursor: "pointer"}} />
                      </>
                    }
                    <AiOutlineHeart size={25} onClick={() => navigate('/wishlist')} style={{ margin: "0 10px", cursor: "pointer" }} />
                    <div style={{ position: "relative"}}>
                      <BsCart2 size={25} onClick={() => navigate('/cart')} style={{ margin: "0 1px", cursor: "pointer"}} />
                      {cartItems?.length > 0 && <Badge pill style={{ position: "absolute", top: "-12px", left: "3px" }}>{cartItems.length}</Badge>}
                    </div>
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
