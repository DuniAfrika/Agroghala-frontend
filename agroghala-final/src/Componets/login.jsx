// React imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// LoginForm component
function LoginForm() {
  // State variables to store form data, error, and success messages
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // React Router's navigate function to redirect after login
  const navigate = useNavigate();

  // Function to handle form input changes
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to handle social logins (e.g., Twitter, Facebook)
  const handleSocialLogin = (provider, accessToken, accessSecret) => {
    // Implement social login logic here
  };

  // Function to handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();

    // Check if email and password are provided
    if (!formData.email || !formData.password) {
      setError({ message: 'Please enter your email and password' });
      return;
    }

    try {
      // Send login request to the backend API
      const response = await axios.post('http://localhost:8000/api/login/', {
        email: formData.email,
        password: formData.password,
      });

      // Retrieve JWT token from the response
      const authToken = response.data.access;
      // Save the JWT token in the browser's local storage for future authenticated requests
      localStorage.setItem('authToken', authToken);

      // Fetch the authenticated user's data using the JWT token
     {/* const userResponse = await axios.get('http://localhost:8000/api/token/', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      // Save the user data in the local storage
      const user = userResponse.data;
    localStorage.setItem('user', JSON.stringify(user));*/}

      // Display login success message
      console.log('Login success');
      setSuccess({ message: 'You have been logged in successfully' });

      // Redirect to the homepage after successful login
      navigate('/');
    } catch (error) {
      // Handle login error and display appropriate error message
      console.error('Error logging in:', error);
      setError({ message: 'Invalid email or password' });
    }
  };

  // Fetch CSRF token on component mount (when the component is rendered)
  useEffect(() => {
    async function fetchCSRFToken() {
      try {
        // Send request to the backend to get the CSRF token
        const response = await axios.get('http://localhost:8000/api/csrf/');
        const csrfToken = response.data.csrfToken;

        // Save the CSRF token in a custom header for future POST requests
        axios.defaults.headers.post['X-CSRFToken'] = csrfToken;
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    }

    // Call the function to fetch the CSRF token
    fetchCSRFToken();
  }, []);

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

              {/* Social login buttons */}
             {/* <div className="border-top py-3">
                {<SocialAuth onClick={handleSocialLogin} />}
                </div>*/}

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
