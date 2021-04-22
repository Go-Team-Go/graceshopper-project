import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../store/singleProduct';
import { addToCart } from '../store/cart';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  handleClick() {
    // console.log('PROPS IN SINGLE', this.props);
    const product = this.props.product;

    let item = {
      name: product.name,
      id: product.id,
      quantity: 1,
    };

    this.props.add(item);
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
        <button onClick={this.handleClick}>add to cart</button>
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
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
