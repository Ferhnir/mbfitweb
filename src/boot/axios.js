import Vue from "vue";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3011"
});

Vue.prototype.$axios = axiosInstance;

export { axiosInstance };
