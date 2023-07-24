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
  const [ success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSocialLogin = (provider, accessToken, accessSecret) => {
    if (provider === 'twitter') {
      // Make an API request to your Django backend
      axios
        .post('http://localhost:8000/api-auth/drf/', {
          access_token: accessToken,
          access_secret: accessSecret,
        })
        .then((response) => {
          // Handle the API response
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error cases
          console.error(error);
        });
    } else {
      // Handle other social logins (e.g., Facebook)
      // Make an API request or perform any necessary actions
    }};

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!formData.email) {
      setError({ field: 'email', message: 'Please enter your email' });
      return;
    }
    if (!formData.password) {
      setError({ field: 'password', message: 'Enter your password' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData);
      
      // Save the token to local storage
      localStorage.setItem('token', response.data.access);

      const user = response.data.NewUser; // Replace 'user' with the correct key containing user information in the response
      // Save user name to localstorage
      localStorage.setItem('user', JSON.stringify(user));
      // Handle successful login, e.g., redirect or set authentication state
      console.log('Login success:', response.data);
      setSuccess({message: "You have been logged in successfuly"})
      navigate('/');
    } catch (error) {
      // Handle error response
      setError({ message: "Invalid email or password"});
    }
  };

  return (
    <>
    
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <Link to='/'>
          <h2 className='font-bold text-2x1 mt-4 mb-2 px-3'>AGROGHALA</h2>
          </Link>
          <legend className='border-bottom p-3'>Login</legend>
          <form className="d-block" onSubmit={handleLogin}>
          <div className='px-5'>{error && !error.field && <div className="alert alert-danger mt-3 text-center">{error.message}</div>}</div>
            <div className={`form-group pt-3 ${error ? 'has-error' : ''}`}>
              <input
                type="email"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
              {error && error.field === 'email' && <div className="invalid-feedback">{error.message}</div>}
            </div>

            <div className={`form-group pt-3 ${error ? 'has-error' : ''}`}>
              <input
                type="password"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
              {error && error.field === 'password' && <div className="invalid-feedback">{error.message}</div>}
            </div>
            <div className='d-flex justify-content-around my-3'>
               <button type="submit" className="btn btn-outline-success">Log in</button> 
            </div>

            <div className='border-top py-3'>
              {<SocialAuth onClick={handleSocialLogin} />}
            </div>
            
            <p className='text-center'>Don't have an account? <Link className="text-success" to='/signup'>Sign up</Link></p>

          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
