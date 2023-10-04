import axios from "axios";
import {Dev_BaseURL} from '../Componants/Configuration/Urls'
const API_URL = `${Dev_BaseURL}/account/`

const register = (username, phoneNumber, email, password) => {
  return axios.post(API_URL + "create", {
    username, phoneNumber, email, password
      });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response)
      if (response.data.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
