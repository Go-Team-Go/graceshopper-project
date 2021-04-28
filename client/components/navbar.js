import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, cart, isAdmin }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid justify-content-between">
      <Link to="/home" className="navbar-brand">
        <img
          src="gracesipper.png"
          width="200"
          height="100"
          className="d-inline-block align-text-top"
        />
      </Link>

      {isLoggedIn ? (
        <div className=" navbar-collapse">
          {/* The navbar will show these links after you log in */}
          <ul className="nav">
            <li className="nav-item">
              <Link to="#" onClick={handleClick} className="nav-link">
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                My Cart{' '}
                {cart.reduce(
                  (total, current) => (total += current.quantity),
                  0,
                )}
              </Link>
            </li>
            <li className="nav-item">
              {isAdmin ? (
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              ) : (
                <br></br>
              )}
            </li>
          </ul>
        </div>
      ) : (
        <div className="nav justify-content-end">
          <ul className="nav">
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
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                My Cart{' '}
                {cart.reduce(
                  (total, current) => (total += current.quantity),
                  0,
                )}
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
    isAdmin: state.auth.admin,
    cart: state.cart,
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
