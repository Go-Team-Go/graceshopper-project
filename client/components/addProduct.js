//this component should have a form to add a new product and should list all the products.
// each product should have an edit and delete button next to it
// DELETE - when clicked goes to a new page with image and "Delete This" this button
// when "Delete This" button is clicked the product is removed and redirected to AddProduct component
// Edit - when clicked goes to a new page with image and form with item view
// when content is editted and submit is clicked the product is updated with new information

import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, postProduct } from '../store/products';
import { Link } from 'react-router-dom';

const initialState = {
  name: '',
  description: '',
  imageUrl: '',
  price: parseInt(''),
  quantity: parseInt(''),
};

export class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.props.postProduct(this.state);

    this.setState(initialState);
    this.props.fetchProducts();
    //this.forceUpdate();
  }

  //handleDelete

  render() {
    const { products } = this.props;

    return (
      <div>
        <p>Admin Console</p>
        <div>
          <h3>Add A New Cocktail</h3>
        </div>
        <div>
          <form onSubmit={this.handleSubmit} name={name}>
            <div>
              <label htmlFor="name">
                <small>Product Name</small>
              </label>
              <input
                onChange={this.handleChange}
                name="name"
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="description">
                <small>Product Description</small>
              </label>
              <input
                onChange={this.handleChange}
                name="description"
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="imageUrl">
                <small>Image URL</small>
              </label>
              <input onChange={this.handleChange} name="imageUrl" type="url" />
            </div>
            <div>
              <label htmlFor="price">
                <small>Price of Cocktail: </small>
              </label>
              <input
                onChange={this.handleChange}
                name="price"
                type="number"
                placeholder="e.g.10.99"
                step="0.01"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="quantity">
                <small>Quantity of Product:</small>
              </label>
              <input
                onChange={this.handleChange}
                name="quantity"
                type="number"
                placeholder="e.g.10"
                step="1"
                min="0"
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
            {/* {error && error.response && <div> {error.response.data} </div>} */}
          </form>
        </div>

        <div>
          <h3>Cocktail Inventory</h3>
          <div>
            {products.length ? (
              products.map((product) => (
                <div key={product.id}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price / 100}</p>
                  <Link to={`/admin/products/${product.id}`}>
                    <button>Edit Cocktail</button>
                  </Link>
                  <button>Delete Cocktail</button>
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
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  products: state.allProducts,
});

const mapDispatch = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  postProduct: (prodDets) => dispatch(postProduct(prodDets)),
});

export default connect(mapState, mapDispatch)(AddProduct);
