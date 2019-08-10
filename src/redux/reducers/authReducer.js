import { AUTHENTICATION_SUCCESS, LOG_OUT } from "../actions/types";

const INITIAL_AUTH_STATE = {
  isAuthenticated: false,
  displayName: "",
  token: ""
};

export default (state = INITIAL_AUTH_STATE, action) => {
  console.log("AUTHENTICATION_SUCCESS: ", AUTHENTICATION_SUCCESS);
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        displayName: action.payload.name,
        token: action.payload.access_token
      };
    case LOG_OUT:
      return INITIAL_AUTH_STATE;
    default:
      return state;
  }
};
