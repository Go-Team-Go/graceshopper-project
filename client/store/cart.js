import axios from 'axios';

//action type
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_USER_CART = 'ADD_TO_USER_CART';
const UPDATE_CART = 'UPDATE_CART';
const UPDATE_USER_CART = 'UPDATE_USER_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const TOKEN = 'token';

//action creator

export const deletedItem = (item) => {
  return {
    type: DELETE_ITEM,
    item,
  };
};

export const updatedUserCart = (item) => {
  return {
    type: UPDATE_USER_CART,
    item,
  };
};
export const updateCart = (item) => {
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

export const addedToUserCart = (item) => {
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

export const deleteItem = (item) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: removedItem } = await axios.delete(
        `/api/cart/${item.productId}`,
        {
          headers: {
            authorization: token,
          },
        },
      );
      dispatch(deletedItem(removedItem));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserCart = (item) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: newItem } = await axios.put(`/api/cart`, item, {
        headers: {
          authorization: token,
        },
      });
      dispatch(updatedUserCart(newItem));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToUserCart = (item) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: newItem } = await axios.post('/api/cart', item, {
        headers: {
          authorization: token,
        },
      });
      dispatch(addedToUserCart(newItem));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: cart } = await axios.get(`/api/cart`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(setCart(cart));
    } catch (error) {
      console.log(error);
    }
  };
};

const initState = [];

export default function (state = initState, action) {
  {
    let existingItem;
    if (action.item) {
      existingItem = state.filter((item) => {
        return action.item.productId === item.productId;
      })[0];
    }
    switch (action.type) {
      case SET_CART:
        return action.cart;
      case ADD_TO_CART:
        if (existingItem) {
          existingItem.quantity += action.item.quantity;
          return [...state];
        } else return [...state, action.item];
      case ADD_TO_USER_CART:
        if (existingItem) {
          existingItem.quantity = action.item.quantity;
          return [...state];
        } else return [...state, action.item];
      case UPDATE_CART:
        existingItem.quantity += action.item.quantity;
        return [...state];
      case UPDATE_USER_CART:
        existingItem.quantity = action.item.quantity;
        return [...state];
      case DELETE_ITEM:
        return state.filter((item) => item.productId !== action.item.productId);
      default:
        return state;
    }
  }
}
