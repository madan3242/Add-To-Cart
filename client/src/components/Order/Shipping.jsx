import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../redux/cart/cart.action";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [shipping, setShipping] = useState(shippingInfo);

  const shippingChangeHandler = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const shippingSubmitHandler = (e) => {
    e.preventDefault();
    if (shipping.phoneNo.length !== 10 && shipping.pinCode.length !== 6) {
      return;
    }
    dispatch(saveShippingInfo(shipping));
    navigate("/order/confirm");
  };

  return (
    <Container style={{ marginTop: "4rem" }}>
      <Row>
        <Col>
          <h2 className="my-3">Shipping Details</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={10} className="mx-auto">
          <Form style={{ margin: "0 10rem" }}>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  type="text"
                  name="address"
                  value={shipping?.address}
                  onChange={shippingChangeHandler}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="Bengaluru"
                  type="text"
                  name="city"
                  value={shipping?.city}
                  onChange={shippingChangeHandler}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  placeholder="Karnataka"
                  type="text"
                  name="state"
                  value={shipping?.state}
                  onChange={shippingChangeHandler}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  placeholder="India"
                  type="text"
                  name="country"
                  value={shipping?.country}
                  onChange={shippingChangeHandler}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                  placeholder="6 digit Pin Code"
                  type="text"
                  name="pinCode"
                  value={shipping?.pinCode}
                  onChange={shippingChangeHandler}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  placeholder="10 digit Mobile number"
                  type="text"
                  name="phoneNo"
                  value={shipping?.phoneNo}
                  onChange={shippingChangeHandler}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Button onClick={shippingSubmitHandler}>Submit</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Shipping;
