import {
  LOAD_USER,
  ENSURE_AUTH,
  REGISTER_SUCCESFUL,
  LOGIN_SUCCESFUL,
  LOGOUT_SUCCESFUL,
  REGISTER_FAIL,
  LOGIN_FAIL,
  CLOSE_ERROR_ALERT,
} from "../actions/authActions";

export default (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        token: localStorage.getItem("token"),
        user: localStorage.getItem("user"),
      };
    case ENSURE_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        loginFail: null,
        registerFail: null,
      };
    case REGISTER_SUCCESFUL:
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action.payload.user.name));
      return {
        ...state,
      };
    case LOGIN_SUCCESFUL:
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action.payload.user.Name));
      return {
        ...state,
      };
    case LOGOUT_SUCCESFUL:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        loginFail: null,
        registerFail: null,
      };
    case LOGIN_FAIL:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        loginFail: action.payload,
      };
    case REGISTER_FAIL:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        registerFail: action.payload,
      };
    case CLOSE_ERROR_ALERT:
      return {
        ...state,
        loginFail: null,
        registerFail: null,
      };

    default:
      return { state };
  }
};
