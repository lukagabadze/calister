import api from "../../api";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  EMPTY_USER,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

// useful actions
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    api
      .getUser()
      .then((res) => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};

export const emptyUser = () => {
  return {
    type: EMPTY_USER,
  };
};
