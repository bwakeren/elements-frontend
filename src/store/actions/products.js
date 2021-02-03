import * as actionTypes from "./actionTypes";
import { datas } from "../data";

export const fetchProductStart = () => ({
  type: actionTypes.FETCH_PRODUCTS_START,
});
export const fetchProductSuccess = (product) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  product,
});
export const fetchProductFail = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_FAIL,
  error,
});

export const initProduct = () => {
  return (dispatch) => {
    dispatch(fetchProductStart());
    dispatch(fetchProductSuccess(datas));
  };
};
