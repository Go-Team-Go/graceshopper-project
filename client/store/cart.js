import axios from 'axios';

//action type
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const TOKEN = 'token';

//action creator

export const _updateCart = (item) => {
  return {
    type: UPDATE_CART,
    item,
  };
};

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

export const updateCart = (id, item) => {
  return async (dispatch) => {
    try {
      const { data: newItem } = await axios.put(`/api/cart/${id}`, item);
      dispatch(_updateCart(newItem));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addItem = (item) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: newItem } = await axios.post('/api/cart');
      dispatch(addToCart(newItem));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
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
    case UPDATE_CART:
      let alreadyItem = state.filter((item) => {
        return action.item.id === item.id;
      })[0];

      alreadyItem.quantity += action.item.quantity;
      return [...state];
    default:
      return state;
  }
}
