import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/shipping");
  };
  
  return (
    <>
      <Container style={{ marginBottom: "23rem", marginTop: "4rem" }}>
        {cartItems.length > 0 ? (
          <>
            <Row className="mx-4">
              <Col className="my-4">
                <h1>
                  <AiOutlineShoppingCart /> Cart
                </h1>
              </Col>
            </Row>
            <Row className="mx-4 ">
              <table>
                <thead>
                  <tr className="text-center">
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    return <CartRow item={item} key={item.product} />;
                  })}
                </tbody>
              </table>
              <Row>
                <Col>
                  <div style={{ float: "right" }}>
                    <p>
                      {cartItems.length > 0 && (
                        <>
                          Total:{" "}
                          {`₹${cartItems.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                          )}`}
                        </>
                      )}
                    </p>
                    <Button onClick={checkoutHandler}>Check Out</Button>
                  </div>
                </Col>
              </Row>
            </Row>
          </>
        ) : (
          <>
            <h2 className="text-center">
              <AiOutlineShoppingCart /> &nbsp;Cart is empty{" "}
            </h2>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
