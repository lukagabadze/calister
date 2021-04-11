import api from "../../../api";

export const loginHandler = async ({ username, password }) => {
  try {
    const res = await api.login({ username, password });
    const tokens = res.data;
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
    return;
  } catch (err) {
    // console.log(err.response.data);
    const error = err.response.data.error;
    throw { error };
  }
};

export const signupHandler = async ({ username, password }) => {
  try {
    const res = await api.signup({ username, password });
    const tokens = res.data;
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
    return;
  } catch (err) {
    const error = err.response.data.error;
    throw { error };
  }
};
export const logoutHandler = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    await api.logout({ refreshToken });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  } catch (err) {
    console.log(err);
  }
  return;
};
