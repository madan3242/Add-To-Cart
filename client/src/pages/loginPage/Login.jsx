import React, { useState } from 'react'

export const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    
    const submitHandler = () => {

    }
  return (
    <div>
        <h2>Add To Cart</h2>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="email" className="form-control" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" />
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}
