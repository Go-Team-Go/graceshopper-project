const SET_FILTER = 'SET_FILTER';
const SET_SORT_PARAM = 'SET_SORT_PARAM';
const CLEAR = 'CLEAR';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const setSortParam = (param) => ({
  type: SET_SORT_PARAM,
  param,
});

export const clear = () => ({
  type: CLEAR,
});

const initState = { filter: 'ALL', sortParam: 'UNSORTED' };

export default function (state = initState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case SET_SORT_PARAM:
      return { ...state, sortParam: action.param };
    case CLEAR:
      return initState;
    default:
      return state;
  }
}
