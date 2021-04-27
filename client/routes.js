import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import { setCart, fetchCart } from './store/cart';
import Home from './components/home';
import { me } from './store';
import SingleProduct from './components/SingleProduct';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import admin from './components/admin';
import EditProduct from './components/EditProduct';
import AllUsers from './components/AllUsers';
import AddProduct from './components/AddProduct';

/**
 * COMPONENT
 */
const token = window.localStorage.getItem('token');
const CART = 'tempcart';
const storedCart = window.sessionStorage.getItem(CART);

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    if (token) {
      this.props.getCart();
    } else if (storedCart) {
      this.props.setCart(JSON.parse(storedCart));
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/admin" component={admin} />
            <Route path="/admin/products/:id" component={EditProduct} />
            <Route path="/admin/users" component={AllUsers} />
            <Route path="/admin/addProduct" component={AddProduct} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.admin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    getCart: () => dispatch(fetchCart()),
    setCart: (cart) => dispatch(setCart(cart)),
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
