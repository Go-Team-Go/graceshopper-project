import React from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.id);
  }
  render() {
    const cart = this.props.cart || [];
    // console.log(this.props);
    return (
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <h1>Name:{item.name}</h1>
            <img src={item.imageUrl}></img>
            <p>Price:{item.price}</p>
            <p>Cart Quantity:{item.cart.cartQuantity}</p>
            <button>Remove</button>
            <button>Add</button>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCart: (id) => dispatch(fetchCart(id)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
