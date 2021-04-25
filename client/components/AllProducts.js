import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products';
import { setCart, fetchCart } from '../store/cart';
import { Link } from 'react-router-dom';

const token = window.localStorage.getItem('token');
const CART = 'tempcart';
const storedCart = window.sessionStorage.getItem(CART);

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.grabProducts();

    if (token) {
      this.props.getCart();
    } else if (storedCart) {
      this.props.setCart(JSON.parse(storedCart));
    }
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {products.length ? (
          products.map((product) => (
            <div key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <Link to={`/products/${product.id}`}>
                <h4>{product.name}</h4>
              </Link>
              <p>${product.price / 100}</p>
            </div>
          ))
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

const mapState = (state) => ({
  products: state.allProducts,
});

const mapDispatch = (dispatch) => ({
  grabProducts: () => dispatch(fetchProducts()),
  getCart: () => dispatch(fetchCart()),
  setCart: (cart) => dispatch(setCart(cart)),
});

export default connect(mapState, mapDispatch)(AllProducts);
