import React, { useState, useEffect } from "react";
import "../styles/navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Remove user name from local storage
    localStorage.removeItem("user");
    setAuthenticated(false);
  };

  const renderContent = () => {
    return (
      <nav className="">
        <Link to="/">
          <h3 className="logo">AGROGHALA</h3>
        </Link>

        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/blogs">
            <li>Blogs</li>
          </Link>
          <Link to="/contact">
            <li className="truncate">Contact Us</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {authenticated ? (
            <Link to="/logout" onClick={handleLogout}>
              <li>Logout</li>
            </Link>
          ) : (
            <>
              <Link to="/signup">
                <li>Sign Up</li>
              </Link>
              <Link to="/signin">
                <li>Sign In</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    );
  };

  return <div>{renderContent()}</div>;
}

export default Navbar;
