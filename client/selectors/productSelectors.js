import { createSelector } from 'reselect';

const PRICE_HIGH = 'PRICE_HIGH';
const PRICE_LOW = 'PRICE_LOW';
const OVER_TEN = 'OVER_TEN';
const UNDER_TEN = 'UNDER_TEN';
const SWEET = 'SWEET';
const DRY = 'DRY';

const getProducts = (state) => state.allProducts;
const getSort = (state) => state.sortAndFilter.sortParam;
const getFilter = (state) => state.sortAndFilter.filter;

const getSortedProducts = createSelector(
  [getSort, getProducts],
  (param, products) => {
    switch (param) {
      case PRICE_HIGH:
        return products.sort((a, b) => b.price - a.price);
      case PRICE_LOW:
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  },
);

const getFilteredProducts = createSelector(
  [getFilter, getSortedProducts],
  (filter,
  (products) => {
    switch (filter) {
      case OVER_TEN:
        return products.filter((product) => product.price >= 10);
      case UNDER_TEN:
        return products.filter(product.price < 10);
      case SWEET:
        return products.filter(product.flavor === 'sweet');
      case DRY:
        return products.filter(product.flavor === 'dry');
      default:
        return products;
    }
  }),
);

export default getFilteredProducts;
