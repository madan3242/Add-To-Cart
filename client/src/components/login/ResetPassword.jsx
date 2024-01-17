import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { resetPassword } from '../../redux/user/user.action';
import Loader from '../Loader/Loader';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const [passwords, setPasswords] = useState({
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(passwords.password === passwords.confirmPassword){
            dispatch(resetPassword(token, passwords, setLoading, navigate));
        } else {
            setError("Passwords don't match");
            toast("Passwords don't match");
        }
    }
  return (
    <>
        <div className="reset-container">
            <Form className='reset-form' onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control
                        type="password"
                        name="password"
                        value={passwords.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Confirm Password"
                    className="mb-3"
                >
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={passwords.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                    />
                </FloatingLabel>
                <div className="text-center">
                    <Button variant="success" type='submit' style={{ width: "75px"}}>
                        {loading ? <Loader size={'sm'} /> : 'Submit '}
                    </Button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default ResetPassword;