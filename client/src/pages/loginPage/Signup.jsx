import React, { useState } from 'react'
import './Login.css'

export const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const inputHandler = (e) => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
    }

  const submitHandler = (e) => {
    e.preventDefault();
}
  return (
    <div>
        <div className="loginContainer">
            <div className="form">
                <form onSubmit={submitHandler}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="">Name</label>
                    <input 
                        type="text" 
                        className="form-input"
                        placeholder="Please enter your full name"
                        onChange={inputHandler}
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="">Email</label>
                    <input 
                        type="email" 
                        className="form-input"
                        placeholder="Please enter your email"
                        onChange={inputHandler}
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="">Password</label>
                    <input 
                        type="password" 
                        className="form-input"
                        placeholder="Please enter your password"
                        onChange={inputHandler}
                        name="password"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="">Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-input"
                        placeholder="Please re-enter your password"
                    />
                </div>
                <input className="btn" type="submit" value="Signup" />
            </form>
            </div>
        </div>
    </div>
  )
}
