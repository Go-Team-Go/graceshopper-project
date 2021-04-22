import axios from 'axios';

//action type
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';

//action creator

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

//thunk creator

export const addItem = (id, item) => {
  return async (dispatch) => {
    try {
      const { data: newItem } = await axios.post(`/api/cart/${id}`, item);
      dispatch(addToCart(newItem));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCart = (id) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/users/${id}/cart`);
      dispatch(setCart(cart));
    } catch (error) {
      console.log(error);
    }
  };
};

const initState = [];

export default function (state = initState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_TO_CART:
      let existingItem = state.filter((item) => {
        return action.item.id === item.id;
      })[0];
      if (existingItem) {
        existingItem.quantity += action.item.quantity;
        return [...state];
      } else return [...state, action.item];
    default:
      return state;
  }
}
