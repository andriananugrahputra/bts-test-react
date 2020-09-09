import React, { Component } from "react";
import AuthService from "../services/auth.service";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: {
        message: "",
      },
    };
  }

  handleLogin(e) {
    e.preventDefault();

    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.props.history.push("/");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    return (
      <div className="container" style={{ margin: "5%" }}>
        <form onSubmit={this.handleLogin}>
          <div className="form-group">
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
              onClick={this.login}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
