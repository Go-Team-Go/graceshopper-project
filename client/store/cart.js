import axios from 'axios';

//action type
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_USER_CART = 'ADD_TO_USER_CART';
const UPDATE_CART = 'UPDATE_CART';
const UPDATE_USER_CART = 'UPDATE_USER_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const DELETE_USER_ITEM = 'DELETE_USER_ITEM';
const TOKEN = 'token';
const CART = 'tempcart';
const PURCHASE_CART = 'PURCHASE_CART';

const updateStorage = (item) => {
  window.sessionStorage.setItem(CART, JSON.stringify(item));
};

//action creator

export const purchaseCart = () => {
  return {
    type: PURCHASE_CART,
  };
};

export const deletedItem = (item) => {
  return {
    type: DELETE_ITEM,
    item,
  };
};

export const deletedUserItem = (item) => {
  return {
    type: DELETE_USER_ITEM,
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
    type: ADD_TO_USER_CART,
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

export const purchaseUserCart = (cart) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: userCart } = await axios.put(`/api/cart/checkout`, cart, {
        headers: {
          authorization: token,
        },
      });
      dispatch(purchaseCart());
    } catch (err) {
      console.log(err);
    }
  };
};

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
      dispatch(deletedUserItem(removedItem));
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
        state = [...state, action.item];
        updateStorage(state);
        return state;

      case ADD_TO_USER_CART:
        return [...state, action.item];
      case UPDATE_CART:
        existingItem.quantity = action.item.newQuantity;
        updateStorage(state);
        return [...state];
      case UPDATE_USER_CART:
        existingItem.quantity = action.item.quantity;
        return [...state];
      case DELETE_USER_ITEM:
        return state.filter((item) => item.productId !== action.item.productId);
      case DELETE_ITEM:
        state = state.filter(
          (item) => item.productId !== action.item.productId,
        );
        updateStorage(state);
        return state;
      case PURCHASE_CART:
        return initState;
      default:
        return state;
    }
  }
}
