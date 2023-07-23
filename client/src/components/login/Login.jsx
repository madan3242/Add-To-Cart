import React, { useState } from "react";
import "./Login.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { useDispatch } from 'react-redux'
import { login, signup } from "../../redux/user/user.action";
import Loader from "../Loader/Loader";

const Login = ({ toggleLogin, setIsAuthenticated }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  //login data
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  //signup data
  const [signupUserData, setSignupUserData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [isLogin, setIsLogin] = useState(true);
  //to handle the login data change
  const handleLoginChange = (e) => {
    setLoginUserData({
      ...loginUserData,
      [e.target.name]: e.target.value
    })
  }
  //to handle the signup data change
  const handleSignupChange = (e) => {
    setSignupUserData({
      ...signupUserData,
      [e.target.name]: e.target.value
    })
  }

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: loginUserData.email,
        password: loginUserData.password
      }
      dispatch(login(data, setIsAuthenticated, toggleLogin, setLoading))
    } catch (error) { }
  }

  const signupSubmit = async (e) => {
    e.preventDefault();
      try {
        const data = {
          name: signupUserData.name,
          email: signupUserData.email,
          password: signupUserData.password
        }
        dispatch(signup(data, setIsAuthenticated, toggleLogin, setLoading))
      } catch (error) {
        alert(JSON.stringify(error.message))
      }
  }

  return (
    <>
      <div className="login-form">
        <GrClose size={30} className="close-icon" onClick={toggleLogin} />
        {isLogin ? (
          <>
            <Form onSubmit={loginSubmit}>
            <h2 className="mb-4">Login</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" name="email" placeholder="Email address" onChange={handleLoginChange} />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleLoginChange} />
            </FloatingLabel>

            <div className="text-center">
              <Button variant="success" className="mb-2" type="submit">
                {!loading ? 'Login' : <Loader />}
              </Button>
              <p>
                Don't have an account ?{" "}
                <span
                  className="span-button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Signup
                </span>{" "}
              </p>
            </div>
            </Form>
          </>
        ) : (
          <>
            <Form onSubmit={signupSubmit}>
            <h2 className="mb-4">Signup</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" name="name" onChange={handleSignupChange} placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" name="email" onChange={handleSignupChange} placeholder="Email address" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" name="password" onChange={handleSignupChange} placeholder="Password" />
            </FloatingLabel>

            <div className="text-center">
              <Button variant="success" className="mb-2" type="submit">
                {!loading ? 'Signup' : <Loader />}
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
            </Form>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
