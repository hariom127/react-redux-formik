import axios from "axios";
import config from "../config";

const token = window.localStorage.getItem("token");

// create Intance of axios
const axiosInc = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    Authorization: token ? `${token}` : "",
  },
});

export default axiosInc;
