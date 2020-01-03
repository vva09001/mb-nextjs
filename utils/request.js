import axios from "axios";

const request = axios.create({
  baseURL: "https://bank1712.herokuapp.com/vi/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// before send request
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error;
  }
);

// after send request
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const response = JSON.parse(JSON.stringify(error));
    return response.response;
  }
);

export default request;
