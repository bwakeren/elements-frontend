import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return updateObject(state, {
        categories: action.category,
        loading: false,
      });
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return updateObject(state, { error: action.error, loading: false });
    default:
      return state;
  }
};

export default reducer;
