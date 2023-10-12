import React, { useState,Component } from 'react'
import '../App.css'
export default class Login extends Component {

  state = {
    formHidden: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data

    this.setState({
      formHidden: false,
    });
  };

  render() {

    const { formHidden } = this.state;

    return (
      <div>
        {formHidden ? (
          <div className="thank-you-text">
            <h1>Thank you for logging in!</h1>
          </div>
        ) : (
      <form onSubmit={this.handleSubmit}>

        

        {/* <div className="image-container">

          <img src='loginImage.png' alt="Your Image" />

        </div> */}




        <div className="fields-container">

        <div className="field">


        <h3>Access your account</h3>

        <div className="mb-3">
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            minlength="5"
            pattern="(?=.*[A-Z]).*"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <p className="forgot-password text-right">
          Lost your <a href="/forgot">password?</a>
        </p>
        <p className="forgot-password text-right">
          Not a Member Yet? <a href="/sign-up">Request Access?</a>
        </p>

        </div></div>
      </form>
      )}
      </div>
    );
  }
}
