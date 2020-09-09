import React, { Component } from "react";
import AuthService from "../services/auth.service";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.state = {
      email: "",
      username: "",
      password: "",
      error: {
        message: "",
      },
    };
  }
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    AuthService.register(
      this.state.email,
      this.state.password,
      this.state.username
    ).then(
      (response) => {
        this.setState({
          message: response.data.message,
          successful: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    return (
      <div className="container" style={{ margin: "5%" }}>
        <div className="form-group">
          <form onSubmit={this.handleRegister}>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              style={{ margin: "10px" }}
              onChange={({ target }) => this.setState({ email: target.value })}
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              style={{ margin: "10px" }}
              onChange={({ target }) =>
                this.setState({ username: target.value })
              }
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              style={{ margin: "10px" }}
              onChange={({ target }) =>
                this.setState({ password: target.value })
              }
            />

            <button
              className="btn btn-primary"
              style={{ margin: "10px" }}
              onClick={this.register}
            >
              Register
            </button>

            <div>{this.state.error.message}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
