import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);


  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Remove user name from local storage
    localStorage.removeItem('user');
    setAuthenticated(false);
  };

  const renderContent = () => {
        return (
            <nav className='shadow-sm'>
                <Link to='/'>
                  <h3 className='logo font-bold'>AGROGHALA</h3>
                </Link>
                <a className='menu-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list text-green-600" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </a>
                <ul className='nav-links font-medium navbar-style'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/blogs'><li>Blogs</li></Link>
                    <Link to='/contact'><li>Contact Us</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    {authenticated ? (
                        <Link to='/logout' onClick={handleLogout}>
                        <li>Logout</li>
                        </Link>
                    ) : (
                        <>
                        <Link to='/signup'>
                            <li>Sign Up</li>
                        </Link>
                        <Link to='/signin'>
                            <li>Sign In</li>
                        </Link>
                        </>
                    )}
                </ul>
            </nav>
          );
    }

  return (
    <div>
      {renderContent()}
    </div>
  );


}

export default Navbar;