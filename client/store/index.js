import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import singleProduct from './singleProduct';
import allProducts from './products';
import cart from './cart';
<<<<<<< HEAD
import allUsers from './users';
=======
import adminReducer from './admin';
import sortAndFilter from './sortAndFilter';
>>>>>>> main

const reducer = combineReducers({
  auth,
  allProducts,
  singleProduct,
  cart,
<<<<<<< HEAD
  allUsers,
=======
  adminReducer,
  sortAndFilter,
>>>>>>> main
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
);

const store = createStore(reducer, middleware);

export default store;
export * from './auth';
