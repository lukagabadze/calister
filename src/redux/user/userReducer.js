import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  EMPTY_USER,
} from "./userTypes";

const initialState = {
  loading: false,
  user: null,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        error: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    case EMPTY_USER:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
