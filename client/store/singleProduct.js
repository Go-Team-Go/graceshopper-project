import axios from 'axios';

const GOT_PRODUCT = 'GOT_PRODUCT';

const gotProduct = (product) => ({
  type: GOT_PRODUCT,
  product,
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

export default function (state = {}, action) {
  switch (action.type) {
    case GOT_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
