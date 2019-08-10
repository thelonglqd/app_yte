import {
  REGISTER_SUCCESSFUL,
  REGISTER_ERROR,
  REGISTER_CLEAR_STATE
} from "../actions/types";

const INITIAL_REGISTER_STATE = {
  isError: false,
  message: ""
};

export default (state = INITIAL_REGISTER_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
      return { isError: false, message: action.payload };
    case REGISTER_ERROR:
      return { isError: true, message: action.payload };
    case REGISTER_CLEAR_STATE:
      return INITIAL_REGISTER_STATE;
    default:
      return state;
  }
};
