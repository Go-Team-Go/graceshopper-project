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
    <div>
      <div>
        <Link to={'/admin/users'}>Users</Link>
      </div>
      <div>
        <Link to={'/admin/addProduct'}>Products</Link>
      </div>
      {/* <Switch>
        <Route path="/admin/users" component={AllUsers} />
        <Route path="/admin/addProduct" component={AddProduct} />
      </Switch> */}
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
