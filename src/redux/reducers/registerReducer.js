import {
  REGISTER_SUCCESSFUL,
  REGISTER_ERROR,
  REGISTER_CLEAR_STATE
} from "../actions/types";

const INITIAL_REGISTER_STATE = {
  isError: false,
  data: null
};

export default (state = INITIAL_REGISTER_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
      return { isError: false, data: action.payload };
    case REGISTER_ERROR:
      return { isError: true, data: action.payload };
    case REGISTER_CLEAR_STATE:
      return INITIAL_REGISTER_STATE;
    default:
      return state;
  }
};
