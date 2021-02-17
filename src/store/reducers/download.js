import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  geolocation: {},
  error: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GEOLOCATION_SUCCESS:
      return updateObject(state, { geolocation: { ...action.data } });
    case actionTypes.FETCH_GEOLOCATION_FAIL:
      return updateObject(state, { error: action.error });
    default:
      return state;
  }
};

export default reducer;
