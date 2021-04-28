import React from 'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';
import { Link, Switch, Route } from 'react-router-dom';
import AllUsers from './AllUsers';

/**
 * COMPONENT
 */
export const Admin = (props) => {
  return (
    <div className="container-fluid ">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to={'/admin/users'} className="nav-link">
            <h1 className="display-5">Users</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={'/admin/addProduct'} className="nav-link">
            <h1 className="display-5">Products</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

/**
 * CONTAINER
 */

const mapState = (state) => {
  return {
    products: state.allProducts,
    users: state.allUsers,
  };
};

export default connect(mapState)(Admin);
