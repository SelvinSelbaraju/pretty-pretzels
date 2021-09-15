import React from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import './Login.css'

function Login(props) {
    const [formData, setFormdata] = useState(
        {
            email: "",
            password: "",
            errors: {}
        }
    )

    if (props.auth.isAuthenticated) {
        props.history.push("/dashboard");
    }

    const handleChange = e => {
        setFormdata({...formData, [e.target.id]: e.target.value})
    }
    const handleSubmit = e => {
        console.log("yay");

        e.preventDefault();

        const userData = {
            email: formData.email,
            password: formData.password
        };

        props.loginUser(userData);

    }
    const errors = props.errors; 
    return (
        <>
            <h2 className="login-title">Login</h2>
            <form className="login-form" noValidate onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <span className="red-text">{errors.email}{errors.emailnotfound}</span>
                <input id="email" type="text" value={formData.email} error={errors.email} onChange={handleChange} /><br />
                <label htmlFor="password">Password:</label>
                <span className="red-text">{errors.password}{errors.passwordincorrect}</span><br />
                <input id="password" type="password" value={formData.password} error={errors.password} onChange={handleChange} /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

// Define PropTypes
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login)