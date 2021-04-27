import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users';

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        {users.length ? (
          users.map((user) => (
            <div key={user.id}>
              <p>User ID: {user.id}</p>
              <p>User Name: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Admin: {user.admin ? 'yes' : 'no'}</p>
            </div>
          ))
        ) : (
          <div>
            <h3>Loading...</h3>
            <img
              src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="loading"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  users: state.allUsers,
});

const mapDispatch = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapState, mapDispatch)(AllUsers);
