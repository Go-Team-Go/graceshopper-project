import axios from 'axios';

//action type
const TOKEN = 'token';
const SET_USERS = 'SET_USERS';

//action creator

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

//thunk creator
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: users } = await axios.get('/api/users', {
        headers: { authorization: token },
      });
      dispatch(setUsers(users));
    } catch (err) {
      console.log('Error fetching users');
    }
  };
};

//reducer
export default function allUsers(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
}
