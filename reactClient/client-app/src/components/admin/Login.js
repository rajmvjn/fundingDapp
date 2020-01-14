import React, { useState } from 'react';

export const Login = () => {

    const [authData, setAuthData] = useState({
       email: '',
       password:'' 
    })

    const { email, password } = authData;

    const updateAuthData = e => setAuthData({ ...authData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form onSubmit = { e => onSubmit(e) }>
                <div className="form-group">
                    <label >Email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="exampleInputEmail1" aria-describedby="emailHelp" 
                        onChange = {e => updateAuthData(e)} 
                        required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label m>Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange = {e => updateAuthData(e)} />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
