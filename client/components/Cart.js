import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateUserCart,
  updateCart,
  deletedItem,
  deleteItem,
  purchaseCart,
  purchaseUserCart,
} from '../store/cart';

const token = window.localStorage.getItem('token');

class Cart extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
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

  handleCheckout() {
    if (token) {
      this.props.purchaseUserCart(this.props.cart);
    } else {
      this.props.purchase();
    }
  }

  render() {
    const cart = this.props.cart || [];
    return (
      <div>
        {cart.length ? (
          cart.map((item) => (
            <div key={item.productId}>
              <Link to={`/products/${item.productId}`}>
                <h1>{item.name}</h1>
              </Link>
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
          ))
        ) : (
          <div>
            <h3>Nothing in the cart...</h3>
          </div>
        )}
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
        <Link to={'/checkout'}>
          <button type="button" onClick={this.handleCheckout}>
            Checkout
          </button>
        </Link>
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
    update: (item) => dispatch(updateCart(item)),
    updateDB: (item) => dispatch(updateUserCart(item)),
    delete: (item) => dispatch(deletedItem(item)),
    deleteDB: (item) => dispatch(deleteItem(item)),
    purchase: () => dispatch(purchaseCart()),
    purchaseUserCart: (cart) => dispatch(purchaseUserCart(cart)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
