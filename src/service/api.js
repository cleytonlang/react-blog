import axios from "axios";
import CONSTANTS from "../constants";

const USER_TOKEN = localStorage.getItem("token");
const AuthStr = USER_TOKEN
  ? { Authorization: "Bearer ".concat(USER_TOKEN) }
  : null;

const baseUrl = CONSTANTS.apiBackend;

const API = axios.create({
  baseURL: baseUrl,
  headers: AuthStr,
  validateStatus: function (status) {
    if (status === 403) {
      localStorage.clear();
      window.location.href = "./";
    } else {
      return true;
    }
  },
});

API.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    newConfig.metadata = { startTime: new Date() };
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    const newRes = { ...response };
    newRes.config.metadata.endTime = new Date();
    newRes.duration =
      newRes.config.metadata.endTime - newRes.config.metadata.startTime + "ms";
    return newRes;
  },
  (error) => {
    const newError = { ...error };
    newError.config.metadata.endTime = new Date();
    newError.duration =
      newError.config.metadata.endTime - newError.config.metadata.startTime;
    return Promise.reject(newError);
  }
);

API.baseUrl = baseUrl;

export default API;
