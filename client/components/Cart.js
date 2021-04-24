import React from 'react';
import { connect } from 'react-redux';
import {
  fetchCart,
  updateUserCart,
  updateCart,
  deletedItem,
  deleteItem,
} from '../store/cart';

// ----- add cart total inventory and total price functionality
const token = window.localStorage.getItem('token');

class Cart extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.getCart();
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let productId = parseInt(evt.target.name);
    const newQuantity = parseInt(evt.target.quantity.value);

    if (token) {
      if (newQuantity <= 0) {
        this.props.deleteDB({ productId });
      } else {
        this.props.updateDB({
          productId,
          newQuantity,
        });
      }
    } else {
      if (newQuantity <= 0) {
        this.props.delete({ productId });
      } else {
        this.props.update({
          productId,
          newQuantity,
        });
      }
    }
    evt.target.reset();
  }

  handleDelete(evt) {
    let productId = parseInt(evt.target.value);
    if (token) {
      this.props.deleteDB({ productId });
    } else {
      this.props.delete({ productId });
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
            <p>In Cart: {item.quantity}</p>
            <p>Subtotal: ${(item.price / 100) * item.quantity}</p>
            <form onSubmit={this.handleSubmit} name={item.productId}>
              <input
                type="number"
                name="quantity"
                min="0"
                defaultValue={item.quantity}
                ref={this.input}
              ></input>
              <button type="submit">update cart</button>
            </form>
            <button onClick={this.handleDelete} value={item.productId}>
              Delete
            </button>
          </div>
        ))}
        <br />
        <div>
          total items:{' '}
          {cart.reduce((total, current) => (total += current.quantity), 0)}
        </div>
        <div>
          cart total: $
          {cart.reduce((total, current) => {
            const subtotal = (current.price / 100) * current.quantity;
            return (total += subtotal);
          }, 0)}
        </div>
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
    update: (item) => dispatch(updateCart(item)),
    updateDB: (item) => dispatch(updateUserCart(item)),
    delete: (item) => dispatch(deletedItem(item)),
    deleteDB: (item) => dispatch(deleteItem(item)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
