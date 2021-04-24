import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../store/singleProduct';
import { addToCart, addToUserCart } from '../store/cart';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const token = window.localStorage.getItem('token');
    const product = this.props.product;

    let item = {
      name: product.name,
      productId: product.id,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: parseInt(evt.target.quantity.value),
    };
    if (token) {
      this.props.addItem(item);
    } else {
      this.props.add(item);
    }
  }

  render() {
    const product = this.props.product || {};
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} />
        <p>{product.description}</p>
        <p>${product.price / 100}</p>
        <p>{product.quantity}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="quantity"></input>
          <button type="submit">add to cart</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatch = (dispatch) => {
  return {
    load: (id) => dispatch(getProduct(id)),
    add: (item) => dispatch(addToCart(item)),
    addItem: (item) => dispatch(addToUserCart(item)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
