import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  products: [],
  loading: false,
  error: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return updateObject(state, {
        loading: true,
      });
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return updateObject(state, {
        products: action.product,
        loading: false,
      });
    case actionTypes.PRODUCTS_START:
      return updateObject(state, {
        loading: true,
      });
    case actionTypes.PRODUCTS_SUCCESS:
      return updateObject(state, {
        loading: false,
        products: state.products.concat(action.product),
      });
    default:
      return state;
  }
};

export default reducer;
