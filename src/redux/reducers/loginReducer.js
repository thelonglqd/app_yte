import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/types";

const LOGIN_INITIAL_STATE = {
  isError: false,
  message: ""
};

export default (state = LOGIN_INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_ERROR:
      return { isError: true, message: action.payload };
    default:
      return state;
  }
};
