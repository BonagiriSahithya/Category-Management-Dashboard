import axios from "axios";

const API = axios.create({
  baseURL: "https://category-management-dashboard-wwtk.onrender.com/api"
});

API.interceptors.request.use(req => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

API.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default API;
