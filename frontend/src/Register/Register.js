import React from 'react'
import { useState } from 'react'

function Register() {
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
        console.log("yay");
        e.preventDefault();

        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password2: formData.password2
        };
    }
    const { errors } = formData 
    return (
        <>
            <div>
                Register Now
            </div>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={formData.name} error={errors.name} onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" value={formData.email} error={errors.email} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={formData.password} error={errors.password} onChange={handleChange} />
                <label htmlFor="password2">Confirm your Password:</label>
                <input id="password2" type="password" value={formData.password2} error={errors.password2} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Register
