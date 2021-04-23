import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, updateUserCart, _updateCart } from '../store/cart';

// ----- add cart total inventory and total price functionality

class Cart extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.getCart();
    }
  }

  handleClick(evt) {
    let productId = parseInt(evt.target.value);
    const token = window.localStorage.getItem('token');
    if (token) {
      if (evt.target.name === 'remove') {
        this.props.updateDB({ productId, quantity: -1 });
      } else {
        this.props.updateDB({ productId, quantity: +1 });
      }
    } else {
      if (evt.target.name === 'remove') {
        this.props.update({ productId, quantity: -1 });
      } else {
        this.props.update({ productId, quantity: +1 });
      }
    }
  }

  render() {
    const cart = this.props.cart || [];
    return (
      <div>
        {cart.map((item) => (
          <div key={item.productId}>
            <h1>{item.name}</h1>
            {/* <img src={item.imageUrl}></img> */}
            <p>Price: ${item.price / 100}</p>
            <p>In Cart: {item.quantity}</p>
            <button
              name="remove"
              onClick={this.handleClick}
              value={item.productId}
            >
              Remove
            </button>
            <button
              name="add"
              onClick={this.handleClick}
              value={item.productId}
            >
              Add
            </button>
          </div>
        ))}
        <div>total: {cart.length}</div>
        <button>checkout</button>
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
    getCart: () => dispatch(fetchCart()),
    update: (item) => dispatch(_updateCart(item)),
    updateDB: (item) => dispatch(updateUserCart(item)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
