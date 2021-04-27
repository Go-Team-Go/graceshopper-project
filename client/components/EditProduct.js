import React from 'react';
import { connect } from 'react-redux';
import { updateProduct, getProduct } from '../store/singleProduct';

const initialState = {
  name: '',
  description: '',
  imageUrl: '',
  price: parseInt(''),
  quantity: parseInt(''),
};

export class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadProduct(this.props.match.params.id);
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.props.updateProduct(this.state);
    this.setState(initialState);
    this.props.loadProduct(this.props.match.params.id);
    //this.forceUpdate();
  }

  render() {
    const id = Number(this.props.match.params.id);
    const { product } = this.props;

    return (
      <div>
        <p>Admin Console</p>
        <div>
          <h3>Edit Cocktail</h3>
        </div>
        <form onSubmit={this.handleSubmit} name={name}>
          <div>
            <label htmlFor="name">
              <small>Update Product Name</small>
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
              <small>Update Product Description</small>
            </label>
            <input
              onChange={this.handleChange}
              name="description"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="imageUrl">
              <small> Update Image URL</small>
            </label>
            <input onChange={this.handleChange} name="imageUrl" type="url" />
          </div>
          <div>
            <label htmlFor="price">
              <small>Update Price of Cocktail: </small>
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
              <small>Update Quantity of Product:</small>
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
            <button type="submit">Submit Updates</button>
          </div>
        </form>

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
    updateProduct: (id, updateDets) => dispatch(updateProduct(id, updateDets)),
    loadProduct: (id) => dispatch(getProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(EditProduct);
