import React, { useState } from 'react';
import axios from 'axios';
import SocialAuth from './socials';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSocialLogin = (provider, accessToken, accessSecret) => {
    // Handle social logins (e.g., Twitter, Facebook)
    // Make an API request or perform any necessary actions
    // This function should be modified to handle different social providers
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setError({ message: 'Please enter your email and password' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: formData.email,
        password: formData.password,
      });

      const authToken = response.data.access; // JWT token
      localStorage.setItem('authToken', authToken);

      // Fetch the authenticated user's data
      const userResponse = await axios.get('http://localhost:8000/api/user/', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const user = userResponse.data;
      localStorage.setItem('user', JSON.stringify(user));

      console.log('Login success:', user);
      setSuccess({ message: 'You have been logged in successfully' });
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setError({ message: 'Invalid email or password' });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <Link to="/">
              <h2 className="font-bold text-2xl mt-4 mb-2 px-3">AGROGHALA</h2>
            </Link>
            <legend className="border-bottom p-3">Login</legend>
            <form className="d-block" onSubmit={handleLogin}>
              <div className="px-5">
                {error && !error.field && (
                  <div className="alert alert-danger mt-3 text-center">
                    {error.message}
                  </div>
                )}
              </div>
              <div
                className={`form-group pt-3 ${
                  error ? 'has-error' : ''
                }`}
              >
                <input
                  type="email"
                  className={`form-control ${
                    error ? 'is-invalid' : ''
                  }`}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
                {error && error.field === 'email' && (
                  <div className="invalid-feedback">{error.message}</div>
                )}
              </div>

              <div
                className={`form-group pt-3 ${
                  error ? 'has-error' : ''
                }`}
              >
                <input
                  type="password"
                  className={`form-control ${
                    error ? 'is-invalid' : ''
                  }`}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
                {error && error.field === 'password' && (
                  <div className="invalid-feedback">{error.message}</div>
                )}
              </div>
              <div className="d-flex justify-content-around my-3">
                <button type="submit" className="btn btn-outline-success">
                  Log in
                </button>
              </div>

              <div className="border-top py-3">
                {<SocialAuth onClick={handleSocialLogin} />}
              </div>

              <p className="text-center">
                Don't have an account?{' '}
                <Link className="text-success" to="/signup">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
