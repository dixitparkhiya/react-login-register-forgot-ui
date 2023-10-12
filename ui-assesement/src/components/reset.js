import React, { useState,Component } from 'react'

import { useNavigate } from 'react-router-dom';

import '../App.css'

export default class Reset extends Component {
  state = {
    formHidden: false,
  };
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formHidden: true,
    });
  };

  render() {
    const { formHidden } = this.state;

    return (
      <form class="resetForm" onSubmit={this.handleSubmit}>
        
        <div className="fields-container">

        <div className="field">
        <h3>Reset your credential</h3>

        <div className="mb-3">
          {/* <label>New Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Credential"
            required
            minlength="5"
            pattern="(?=.*[A-Z]).*"
          />
        </div>

        <div className="mb-3">
          {/* <label>Re-Enter Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Re-type Credential"
            required
            minlength="5"
            pattern="(?=.*[A-Z]).*"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        </div></div>
      </form>
    )
  }
}
