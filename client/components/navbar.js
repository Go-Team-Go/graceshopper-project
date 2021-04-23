import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid justify-content-between">
      <Link to="/home" className="navbar-brand">
        <img
          src="gracesipper.png"
          width="200"
          height="100"
          class="d-inline-block align-text-top"
        />
      </Link>

      {isLoggedIn ? (
        <div className="collapse navbar-collapse">
          {/* The navbar will show these links after you log in */}
          <ul className="nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" onClick={handleClick} className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="nav justify-content-end">
          {/* The navbar will show these links before you log in */}
          <ul className="nav ">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  </nav>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
