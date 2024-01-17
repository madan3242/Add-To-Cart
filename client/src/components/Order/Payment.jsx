import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getApiKey, stripePayment } from "../../services/stripe";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const [stripeApiKey, setStripeApiKey] = useState("");
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    getApiKey(setStripeApiKey);
    stripePayment(orderInfo.total, setClientSecret);
  }, []);

  const options = {
    clientSecret: `${clientSecret}`,
  };

  return (
    <>
      <Container style={{ height: "410px", marginTop: "4rem" }}>
        <Row>
          <Col lg={5} className="mx-auto py-4">
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "15px",
                borderRadius: "25px",
              }}
            >
              {clientSecret && (
                <Elements stripe={loadStripe(stripeApiKey)} options={options}>
                  <CheckoutForm orderInfo={orderInfo} />
                </Elements>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
