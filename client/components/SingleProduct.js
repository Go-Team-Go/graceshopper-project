import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../store/singleProduct';

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }

  render() {
    const product = this.props.product || {};
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
        <button>add to cart</button>
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
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
