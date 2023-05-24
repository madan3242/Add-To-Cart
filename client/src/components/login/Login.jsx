import React from "react";
import "./Login.css";
import { FloatingLabel, Form } from "react-bootstrap";
import { GrClose } from 'react-icons/gr'

const Login = ({toggleLogin}) => {
  return (
    <div className="login-form">
        <div className="form">
            <GrClose size={30} className="close-icon" onClick={toggleLogin} />
        </div>
      <h2 className="mb-4">Login</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
  );
};

export default Login;
