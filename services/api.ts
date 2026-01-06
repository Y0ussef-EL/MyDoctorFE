import axios from "axios";
import { storage } from "../lib/storage";

const api = axios.create({
  baseURL: "http://192.168.68.103:8080/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (config) => {
    console.log("AXIOS REQUEST");
    console.log("URL:",  config.url);
    console.log("METHOD:", config.method);
    console.log("HEADERS:", config.headers);
    console.log("BODY:", config.data);

    return config;
  },
  (error) => {
    console.error("AXIOS REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("AXIOS RESPONSE", response.status, response.data);
    return response;
  },
  (error) => {
    console.error(
      "AXIOS RESPONSE ERROR",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);


export default api;
