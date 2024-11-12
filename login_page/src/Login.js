// login_page/src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import axios from 'axios';  // Import axios for API requests
import Validation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();  // Use useNavigate for programmatic navigation

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if (Object.keys(errors).length === 0) {
            // Send login request to the backend
            axios
                .post('http://localhost:8081/login', {
                    email: values.email,
                    password: values.password
                })
                .then((response) => {
                    if (response.data.message === "Login successful") {
                        // Navigate to the Landing Page (React-based page)
                        navigate('/landing');  // This will route to the Landing component
                    } else {
                        setErrors({ login: "Invalid credentials" });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setErrors({ login: "Server error. Please try again later." });
                });
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={values.email}
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        <span>{errors.email && <span className="text-danger">{errors.email}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={values.password}
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        <span>{errors.password && <span className="text-danger">{errors.password}</span>}</span>
                    </div>
                    {errors.login && <div className="text-danger">{errors.login}</div>}
                    <button type="submit" className='btn btn-success w-100'>Login</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
