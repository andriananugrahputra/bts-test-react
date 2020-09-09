import axios from "axios";

const API_URL = "http://18.141.178.15:8080/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        password,
        username,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  register(email, password, username) {
    return axios.post(API_URL + "register", {
      email,
      password,
      username,
    });
  }

  getAllChecklist() {
    return JSON.parse(localStorage.getItem("checklist"));
  }
}

export default new AuthService();
