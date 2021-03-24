import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  authRedirectPath: "/",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, { loading: true });
    case actionTypes.AUTH_SUCCESS:
      return updateObject(state, {
        user: action.data,
        token: action.token,
        loading: false,
      });
    case actionTypes.AUTH_REDIRECT_PATH:
      return updateObject(state, { authRedirectPath: action.path });
    default:
      return state;
  }
};

export default reducer;
