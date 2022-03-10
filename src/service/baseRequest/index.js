import axios from "axios";
import { TIME_OUT, BASE_URL } from "../config";

// 加载进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

// axios 全局配置
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = TIME_OUT;

// 请求拦截器,请求头添加token
axios.interceptors.request.use((config) => {
  // 开启加载进度条
  nprogress.start();
  // config.headers.Authorization = sessionStorage.token;
  return config;
});

// 响应拦截器
axios.interceptors.response.use((config) => {
  // 隐藏加载进度条
  nprogress.done();
  return config;
});

// get请求
export function getRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

// post请求
export function postRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

// put请求
export function putRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

// delete请求
export function deleteRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { params })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
