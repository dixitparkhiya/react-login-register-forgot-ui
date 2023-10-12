import React, { useState,Component } from 'react'
import '../App.css'

export default class SignUp extends Component {

  state = {
    formHidden: false,
    username: '',
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
      username : value,
    });
  };

  render() {
    const { formHidden, username } = this.state;

    return (
      <div>
        {formHidden ? (
          <div className="thank-you-text">
            <p>Thanks <b>{username}</b> for your interest, We have requested admin to verify and approval. Watchout your email for welcome email with magic link for us.</p>
            <p className="forgot-password text-right">
              Lost your <a href="/forgot">password?</a>
            </p>
            <p className="forgot-password text-right">
              Not a Member Yet? <a href="/sign-up">Request Access</a>
            </p>
          </div>
        ) : (
      <form  onSubmit={this.handleSubmit}>
        <div className="fields-container">

        <div className="field">
        <p class="h5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M8.37691 19.3245H1.62667C0.961466 19.3245 0.394122 18.7733 0.277217 18.0133C-0.334948 14.0166 2.2153 12.2696 3.48669 11.6041C4.59225 11.0256 6.32902 10.7223 8.20211 10.6967C8.22751 10.6954 8.25291 10.6946 8.2783 10.6946H8.34367C8.36944 10.6946 8.39484 10.6954 8.42023 10.6967C8.82473 10.7024 9.224 10.7223 9.60721 10.7557C9.6595 10.7617 10.4356 10.8532 11.1068 11.0083C11.524 11.1053 11.7948 11.5759 11.7115 12.0603C11.6282 12.5439 11.2226 12.8571 10.805 12.7614C10.2085 12.6236 9.4806 12.5378 9.47313 12.5365C9.13548 12.5079 8.76198 12.4893 8.38288 12.4845C8.3657 12.4841 8.3489 12.4836 8.33209 12.4823L8.27868 12.4828C8.26187 12.4841 8.25664 12.4845 8.23983 12.4845C6.57664 12.5049 5.02999 12.8363 4.06524 13.2614C3.24317 13.6236 1.42423 14.7896 1.77196 17.5372H8.37728C8.80307 17.5372 9.14781 17.9371 9.14781 18.431C9.14744 18.9241 8.80232 19.3245 8.37691 19.3245Z" fill="black"/>
  <path d="M8.37694 19.5412H1.6267C0.871115 19.5412 0.226083 18.9146 0.0934909 18.0515C-0.355455 15.1207 0.82256 12.761 3.41016 11.4069C4.49928 10.8367 6.20057 10.5079 8.20028 10.4806C8.22157 10.4793 8.24995 10.4784 8.27871 10.4784H8.34408C8.37321 10.4784 8.40122 10.4793 8.42998 10.481C8.83 10.4866 9.233 10.5066 9.62107 10.5404C9.63339 10.5417 10.4405 10.6339 11.1431 10.7964C11.6607 10.9165 11.998 11.5027 11.8946 12.1032C11.7933 12.6904 11.2943 13.0951 10.7688 12.9746C10.2605 12.8572 9.64161 12.7761 9.4642 12.7541C9.1161 12.7242 8.74297 12.7064 8.38068 12.7016L8.3198 12.699L8.24174 12.7016C6.73168 12.7203 5.15664 13.0123 4.13138 13.4642C3.38439 13.7935 1.70514 14.82 1.93633 17.321H8.37732C8.90544 17.321 9.33459 17.8193 9.33459 18.4315C9.33459 19.0437 8.9047 19.5412 8.37694 19.5412ZM8.27834 10.9108L8.21148 10.913C6.28311 10.9394 4.59153 11.2631 3.56329 11.8012C1.85342 12.696 -0.0723426 14.4937 0.46064 17.9752C0.561485 18.6312 1.05189 19.1079 1.62633 19.1079H8.37657C8.69853 19.1079 8.96035 18.8041 8.96035 18.4306C8.96035 18.0571 8.69853 17.7534 8.37657 17.7534H1.61027L1.58674 17.5684C1.20316 14.5392 3.33583 13.3507 3.99842 13.0587C5.0782 12.5829 6.66258 12.287 8.23763 12.2675L8.33063 12.2653L8.38665 12.2675C8.75492 12.2722 9.13589 12.2904 9.48623 12.3203C9.73648 12.3511 10.3322 12.4308 10.8413 12.5487C11.158 12.6215 11.4665 12.3762 11.5282 12.0175C11.5909 11.6513 11.3855 11.2939 11.0699 11.2206C10.3856 11.0625 9.59679 10.9723 9.58895 10.9715C9.21283 10.939 8.8173 10.9195 8.41803 10.9139L8.27834 10.9108Z" fill="black"/>
  <path d="M15.0006 21.0001C14.4848 21.0001 14.0669 20.5153 14.0669 19.9169V12.3884C14.0669 11.79 14.4848 11.3052 15.0006 11.3052C15.5164 11.3052 15.9344 11.79 15.9344 12.3884V19.9169C15.9344 20.5153 15.5164 21.0001 15.0006 21.0001Z" fill="black"/>
  <path d="M18.2456 17.236H11.756C11.2402 17.236 10.8223 16.7512 10.8223 16.1528C10.8223 15.5544 11.2402 15.0696 11.756 15.0696H18.2456C18.7614 15.0696 19.1793 15.5544 19.1793 16.1528C19.1793 16.7512 18.7614 17.236 18.2456 17.236Z" fill="black"/>
  <path d="M7.74425 9.09916C5.58169 9.09916 3.82251 7.05835 3.82251 4.54958C3.82251 2.04081 5.58169 0 7.74425 0C9.9068 0 11.666 2.04081 11.666 4.54958C11.666 7.05835 9.9068 9.09916 7.74425 9.09916ZM7.74425 1.96585C6.51618 1.96585 5.51707 3.12491 5.51707 4.54958C5.51707 5.97425 6.51618 7.13331 7.74425 7.13331C8.97231 7.13331 9.97142 5.97425 9.97142 4.54958C9.97142 3.12491 8.97268 1.96585 7.74425 1.96585Z" fill="black"/>
</svg> <spam>Request for access</spam></p>
        
        <div className="mb-3">
          {/* <label>Name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            required
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          {/* <label>Email Id</label> */}
          <input
            type="email"
            className="form-control"
            placeholder="@hdfc.com"
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
          {/* <label>Reason for request</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Brief your requirement & Approval..."
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="checkbox"
            className="form-conrol"
          /><label>Send me a email copy</label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">Login Here</a>
        </p>
        </div></div>
      </form>
      )}
      </div>
    )
  }
}
