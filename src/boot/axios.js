import Vue from "vue";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

Vue.prototype.$axios = axiosInstance;

export { axiosInstance };
