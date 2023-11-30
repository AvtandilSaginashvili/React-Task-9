import React from "react";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  }

  setEmail = (event) => {
    this.setState({
      email: event.target.value,
      emailError: ""
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
      passwordError: "" 
    });
  };

  login = (event) => {

    // event.preventDefault();

    const { email, password } = this.state;

    if (!email.trim()) {
      this.setState({ emailError: "Please enter your email" });
      return false;
    }

    if (!password.trim()) {
      this.setState({ passwordError: "Please enter your password" });
      return false; 
    }


    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    window.localStorage.setItem("loggedin", true);

    return false;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className="mt-5" onSubmit={this.login}>
              <label className="text-light">Email</label>
              <input
                type="email"
                className={`form-control ${this.state.emailError ? "is-invalid" : ""}`}
                placeholder="email"
                onChange={this.setEmail}
                value={this.state.email}
              />
              {this.state.emailError && (
                <div className="invalid-feedback">{this.state.emailError}</div>
              )}
              <label className="text-light mt-3">Password</label>
              <input
                type="password"
                className={`form-control ${this.state.passwordError ? "is-invalid" : ""}`}
                placeholder="password"
                onChange={this.setPassword}
                value={this.state.password}
              />
              {this.state.passwordError && (
                <div className="invalid-feedback">{this.state.passwordError}</div>
              )}
              <input type="submit" className="btn btn-success mt-3" />
            </form>
            {window.localStorage.getItem("loggedin") === "true" ? (<Navigate to={"/dashboard"} />) : ("")}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

