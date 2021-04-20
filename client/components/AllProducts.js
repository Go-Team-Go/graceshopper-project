import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.grabProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => ({
  products: state.products.all,
});

const mapDispatch = (dispatch) => ({
  grabProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(AllProducts);
