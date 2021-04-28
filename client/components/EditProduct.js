import React from 'react';
import { connect } from 'react-redux';
import { updateProduct, getProduct } from '../store/singleProduct';
import { Link } from 'react-router-dom';

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
    this.state = this.props.product;
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
    const { id } = this.props.match.params;
    this.props.updateProduct(id, this.state);

    this.setState(this.props.product);
    this.props.loadProduct(id);
    //this.forceUpdate();
  }

  render() {
    const id = Number(this.props.match.params.id);

    const { product } = this.props;

    return (
      <div>
        <div className="mb-3">
          <Link to={'/admin/addProduct'}> Back to Cocktail Inventory</Link>
        </div>
        <div>
          <h3 className="h3">Edit Cocktail</h3>
        </div>
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleSubmit} name={name} className="col">
              <div>
                <label htmlFor="name">
                  <small>Update Product Name</small>
                </label>
                <input
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                  className="form-control "
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
                  className="form-control "
                />
              </div>
              <div>
                <label htmlFor="imageUrl">
                  <small> Update Image URL</small>
                </label>
                <input
                  onChange={this.handleChange}
                  name="imageUrl"
                  type="url"
                  className="form-control "
                />
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
                  className="form-control "
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
                  className="form-control mb-3"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-dark btn-lg">
                  Submit Updates
                </button>
              </div>
            </form>

            <div className="col">
              {product.name ? (
                <div>
                  <h1>{product.name}</h1>
                  <img
                    src={product.imageUrl}
                    className="figure rounded"
                    width="250"
                  />
                  <p className="h4">{product.description}</p>
                  <p className="h4">${product.price / 100}</p>
                  <p className="h4">{product.quantity}</p>
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
    updateProduct: (id, updateDets) => dispatch(updateProduct(id, updateDets)),
    loadProduct: (id) => dispatch(getProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(EditProduct);
