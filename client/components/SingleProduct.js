import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../store/singleProduct';
import {
  addToCart,
  addToUserCart,
  updateCart,
  updateUserCart,
} from '../store/cart';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  //return true or false
  checkForProduct(id) {
    let existingItem = state.filter((item) => {
      return action.item.productId === item.productId;
    })[0];
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const token = window.localStorage.getItem('token');
    const product = this.props.product;
    let existingItem = this.props.cart.filter((item) => {
      return item.productId === product.id;
    })[0];

    let item = {
      name: product.name,
      productId: product.id,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: parseInt(evt.target.quantity.value),
    };

    if (existingItem) {
      let newQuantity =
        parseInt(evt.target.quantity.value) + existingItem.quantity;

      if (token) {
        this.props.updateUserCart({
          productId: product.id,
          newQuantity,
        });
      } else {
        this.props.updateCart({
          productId: product.id,
          newQuantity,
        });
      }
    } else {
      if (token) {
        this.props.addItem(item);
      } else {
        this.props.add(item);
      }
    }
    evt.target.reset();
  }

  render() {
    const product = this.props.product || {};
    return (
      <div>
        {product.name ? (
          <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} />
            <p>{product.description}</p>
            <p>${product.price / 100}</p>
            <p>{product.quantity}</p>
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                name="quantity"
                min="1"
                defaultValue="1"
                ref={this.input}
              ></input>
              <button type="submit">add to cart</button>
            </form>
          </div>
        ) : (
          <div>
            <h3>Loading...</h3>
            <img
              src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="loading"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
    //load the cart ----> to see if a selected id is selected again
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    load: (id) => dispatch(getProduct(id)),
    add: (item) => dispatch(addToCart(item)), //guest cart
    addItem: (item) => dispatch(addToUserCart(item)), //user cart
    updateUserCart: (item) => dispatch(updateUserCart(item)), //user put for cart
    updateCart: (item) => dispatch(updateCart(item)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
