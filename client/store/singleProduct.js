import axios from 'axios';
const TOKEN = 'token';
const GOT_PRODUCT = 'GOT_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';

const gotProduct = (product) => ({
  type: GOT_PRODUCT,
  product,
});

const updatedProduct = (newProdDets) => ({
  type: EDIT_PRODUCT,
  newProdDets,
});

export const getProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.get(`/api/products/${id}`);
      dispatch(gotProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (id, newProdDets) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data } = await axios.put(`/api/products/${id}`, newProdDets, {
        headers: { authorization: token },
      });
      dispatch(updatedProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

//reducer
export default function (state = {}, action) {
  switch (action.type) {
    case GOT_PRODUCT:
      return action.product;
    case EDIT_PRODUCT:
      return action.newProdDets;
    default:
      return state;
  }
}
