import axios from "axios";

const api = axios.create({
  baseURL: "https://api-talks.creative.az/api",
});

export default api;
