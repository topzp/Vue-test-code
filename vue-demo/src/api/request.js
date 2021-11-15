import axios from "axios";
import { getToken, clearToken } from "@/utils/storage";
import { Message } from "element-ui";
import router from "@/router/index";

axios.defaults.timeout = 10000;
axios.defaults.baseURL =
  process.env.VUE_APP_PROXY_URL || process.env.VUE_APP_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.ClientId = "Basic bWFsbDptYWxs";
axios.defaults.withCredentials = false; // axios 默认不发送cookie，需要全局设置true发送cookie

// 增加全局request拦截,增加access_token
axios.interceptors.request.use((config) => {
  if (
    config.url.includes("/auth/mobile/token/sms") ||
    config.url.includes("/auth/oauth/token")
  ) {
    config.headers.Authorization = "Basic bWFsbDptYWxs";
  } else {
    const token = getToken();
    token && (config.headers.Authorization = "Bearer " + token);
  }
  return config;
});

// 增加全局response拦截
axios.interceptors.response.use(
  (response) => {
    // console.log(response.status)
    if (response.status === 200) {
      // excel文件流
      if (response.data.type === "application/vnd.ms-excel") {
        return Promise.resolve(response);
      }
      if (response.data.code === 1) {
        Message(response.data.msg);
        return Promise.reject(response.data);
      }
      return Promise.resolve(response.data.data ?? response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  function (err) {
    const url = err.response.config.url;
    // 获取用户信息500不提示
    if (!url.includes('/userinfo')) {
      Message(err.response.data.msg);
    }
    if ([401, 403].includes(err.response.status)) {
      clearToken();
      router.replace("/login");
    }
    return Promise.reject(err);
  }
);

export function post(url, data) {
  return axios.post(url, data);
}

export function patch(url, data) {
  return axios.patch(url, data);
}

export function postByUrl(url, data) {
  return axios.post(data ? url + param(data) : url);
}

export function get(url, data) {
  return axios.get(url, {
    params: data,
  });
}

export function del(url, data) {
  return axios.delete(url, {
    params: data,
  });
}

export function put(url, data) {
  return axios.put(url, data);
}

export function deleteAction(url, data) {
  return axios.delete(url, {
    params: data,
  });
}

export function file(url, params = {}) {
  return axios.get(url, {
    params,
    responseType: "blob",
  });
}

function param(data) {
  let arr = [];
  Object.keys(data).forEach((key) => {
    if (data[key] !== null) {
      arr.push(`${key}=${data[key]}`);
    } else {
      arr.push(`${key}=`);
    }
  });
  let str = "?" + arr.join("&");
  return str;
}
