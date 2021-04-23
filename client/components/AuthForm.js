import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  console.log('PROPS from authform------->>>>>>', props);

  return (
    <div>
      <hr />
      <form
        onSubmit={handleSubmit}
        name={name}
        className=" row justify-content-center "
      >
        <div className="form-floating  mb-3 col-7 ">
          <input name="username" type="text" className="form-control" />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-3 col-7">
          <input name="password" type="password" className="form-control" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating mb-3 col-7">
          <input name="email" type="text" className="form-control" />
          <label htmlFor="email">Email</label>
        </div>

        <div className="col-7">
          <button type="submit" className="btn btn-dark btn-lg">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      dispatch(authenticate(username, password, email, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
