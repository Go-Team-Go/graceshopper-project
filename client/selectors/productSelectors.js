import { createSelector } from 'reselect';

export const PRICE_HIGH = 'PRICE_HIGH';
export const PRICE_LOW = 'PRICE_LOW';
export const OVER_TEN = 'OVER_TEN';
export const UNDER_TEN = 'UNDER_TEN';
export const SWEET = 'SWEET';
export const DRY = 'DRY';

const getProducts = (state) => state.allProducts;
const getSort = (state) => state.sortAndFilter.sortParam;
const getFilter = (state) => state.sortAndFilter.filter;

const getSortedProducts = createSelector(
  [getSort, getProducts],
  (param, products) => {
    switch (param) {
      case PRICE_HIGH:
        return [...products].sort((a, b) => Number(b.price) - Number(a.price));
      case PRICE_LOW:
        return [...products].sort((a, b) => Number(a.price) - Number(b.price));
      default:
        return [...products].sort((a, b) => a.id - b.id);
    }
  },
);

const getFilteredProducts = createSelector(
  [getFilter, getSortedProducts],
  (filter, products) => {
    switch (filter) {
      case OVER_TEN:
        return products.filter((product) => product.price >= 1000);
      case UNDER_TEN:
        return products.filter((product) => product.price < 1000);
      case SWEET:
        return products.filter((product) => product.flavor === 'sweet');
      case DRY:
        return products.filter((product) => product.flavor === 'dry');
      default:
        return products;
    }
  },
);

export default getFilteredProducts;
