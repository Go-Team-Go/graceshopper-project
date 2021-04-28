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
      <div className="container">
        {users.length ? (
          users.map((user) => (
            <div key={user.id} className="card mb-3 col-10">
              <h3 className="h3 card-header"> {user.username}</h3>
              <div className="card-body">
                <p className="h5">User ID: {user.id}</p>
                <p className="h5">Email: {user.email}</p>
                <p className="h5">Admin: {user.admin ? 'yes' : 'no'}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3>Loading...</h3>
            <img
              src="https://media4.giphy.com/media/h8fnSteH0zUrlMf291/giphy.gif"
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
