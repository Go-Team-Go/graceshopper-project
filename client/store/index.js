import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import singleProduct from './singleProduct';
import allProducts from './products';
import cart from './cart';
import adminReducer from './admin';
import sortAndFilter from './sortAndFilter';

const reducer = combineReducers({
  auth,
  allProducts,
  singleProduct,
  cart,
  adminReducer,
  sortAndFilter,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
);

const store = createStore(reducer, middleware);

export default store;
export * from './auth';
