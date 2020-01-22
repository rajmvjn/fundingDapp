import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authenticate } from '../../actions/auth';

const Login = ( {authenticate, isAuthenticated} ) => {

    const [authData, setAuthData] = useState({
       email: '',
       password: '' 
    })

    const { email, password } = authData;

    const updateAuthData = e => setAuthData({ ...authData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();        
        authenticate({ email, password });
    }

    if(isAuthenticated){
        return <Redirect to="/createfundrequest" />
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
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange = {e => updateAuthData(e)} />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect( mapStateToProps, { authenticate } )(Login);
