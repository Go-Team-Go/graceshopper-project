import React from 'react';
import { connect } from 'react-redux';

export default class Checkout extends React.Component {
  render() {
    return (
      <div className="container justify-content-center">
        <h2 className="display-4 text-center">Thank you for your order!</h2>
        <hr />
        <img
          src="https://www.thespruceeats.com/thmb/E-nBmWUIiYvM7hVBuYoOuLE6yIY=/2065x1162/smart/filters:no_upscale()/GettyImages-1043955542-5c82cf8846e0fb000143197b.jpg"
          alt="grace sipper cocktails"
          className="rounded img-fluid"
        />
      </div>
    );
  }
}
