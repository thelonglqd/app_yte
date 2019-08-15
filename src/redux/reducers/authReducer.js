import {
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOG_OUT
} from "../actions/types";

const INITIAL_AUTH_STATE = {
  isAuthenticated: false,
  displayName: "",
  token: ""
};

export default (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        displayName: action.payload.data.name,
        token: action.payload.data.access_token
      };
    case AUTHENTICATION_FAILED:
      return INITIAL_AUTH_STATE;
    case LOG_OUT:
      return INITIAL_AUTH_STATE;
    default:
      return state;
  }
};
