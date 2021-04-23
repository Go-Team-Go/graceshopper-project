import axios from 'axios';

//action type
const SET_PRODUCTS = 'SET_PRODUCTS';

//action creator

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

//thunk creator
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get('/api/products');
      //setTimeout(() => dispatch(setProducts(products)), 5000); //<--testing loading screen
      dispatch(setProducts(products));
    } catch (err) {
      console.log('Error fetching products');
    }
  };
};

//reducer

export default function allProducts(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
