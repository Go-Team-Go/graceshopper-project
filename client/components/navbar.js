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
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/products">All Products</Link>
          <Link to="/cart">
            My Cart{' '}
            {cart.reduce((total, current) => (total += current.quantity), 0)}
          </Link>
        </div>
      ) : (
        <div className="nav justify-content-end">
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/products">All Products</Link>
          <Link to="/cart">
            My Cart{' '}
            {cart.reduce((total, current) => (total += current.quantity), 0)}
          </Link>
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
