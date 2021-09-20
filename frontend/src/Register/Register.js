import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { registerUser } from '../actions/authActions';
import classnames from 'classnames';
import './Register.css';

function Register(props) {
    const [formData, setFormdata] = useState(
        {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    )
    const handleChange = e => {
        setFormdata({...formData, [e.target.id]: e.target.value})
    }
    const handleSubmit = e => {
        console.log(errors);
        e.preventDefault();

        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password2: formData.password2
        };

        props.registerUser(userData, props.history);
    }
    const errors = props.errors

    if (props.auth.isAuthenticated) {
        props.history.push("/dashboard");
    }
    return (
        <>
            <h2 className="register-title">Register Now</h2>
            <form className="register-form" noValidate onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <span className="red-text">{errors.name}</span>
                <input id="name" type="text" value={formData.name} error={errors.name} className={classnames("", {invalid: errors.name})} onChange={handleChange} /><br />
                <label htmlFor="email">Email:</label>
                <span className="red-text">{errors.email}</span>
                <input id="email" type="text" value={formData.email} error={errors.email} className={classnames("", {invalid: errors.email})} onChange={handleChange} /><br />
                <label htmlFor="password">Password:</label>
                <span className="red-text">{errors.password}</span>
                <input id="password" type="password" value={formData.password} error={errors.password} className={classnames("", {invalid: errors.password})} onChange={handleChange} /><br />
                <label htmlFor="password2">Confirm your Password:</label>
                <span className="red-text">{errors.password2}</span>
                <input id="password2" type="password" value={formData.password2} error={errors.password2} className={classnames("", {invalid: errors.password2})} onChange={handleChange} /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

// Defining types of props 
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};


// Allows us to get state from redux and map it to props which we can use in the component
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
