import axios from "axios";
import * as SecureStore from "expo-secure-store";

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log("axios config: ", config);
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios.create({
  baseURL: " http://api.2hot.vn/api/v1"
});
