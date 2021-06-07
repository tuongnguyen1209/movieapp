import axiosClient from "./axiosClient";

const url = "http://localhost:7300/apis/v1/";
const movieAPI = {
  getHome: () => {
    return axiosClient.get(`${url}home`);
  },
  getNav: () => {
    return axiosClient.get(`${url}allnav`);
  },
  getMovie: (name) => {
    return axiosClient.get(`${url}movie/${name}`);
  },
  getAllMovie: (link1, link2) => {
    return axiosClient.get(`${url}all/${link1}/${link2}`);
  },
};
export default movieAPI;
