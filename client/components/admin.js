import React from 'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const Admin = (props) => {
  return (
    <div className="admin-dropdown">
      <p className="dropbtn">Admin Console</p>
      <div className="dropdown-content">
        {/* add a links to each component here */}
        <AddProduct />

        {/* <DeleteProduct />
          <EditProduct /> */}
      </div>
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
