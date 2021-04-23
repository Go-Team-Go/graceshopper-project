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
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={product.imageUrl}
              className="figure rounded"
              width="300"
            />
          </div>
          <div className="col">
            <h1 className="h1">{product.name}</h1>
            <p>
              <em>{product.description}</em>
            </p>
            <p>${product.price / 100}</p>
            <small className="text-muted">only {product.quantity} left</small>
            <hr />
            <button type="button" className="btn btn-dark btn-lg">
              add to cart
            </button>
          </div>
        </div>
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
