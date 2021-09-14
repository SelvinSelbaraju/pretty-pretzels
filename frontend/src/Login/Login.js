import React from 'react'
import { useState } from 'react'

function Login() {
    const [formData, setFormdata] = useState(
        {
            email: "",
            password: "",
            errors: {}
        }
    )
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
    }
    const { errors } = formData 
    return (
        <>
            <h2>Login</h2>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" value={formData.email} error={errors.email} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={formData.password} error={errors.password} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login