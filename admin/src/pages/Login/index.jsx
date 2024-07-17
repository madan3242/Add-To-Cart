import { useState } from "react";
import "./index.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { login, signup } from "../../redux/user/user.action";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  const loginSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        email: loginUserData.email,
        password: loginUserData.password
      }
      dispatch(login(data, setLoading, navigate, toast))
    } catch (error) { 
      toast(error.message)
    }
  }

  const signupSubmit = async (e) => {
    e.preventDefault();
      try {
        const data = {
          name: signupUserData.name,
          email: signupUserData.email,
          password: signupUserData.password
        }
        dispatch(signup(data, setLoading, navigate, toast))
      } catch (error) {
        toast(error.message)
      }
  }

  return (
    <>
      <div className="login-container">
      <div className="login-form">
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
              <Button variant="success" className="mb-2" type="submit"  style={{ width: "75px"}}>
                {!loading ? 'Login' : <Loader size={'sm'} />}
              </Button>
              <p>
                {"Don't have an account? "}
                <span
                  className="span-button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Signup
                </span>{" "} <br />
                <span
                  className="span-button"
                  onClick={() => navigate('/forgotpassword')}
                >
                  Forgot password?
                </span> 
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
              <Button variant="success" className="mb-2" type="submit" style={{ width: "75px"}}>
                {!loading ? 'Signup' : <Loader size={'sm'} />}
              </Button>
              <p>
                Already have an account ?{" "}
                <span
                  className="span-button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Login
                </span>
                <br />
                <span
                  className="span-button"
                  onClick={() => navigate('/forgotpassword')}
                >
                  Forgot password?
                </span> 
              </p>
            </div>
            </Form>
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default Login;
