import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

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
  getSeshes: (userId, page, size) => {
    console.log("IM BACK BITCHEEEEEEEEEEEEEEES");
    console.log(apiUrl);
    return axios.get(
      `${apiUrl}/sesh/seshes/${userId}?page=${page}&size=${size}`
    );
  },
  getUsers: (query, page, size, body) => {
    return axios.get(
      `${apiUrl}/user/search/?query=${query}&page=${page}&size=${size}`,
      body
    );
  },
  getSingleUser: (userId) => {
    return axios.get(`${apiUrl}/user/single/${userId}`);
  },
  follow: (userId) => {
    return axios.post(`${apiUrl}/user/follow`, { userId });
  },
  getProfileSeshes: (userId) => {
    return axios.get(`${apiUrl}/user/seshes/${userId}`);
  },
  resetPassword: (password1, password2) => {
    return axios.post(`${apiUrl}/user/password`, {
      password1,
      password2,
    });
  },
  editProfile: (body) => {
    return axios.post(`${apiUrl}/user/edit`, body);
  },
  getSingleSesh: (seshId) => {
    return axios.get(`${apiUrl}/sesh/single/${seshId}`);
  },
  heart: (seshId) => {
    return axios.post(`${apiUrl}/sesh/heart`, {
      seshId,
    });
  },
  addComment: (seshId, text) => {
    return axios.post(`${apiUrl}/sesh/comment-add`, { seshId, text });
  },
  deleteSesh: (seshId) => {
    return axios.delete(`${apiUrl}/sesh/delete`, { seshId });
  },
};

export default api;
