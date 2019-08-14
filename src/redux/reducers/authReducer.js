import { AUTHENTICATION_SUCCESS, LOG_OUT } from "../actions/types";

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
    case LOG_OUT:
      return INITIAL_AUTH_STATE;
    default:
      return state;
  }
};
