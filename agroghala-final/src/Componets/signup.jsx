import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from './socials';
import 'bootstrap/dist/css/bootstrap.min.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
    confirm_password: '',
  });

  const navigate = useNavigate()
  const [isInputActive, setInputActive] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };
  const handleSocialLogin = (provider, accessToken, accessSecret) => {
    if (provider === 'google') {
      // Make an API request to your Django backend
      axios
        .post('http://localhost:8000/apiauth/', {
          access_token: accessToken,
          access_secret: accessSecret,
        })
        .then((response) => {
          // Handle the API response
          console.log(response.data);

          if (response.data.success) {
            // Redirect the user or perform other actions
            window.location.href = '/dashboard';
          } else {
            // Display an error message to the user
            console.error(response.data.error);
          }
        })
        .catch((error) => {
          // Handle error cases
          console.error(error);
        });
    } else {

    }};

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Reset any previous errors
    setError(null);

    // Perform validation checks
    if (!formData.first_name) {
      setError({ field: 'first_name', message: 'First name is required.' });
      return;
    }
    if (!formData.last_name) {
      setError({ field: 'last_name', message: 'Last name is required.' });
      return;
    }
    if (!formData.email) {
      setError({ field: 'email', message: 'Email is required.' });
      return;
    }
    if (!formData.phone_number) {
      setError({ field: 'phone_number', message: 'Phone number is required.' });
      return;
    }
    if (!formData.address) {
      setError({ field: 'address', message: 'Address is required.' });
      return;
    }
    if (!formData.password) {
      setError({ field: 'password', message: 'Password is required.' });
      return;
    }
    if (formData.password !== formData.confirm_password) {
      setError({
        field: 'confirm_password',
        message: 'Passwords do not match.',
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/signup/', formData);
      console.log('Sign up successful',response.data); // Handle the response as needed
      navigate('/signin');
      // Reset the form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        password: '',
        confirm_password: '',
      });
      setError(null); // Clear any previous error message
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        setError({ field: 'server', message: data.message || 'Registration failed. Please try again.' });
      } else {
        setError({ field: 'server', message: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <>
        <div className='px-5 pt-5'>{error && !error.field && <div className="alert alert-danger mt-3 text-center">{error.message}</div>}</div>
    <div className="d-flex justify-content-center align-items-center vh-100 m-5 contain">
      <div className="card shadow-lg px-3 my-5 bg-white rounded row">
          <div className="card-body">
          <Link to='/'>
          <h2 className='font-bold text-2x1 mt-4 mb-2 px-3'>AGROGHALA</h2>
          </Link>
              <legend className='font-verdana p-3 border-bottom'>Sign up</legend>
              <form className="d-block" onSubmit={handleRegistration}>
            <div className={`form-group pt-3 ${isInputActive ? 'has-success' : ''}`}>
              <input
                type="text"
                className={`form-control ${error && error.field === 'first_name' ? 'is-invalid' : ''}`} 
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="First Name"
                required
              />
              {error && error.field === 'first_name' && <div className="invalid-feedback">{error.message}</div>}
            </div>

            <div className={`form-group pt-3 ${isInputActive ? 'has-success' : ''}`}>
              <input
                type="text"
                className={`form-control ${error && error.field === 'last_name' ? 'is-invalid' : ''}`}
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Last Name"
                required
              />
              {error && error.field === 'last_name' && <div className="invalid-feedback">{error.message}</div>}
            </div>

            <div className={`form-group pt-3 ${isInputActive ? 'has-success' : ''}`}>
              <input
                type="email"
                className={`form-control ${error && error.field === 'email' ? 'is-invalid' : ''}`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Email"
                required
              />
              {error && error.field === 'email' && <div className="invalid-feedback">{error.message}</div>}
            </div>

            <div className={`form-group pt-3 ${isInputActive ? 'has-success' : ''}`}>
              <input
                type="text"
                className={`form-control ${error && error.field === 'phone_number' ? 'is-invalid' : ''}`}
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Phone Number"
                required
              />
              {error && error.field === 'phone_number' && <div className="invalid-feedback">{error.message}</div>}
            </div>

            <div className={`form-group pt-3 ${isInputActive ? 'has-success' : ''}`}>
              <input
                type="text"
                className={`form-control ${error && error.field === 'address' ? 'is-invalid' : ''}`}
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Address"
                required
              />
              {error && error.field === 'address' && <div className="invalid-feedback">{error.message}</div>}
            </div>

            <div className={`form-group pt-3 ${isInputActive ? 'has-success' : ''}`}>
              <input
                type="password"
                className={`form-control ${error && error.field === 'password' ? 'is-invalid' : ''}`}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Password"
                required
              />
              {error && error.field === 'password' && <div className="invalid-feedback">{error.message}</div>}
            </div>

            <div className={`form-group py-3 ${isInputActive ? 'has-success' : ''}`}>
              <input
                type="password"
                className={`form-control ${error && error.field === 'confirm_password' ? 'is-invalid' : ''}`}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Confirm Password"
                required
              />
              {error && error.field === 'confirm_password' && <div className="invalid-feedback">{error.message}</div>}
            </div>
            <div className='d-flex justify-content-around my-3'>
                <button type="submit" className="btn btn-outline-success px-5">Register</button>
            </div>

            {error && error.field === 'server' && <div className="invalid-feedback">{error.message}</div>}
            
            <div className='border-top py-3'>
              {<SocialAuth  onClick={(provider, accessToken, accessSecret) => handleSocialLogin(provider, accessToken, accessSecret)} />}
            </div>

            <p className='text-center pb-3'>
              Already have an account? <Link className="text-success" to='/signin'>Log in</Link>
            </p>
            
          </form>
          </div>
      </div>
    </div>
    </>
  );
};

export default RegistrationForm;