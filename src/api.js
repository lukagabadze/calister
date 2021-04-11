import axios from "axios";
const apiUrl = "http://localhost:4000";

// append auth token to every requests header
axios.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem("accessToken");
    req.headers["auth-token"] = accessToken;
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// generate new access token when the previous one expires
// axios.interceptors.response.use(undefined, (err) => {
//   const originalRequest = err.config;
//   let refreshToken = localStorage.getItem("refreshToken");
//   console.log(originalRequest);
//   console.log(`refresh token - ${refreshToken}`);
//   console.log(`response status - ${err.response.status}`);
//   console.log(`request retry - ${originalRequest._retry}`);
//   if (
//     refreshToken &&
//     err.response.status === 401 &&
//     originalRequest._retry !== true
//   ) {
//     console.log("hello");
//     originalRequest._retry = true;
//     return axios
//       .post(`${apiUrl}/auth/access_token`, { refreshToken })
//       .then((res) => {
//         localStorage.setItem("accessToken", res.data.accessToken);
//         console.log("Access token refreshed");
//         return axios(originalRequest);
//       });
//   }
//   return Promise.reject(err);
// });

// api call functions
const api = {
  signup: (body) => {
    return axios.post(`${apiUrl}/auth/signup`, body);
  },
  login: (body) => {
    return axios.post(`${apiUrl}/auth/login`, body);
  },
  logout: (body) => {
    return axios.delete(`${apiUrl}/auth/logout`, body);
  },
  getUser: (body) => {
    return axios.get(`${apiUrl}/auth/user`, body);
  },
  addSesh: (body) => {
    return axios.post(`${apiUrl}/sesh/add`, body);
  },
  getSeshes: () => {
    return axios.get(`${apiUrl}/sesh/seshes`);
  },
};

export default api;
