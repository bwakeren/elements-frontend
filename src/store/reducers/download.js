import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  geolocation: {},
  download_today: 0,
  download_total: 0,
  error: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GEOLOCATION_SUCCESS:
      return updateObject(state, { geolocation: { ...action.data } });
    case actionTypes.FETCH_GEOLOCATION_FAIL:
      return updateObject(state, { error: action.error });
    case actionTypes.DOWNLOAD_SUCCESS:
      return updateObject(state, {
        download_today: action.download_today,
        download_total: action.download_total,
      });
    case actionTypes.DOWNLOAD_FAIL:
      return updateObject(state, { error: action.error });
    default:
      return state;
  }
};

export default reducer;
