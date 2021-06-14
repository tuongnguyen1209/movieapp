import axiosClient from "./axiosClient";

const url = "http://localhost:7300/apis/v2/user/";
const urlHeruku = "https://my-api-movie.herokuapp.com/apis/v2/user/";

const UserApis = {
  userLogin: (formuser) => {
    return axiosClient.post(`${urlHeruku}login`, formuser);
  },
  getUser: () => {
    return axiosClient.get(`${urlHeruku}getuser`);
  },
  userSignin: (userForm) => {
    return axiosClient.post(`${urlHeruku}register`, userForm);
  },
};

export default UserApis;
