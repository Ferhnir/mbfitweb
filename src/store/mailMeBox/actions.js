import { axiosInstance } from "boot/axios";

export function setMailMeBoxToken(state, token) {
  state.mailMeBoxToken = token;
}

export function registerToken({ commit }) {
  return axiosInstance.get("/token/request").then(({ data }) => {
    commit("registerMailMeBoxToken", data);
  });
}
