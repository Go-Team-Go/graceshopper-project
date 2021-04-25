import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products';
import { setCart, fetchCart } from '../store/cart';
import { Link } from 'react-router-dom';
//cols are based on ny screen sizes, may need to be tested on other breakpoints
export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.grabProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container">
        <img
          src="https://www.thespruceeats.com/thmb/E-nBmWUIiYvM7hVBuYoOuLE6yIY=/2065x1162/smart/filters:no_upscale()/GettyImages-1043955542-5c82cf8846e0fb000143197b.jpg"
          alt="grace sipper cocktails"
          className="rounded img-fluid"
        />
        <hr />

        <figure className="text-center">
          <blockquote className="blockquote">
            <h1 className="display-6">
              Artfully crafted cocktails, from the comfort of your own home.
            </h1>
          </blockquote>
          <figcaption className="text-muted">Ship, Sip, Enjoy.</figcaption>
        </figure>
        <hr />
        <div className="card-group">
          {products.length ? (
            products.map((product) => (
              <div key={product.id} className="col-sm-4 col-md-4 col-lg-4 ">
                <Link to={`/products/${product.id}`}>
                  <div className="card bg-light text-white ">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="card-img"
                    />
                    <div className="card-img-overlay">
                      <h4 className="card-title">{product.name}</h4>
                      <p className="card-text">${product.price / 100}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <h3 className="h3 text-align-center">Mixing it up...</h3>
              <img
                src="https://media4.giphy.com/media/h8fnSteH0zUrlMf291/giphy.gif"
                alt="loading"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  products: state.allProducts,
});

const mapDispatch = (dispatch) => ({
  grabProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(AllProducts);
