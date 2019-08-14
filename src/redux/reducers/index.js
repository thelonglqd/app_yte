import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  registerState: registerReducer,
  loginState: loginReducer,
  form: formReducer
});
