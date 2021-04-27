const SET_FILTER = 'SET_FILTER';
const SET_SORT_PARAM = 'SET_SORT_PARAM';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const setSortParam = (param) => ({
  type: SET_SORT_PARAM,
  param,
});

const initState = { filter: 'ALL', sortParam: 'ALL' };

export default function (state = initState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case SET_SORT_PARAM:
      return { ...state, sortParam: action.param };
    default:
      return state;
  }
}
