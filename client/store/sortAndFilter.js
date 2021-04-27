const SET_PRICE_FILTER = 'SET_PRICE_FILTER';
const SET_ALCOHOL_FILTER = 'SET_ALCOHOL_FILTER';
const SET_SORT_PARAM = 'SET_SORT_PARAM';
const CLEAR = 'CLEAR';

export const setPriceFilter = (filter) => ({
  type: SET_PRICE_FILTER,
  filter,
});

export const setAlcoholFilter = (filter) => ({
  type: SET_ALCOHOL_FILTER,
  filter,
});

export const setSortParam = (param) => ({
  type: SET_SORT_PARAM,
  param,
});

export const clear = () => ({
  type: CLEAR,
});

const initState = {
  priceFilter: 'ALL',
  alcoholFilter: 'ALL',
  sortParam: 'UNSORTED',
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_PRICE_FILTER:
      return { ...state, priceFilter: action.filter };
    case SET_ALCOHOL_FILTER:
      return { ...state, alcoholFilter: action.filter };
    case SET_SORT_PARAM:
      return { ...state, sortParam: action.param };
    case CLEAR:
      return initState;
    default:
      return state;
  }
}
