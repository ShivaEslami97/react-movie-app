import axios from "axios";
import apiConfig from "./apiConfig";

const axiosService = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosService.interceptors.request.use((config) => {
  config.params = {
    // add your default ones
    api_key: apiConfig.apiKey,
    // spread the request's params
    ...config.params,
  };
  return config;
});

axiosService.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosService;
