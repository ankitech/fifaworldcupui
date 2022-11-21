import axios from "axios";

const API_URL = "https://worldcup-fifa22.azuremicroservices.io/users/";

class AuthService {
  login(username, password) {
    const headers = {
      username,
      password,
  };
    return axios
      .post(API_URL + "login",{},{ headers: headers})
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response;
      });
  }

  logout() {
    localStorage.removeItem("user");
    this.props.router.navigate("/home");
    window.location.reload();
  }

  register(email, firstname, lastname, teamname, password) {
    return axios.post(API_URL + "signup", {
      email,
      firstname,
      lastname,
      teamname,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
