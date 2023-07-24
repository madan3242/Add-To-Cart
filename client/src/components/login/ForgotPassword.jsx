import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { forgotPassword } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  }
  
  return (
    <>
      <div className="reset-container">
        <Form className="reset-form" onSubmit={handleSubmit}>
          <h2 className="mb-4">Forgot Password</h2>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </FloatingLabel>
          <div className="text-center">
            <Button variant="success" className="mb-2" type="submit">
              Reset Password
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
