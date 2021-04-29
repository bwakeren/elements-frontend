import * as actionTypes from "./actionTypes";
import axios from "../../axios_db";

export const authStart = () => ({ type: actionTypes.AUTH_START });

export const authSuccess = (data, token) => ({
  type: actionTypes.AUTH_SUCCESS,
  data,
  token,
});

export const authFail = (error) => ({ type: actionTypes.AUTH_FAIL, error });

export const authLogin = (token) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .get("/api/user_data/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        axios
          .get(`/api/subscribe/get_subs/${response.data.data.id}`)
          .then((res) => {
            dispatch(
              authSuccess(
                {
                  ...response.data.data,
                  isPremium:
                    res.data.data === null
                      ? false
                      : res.data.data.status === "2",
                },
                token
              )
            );
          })
          .catch((error) => {
            dispatch(authFail(error));
          });
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const authEdit = (data, token) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("/api/user/update", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        axios
          .get(`/api/subscribe/get_subs/${response.data.data.id}`)
          .then((res) => {
            dispatch(
              authSuccess(
                {
                  ...response.data.data,
                  isPremium:
                    res.data.data === null
                      ? false
                      : res.data.data.status === "2",
                },
                token
              )
            );
          })
          .catch((error) => {
            dispatch(authFail(error));
          });
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const authLogout = () => {
  localStorage.removeItem("elements_token");
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
    const token = JSON.parse(localStorage.getItem("elements_token"));
    if (!token) {
      dispatch(authLogout());
    } else {
      dispatch(authLogin(token));
    }
  };
};
