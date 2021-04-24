import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, updateUserCart, _updateCart } from '../store/cart';

// ----- add cart total inventory and total price functionality

class Cart extends React.Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.getCart();
    }
  }

  handleAdd(evt) {
    let productId = parseInt(evt.target.value);
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.updateDB({ productId, quantity: +1 });
    } else {
      this.props.update({ productId, quantity: +1 });
    }
  }

  handleRemove(evt) {
    let productId = parseInt(evt.target.value);
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.updateDB({ productId, quantity: -1 });
    } else {
      this.props.update({ productId, quantity: -1 });
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
            <button onClick={this.handleRemove} value={item.productId}>
              Remove
            </button>
            <button onClick={this.handleAdd} value={item.productId}>
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
