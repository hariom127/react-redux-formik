import axios from "axios";
import config from "../config";

const token = window.localStorage.getItem("token");
console.log(token);

// create Intance of axios
const axiosInc = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosInc;
