import axios from "axios";

const BASE_URL = "https://api.github.com";

const instance = axios.create({
  baseURL: BASE_URL
});

export default function requestPopularHelper({ method, options }) {
  return instance({
    method,
    ...options
  }).then(response => {
    return Promise.resolve(response.data);
  });
}
