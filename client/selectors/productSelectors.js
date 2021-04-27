import { createSelector } from 'reselect';

export const PRICE_HIGH = 'PRICE_HIGH';
export const PRICE_LOW = 'PRICE_LOW';
export const OVER_TEN = 'OVER_TEN';
export const UNDER_TEN = 'UNDER_TEN';
export const GIN = 'GIN';
export const TEQUILA = 'TEQUILA';
export const VODKA = 'VODKA';
export const RUM = 'RUM';

const getProducts = (state) => state.allProducts;
const getSort = (state) => state.sortAndFilter.sortParam;
const getPriceFilter = (state) => state.sortAndFilter.priceFilter;
const getAlcoholFilter = (state) => state.sortAndFilter.alcoholFilter;

const getProductsByAlcoholType = createSelector(
  [getAlcoholFilter, getProducts],
  (filter, products) => {
    switch (filter) {
      case GIN:
        return products.filter((product) => product.alcoholType === 'gin');
      case TEQUILA:
        return products.filter((product) => product.alcoholType === 'tequila');
      case VODKA:
        return products.filter((product) => product.alcoholType === 'vodka');
      case RUM:
        return products.filter((product) => product.alcoholType === 'rum');
      default:
        return products;
    }
  },
);

const getProductsByPrice = createSelector(
  [getPriceFilter, getProductsByAlcoholType],
  (filter, products) => {
    switch (filter) {
      case OVER_TEN:
        return products.filter((product) => product.price >= 1000);
      case UNDER_TEN:
        return products.filter((product) => product.price < 1000);
      default:
        return products;
    }
  },
);

const getSortedProducts = createSelector(
  [getSort, getProductsByPrice],
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
export default getSortedProducts;
