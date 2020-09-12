import axios from "axios";

export const LOAD_USER = "FETCH_USER";
export const ENSURE_AUTH = "ENSURE_AUTH";
export const REGISTER_SUCCESFUL = "REGISTER_SUCCESFUL";
export const LOGIN_SUCCESFUL = "LOGIN_SUCCESFUL";
export const LOGOUT_SUCCESFUL = "LOGOUT_SUCCESFUL";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const CLOSE_ERROR_ALERT = "CLOSE_ERROR_ALERT";

export const loadUser = () => (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
};

export const ensureAuth = () => (dispatch) => {
  dispatch({
    type: ENSURE_AUTH,
  });
};

export const closeErrorAlert = () => (dispatch) => {
  dispatch({
    type: CLOSE_ERROR_ALERT,
  });
};

export const registerUser = (userValues) => (dispatch) => {
  axios
    .post("http://localhost:5000/auth/register", userValues)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: REGISTER_SUCCESFUL,
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({
        type: LOAD_USER,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.fail,
      });
      setTimeout(() => {
        dispatch(closeErrorAlert());
      }, 2000);
    });
};

export const loginUser = (userValues) => (dispatch) => {
  axios
    .post("http://localhost:5000/auth/login", userValues)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESFUL,
        payload: res.data,
      });
    })
    .then(() => {
      dispatch({
        type: LOAD_USER,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error,
      });
      setTimeout(() => {
        dispatch(closeErrorAlert());
      }, 2000);
    });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESFUL,
  });
  dispatch({
    type: LOAD_USER,
  });
};
