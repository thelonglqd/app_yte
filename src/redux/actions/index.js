import apis from "../../apis";
import {
  REGISTER_SUCCESSFUL,
  REGISTER_ERROR,
  REGISTER_CLEAR_STATE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOG_OUT
} from "./types";

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
  }
};

export const clearRegisterState = () => {
  return {
    type: REGISTER_CLEAR_STATE
  };
};

export const login_success = data => {
  console.log("token login success: ", data);
  NavigationService.navigate("Home");
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: data
  };
};

export const login_failed = () => {
  NavigationService.navigate("Home");
  return {
    type: AUTHENTICATION_FAILED
  };
};

export const logout = () => {
  return {
    type: LOG_OUT
  };
};
