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

import NavigationService from "../../../NavigationService";

export const register = formValues => async (dispatch, getState) => {
  try {
    await apis.post("/register/gmail", {
      ...formValues,
      client_id: 4,
      client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy"
    });
    dispatch({
      type: REGISTER_SUCCESSFUL,
      payload: "Đăng kí thành công! Vui lòng kích hoạt tài khoản qua email"
    });
  } catch (e) {
    dispatch({
      type: REGISTER_ERROR,
      payload: "Có lỗi xảy ra trong quá trình đăng kí! Vui lòng thử lại"
    });
  }
};

export const clearRegisterState = () => {
  return {
    type: REGISTER_CLEAR_STATE
  };
};

export const login = formValues => async (dispatch, getState) => {
  try {
    const response = await apis.post("/login/gmail", {
      ...formValues,
      client_id: 4,
      client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy"
    });

    const { name, access_token } = response.data.data;

    dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: {
        name,
        access_token
      }
    });

    NavigationService.resetStackAndNavigate("Profile");
  } catch (e) {
    dispatch({
      type: LOGIN_ERROR,
      payload: "Có lỗi xảy ra trong quá trình đăng nhập! Vui lòng thử lại"
    });
  }
};

export const logout = () => {
  return {
    type: LOG_OUT
  };
};
