import React from "react";
import { NavLink } from "react-router-dom";

import './navbar.styles.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link logo" to="/">
              Legends
            </NavLink>
          </li>
          
          <div className="auth-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
