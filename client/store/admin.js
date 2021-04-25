import axios from 'axios';

//action type
const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//action creator
export const addProduct = (prodDets) => {
  return {
    type: ADD_PRODUCT,
    prodDets,
  };
};

//thunk creator
export const postProduct = (prodDets) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('api/products', prodDets);
      dispatch(addProduct(data));
    } catch (err) {
      console.log('Error posting a new product');
    }
  };
};

//initial state
const initialState = {};

//reducer
export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return action.prodDets;

    default:
      return state;
  }
}
