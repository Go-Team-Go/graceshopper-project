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
    evt.target.reset();
  }

  render() {
    const product = this.props.product || {};
    return (
      <div>
        {product.name ? (
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
                <small className="text-muted">
                  only {product.quantity} left
                </small>
                <hr />
                <form
                  onSubmit={this.handleSubmit}
                  className=" row justify-content-center "
                >
                  <div className="form-floating  mb-3">
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      defaultValue="1"
                      ref={this.input}
                      className="form-control"
                    ></input>
                    <label htmlFor="quantity">Quantity:</label>
                  </div>

                  <button type="submit" className="btn btn-dark btn-lg">
                    add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3>Loading...</h3>
            <img
              src="https://media4.giphy.com/media/h8fnSteH0zUrlMf291/giphy.gif"
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
