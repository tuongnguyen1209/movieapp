import axiosClient from "./axiosClient";

const url1 = "https://my-api-movie.herokuapp.com/apis/v1/";
const url2 = "http://localhost:7300/apis/v2/";
const urlHeruku = "https://my-api-movie.herokuapp.com/apis/v2/";
const movieAPI = {
  getNav: () => {
    return axiosClient.get(`${url1}allnav`);
  },
  getAllMovie: (params) => {
    return axiosClient.get(`${urlHeruku}movie`, { params });
  },
  getMovie: (_id) => {
    return axiosClient.get(`${urlHeruku}movie/${_id}`);
  },
  getCountry: () => {
    return axiosClient.get(`${urlHeruku}country`);
  },
  getSearch: (params) => {
    return axiosClient.get(`${urlHeruku}search`, { params });
  },
};
export default movieAPI;
