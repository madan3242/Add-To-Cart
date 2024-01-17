import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country} - ${shippingInfo.pinCode}`;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = subtotal > 1000 ? 0 : 40;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCharges + tax;

  const proceedToPayment = () => {
    const data = {
        subtotal,
        shippingCharges,
        tax,
        total
    }
    sessionStorage.setItem('orderInfo', JSON.stringify(data))
    navigate('/process/payment')
  }

  return (
    <>
      <Container style={{ marginTop: "4rem" }}>
        <Row>
          <Col lg={6} className="mx-auto my-3">
            <Card>
              <Card.Header>
                <h2>Confirm Order</h2>
              </Card.Header>
              <Card.Body>
                <Card.Title>Shipping Info:</Card.Title>
                <Row>
                  <Col lg={6}>
                    <p>Name: {user.name}</p>
                  </Col>
                  <Col lg={6}>
                    <p>Phone Number: {shippingInfo.phoneNo}</p>
                  </Col>
                  <Col>
                    <p>Address: {address}</p>
                  </Col>
                </Row>
                <Card.Title className="mt-2">Your Cart Info:</Card.Title>
                <Row>
                  <table className="w-100 text-center">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cartItems &&
                      cartItems.map((item) => {
                        return (
                            <tr key={item.product}>
                              <td style={{ cursor: "pointer" }}>
                                <img src={item.image} height={100} alt="" onClick={() => navigate(`/product/${item.product}`)} />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.quantity}N</td>
                              <td>₹{item.quantity * item.price}</td>
                            </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Row>
                <Card.Title className="mt-2">Order summary:</Card.Title>
                <Row>
                  <Col style={{ textAlign: "right" }}>
                    <p>Subtotal: ₹{subtotal}</p>
                    <p>Shipping Charges: ₹{shippingCharges}</p>
                    <p>GST: ₹{tax}</p>
                    <p>Total: ₹{total}</p>
                    <Button onClick={proceedToPayment}>Proceed To Payment</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConfirmOrder;
