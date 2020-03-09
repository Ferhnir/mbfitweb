// import axios from "axios";
import { axiosInstance } from "boot/axios";

export function setMailMeBoxToken(state, token) {
  state.mailMeBoxToken = token;
}

export function registerToken({ commit }) {
  return axiosInstance.get("/tokenrequest").then(({ data }) => {
    commit("registerMailMeBoxToken", data);
  });
}
