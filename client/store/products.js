import axios from "axios";

//action type
const SET_PRODUCTS = "SET_PRODUCTS";

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
      const { data: products } = await axios.get("/api/products");
      dispatch(setProducts(products));
    } catch (err) {
      console.log("Error fetching products");
    }
  };
};

//reducer
const initialState = {
  all: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, all: action.products };
    default:
      return state;
  }
}
