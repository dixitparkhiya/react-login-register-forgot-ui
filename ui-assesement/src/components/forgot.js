import React, { useState,Component } from 'react'

export default class Forgot extends Component {

  state = {
    formHidden: false,
    email: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data

    this.setState({
      formHidden: true,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({
      email : value,
    });
  };

  render() {
    const { formHidden, email } = this.state;

    return (
      <div>
        {formHidden ? (
          <div className="thank-you-text">Email has been sent to your inbox <b>({email})</b> with magic link to reset your credential. Reset magic link is valid for next 30 minutes

            <p></p>
            <p className="forgot-password text-right">
              Lost your <a href="/forgot">password?</a>
            </p>
            <p className="forgot-password text-right">
               <a href="/reset">Click Here to reset your password?</a>
            </p>
          </div>
        ) : (
      <form   onSubmit={this.handleSubmit}>
        
        <div className="fields-container">

        <div className="field">
        <h5>Forgot Password</h5>

        <div className="mb-3">
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="form-control"
            placeholder="@hdfs.com"
            required
            onChange={this.handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </div>
        <p className="forgot-password text-right">
          Go back to <a href="/sign-in">Login?</a>
        </p>
        </div>
        
        </div>

        
        
      </form>
      )}
      </div>
    )
  }
}
