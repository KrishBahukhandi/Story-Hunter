import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Validation from "./SignupValiation"; // File name corrected to match the import
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));  // Performing validation

    // Check if there are no errors before sending data to the server
    if (!errors.name && !errors.email && !errors.password) {
      // Sending a POST request to your backend API
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          // On success, navigate to the home page or login page
          navigate('/');
        })
        .catch(err => console.log("Error:", err));
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder='Enter your name' name='name' onChange={handleInput} className='form-control rounded-0'></input>
            <span>{errors.name && <span className='text-danger'>{errors.name}</span>}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter email' name='email' onChange={handleInput} className='form-control rounded-0'></input>
            <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'></input>
            <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
          </div>
          <button type="submit" className='btn btn-success w-100'>Sign up</button>
          <p>You agree to our terms and policies</p>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
