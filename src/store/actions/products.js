import * as actionTypes from "./actionTypes";
import axios from "../../axios_db";

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

export const initProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchProductStart());
    axios
      .get(`/api/components/by_cat/${id}`)
      .then((response) => {
        const data = response.data.data.map((data) => {
          return {
            ...data,
            id: data.id_components,
          };
        });

        dispatch(fetchProductSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error));
      });
  };
};
