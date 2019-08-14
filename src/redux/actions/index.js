import apis from "../../apis";
import {
  REGISTER_SUCCESSFUL,
  REGISTER_ERROR,
  REGISTER_CLEAR_STATE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTHENTICATION_SUCCESS,
  LOG_OUT
} from "./types";

import { SubmissionError } from "redux-form";

import NavigationService from "../../../NavigationService";

export const register = formValues => async (dispatch, getState) => {
  try {
    const response = apis.post("/register/gmail", {
      ...formValues,
      client_id: 4,
      client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy"
    });
    dispatch({ type: REGISTER_SUCCESSFUL });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR });
    throw new SubmissionError({ email: "TEST ERROR TEXT" });
  }
};

export const clearRegisterState = () => {
  return {
    type: REGISTER_CLEAR_STATE
  };
};

export const login_success = data => {
  NavigationService.navigate("Home");
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: data
  };
};

export const logout = () => {
  return {
    type: LOG_OUT
  };
};
