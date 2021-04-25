//this component should have a form to add a new product and should list all the products.
  // each product should have an edit and delete button next to it
    // DELETE - when clicked goes to a new page with image and "Delete This" this button
      // when "Delete This" button is clicked the product is removed and redirected to AddProduct component
    // Edit - when clicked goes to a new page with image and form with item view
      // when content is editted and submit is clicked the product is updated with new information

import React from 'react';
import { connect } from 'react-redux';


export class AddProduct extends React.Component {
  constructor(props){
    super(props);
    state = {
      name: '',
      description: '',
      imageUrl: '',
      price: Number(''),
      quantity: Number(''),
    }
    this.
  }

  //handleSubmit --> new Product

  render(){
    const { products } = this.props;
    console.log('products from the addProduct component:', products);


    return(
      <div>
        <div>
            <form onSubmit={handleSubmit} name={name}>
              <div>
                <label htmlFor="name">
                  <small>Product Name</small>
                </label>
                <input name="name" type="text" required/>
              </div>
              <div>
                <label htmlFor="description">
                  <small>Product Description</small>
                </label>
                <input name="description" type="text" />
              </div>
              <div>
                <label htmlFor="imageUrl">
                  <small>Image URL</small>
                </label>
                <input name="imageUrl" type="url" />
              </div>
              <div>
                <label htmlFor="price">
                  <small>Price of Cocktail: </small>
                </label>
                <input name="price" type="number" placeholder="e.g.10.99" step="0.01" min="0" />
              </div>
              <div>
                <label htmlFor="quantity">
                  <small>Quantity of Product:</small>
                </label>
                <input name="quantity" type="number" placeholder="e.g.10" step="1" min="0" />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            {/* {error && error.response && <div> {error.response.data} </div>} */}
          </form>
        </div>

        <div>
          <h2>Cocktails Available</h2>
          <div>
            {products.length ? (
              products.map(product => (
                <div key={product.id}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price / 100}</p>
                  <button>Edit Cocktail</button>
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
    )
  }
}



const mapState = (state) => ({
  products: state.allProducts
});

const mapDispatch = (dispatch) => ({
  postProduct: () => dispatch(postProduct(prodDets)),
});

export default connect(mapState, mapDispatch)(AddProduct);
