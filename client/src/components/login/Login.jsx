import React, { useState } from "react";
import "./Login.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

const Login = ({ toggleLogin }) => {
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const [signupUserData, setSignupUserData] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="login-form">
        <GrClose size={30} className="close-icon" onClick={toggleLogin} />
        {isLogin ? (
          <>
            <h2 className="mb-4">Login</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <div className="text-center">
              <Button variant="success" className="mb-2">
                Login
              </Button>
              <p>
                Don't have an account ?{" "}
                <span
                  className="span-button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Sign up
                </span>{" "}
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-4">Signup</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingConfirmPassword"
              label="Confirm Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Confirm Password" />
            </FloatingLabel>

            <div className="text-center">
              <Button variant="success" className="mb-2">
                Signup
              </Button>
              <p>
                Already have an account ?{" "}
                <span
                  className="span-button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Login
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
