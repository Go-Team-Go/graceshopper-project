import axios from 'axios';

//action type
const TOKEN = 'token';
const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//action creator

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const addProduct = (prodDets) => {
  return {
    type: ADD_PRODUCT,
    prodDets,
  };
};

//thunk creator
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get('/api/products');
      dispatch(setProducts(products));
    } catch (err) {
      console.log('Error fetching products');
    }
  };
};

export const postProduct = (prodDets) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data } = await axios.post('api/products', prodDets, {
        headers: { authorization: token },
      });
      dispatch(addProduct(data));
    } catch (err) {
      console.log('Error posting a new product');
    }
  };
};

//reducer

export default function allProducts(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case ADD_PRODUCT:
      return [...state, action.prodDets];

    default:
      return state;
  }
}
