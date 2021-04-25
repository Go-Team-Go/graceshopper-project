import React from 'react';
import { connect, useStore } from 'react-redux';
import AddProduct from './AddProduct'

/**
 * COMPONENT
 */
export const Admin = (props) => {


  return (
    <div class="admin-dropdown">
      <p class="dropbtn">Admin</p>
        <div class="dropdown-content">
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
    products: state.allProducts
    users: state.allUsers
  };
};

export default connect(mapState)(Admin);
