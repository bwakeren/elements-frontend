import * as actionTypes from "./actionTypes";

export const authStart = () => ({ type: actionTypes.AUTH_START });

export const authSuccess = (data, token) => ({
  type: actionTypes.AUTH_SUCCESS,
  data,
  token,
});

export const authFail = (error) => ({ type: actionTypes.AUTH_FAIL, error });

export const authLogin = (data, token) => {
  return (dispatch) => {
    dispatch(authStart());
    dispatch(authSuccess(data, token));
  };
};

export const authLogout = () => {
  localStorage.removeItem("elements_user");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authRedirectPath = (path) => {
  return {
    type: actionTypes.AUTH_REDIRECT_PATH,
    path,
  };
};

export const checkAutoAuth = () => {
  return (dispatch) => {
    const data = JSON.parse(localStorage.getItem("elements_user"));
    const token = JSON.parse(localStorage.getItem("elements_token"));
    if (!token) {
      dispatch(authLogout());
    } else {
      delete data.token;

      dispatch(authSuccess(data, token));
    }
  };
};
