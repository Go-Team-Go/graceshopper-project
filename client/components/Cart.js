import React from 'react';
import { connect } from 'react-redux';
import { fetchCart, addItem, _updateCart } from '../store/cart';

// ----- add cart total inventory and total price functionality

class Cart extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    // console.log('did mount', this.props);
    this.props.getCart(this.props.match.params.id);
    // if (this.props.match.params.id) {
    //   this.props.getCart(this.props.match.params.id);
    // }
  }

  handleClick(evt) {
    let id = parseInt(evt.target.value);

    if (evt.target.name === 'remove') {
      this.props.update({ id, quantity: -1 });
    } else {
      this.props.update({ id, quantity: +1 });
    }
  }
  render() {
    console.log('render', this.props);
    const cart = this.props.cart || [];
    return (
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <h1>Name:{item.name}</h1>
            <img src={item.imageUrl}></img>
            <p>Price:{item.price}</p>
            <p>Cart Quantity:{item.quantity}</p>
            <button name="remove" onClick={this.handleClick} value={item.id}>
              Remove
            </button>
            <button name="add" onClick={this.handleClick} value={item.id}>
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
    getCart: (id) => dispatch(fetchCart(id)),
    update: (item) => dispatch(_updateCart(item)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
