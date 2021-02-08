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

export const initProduct = () => {
  return (dispatch) => {
    dispatch(fetchProductStart());
    axios
      .get("/api/components/show")
      .then((response) => {
        dispatch(fetchProductSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchProductFail(error));
      });
  };
};

// export const productStart = () => ({
//   type: actionTypes.PRODUCTS_START,
// });
// export const productSuccess = (product) => ({
//   type: actionTypes.PRODUCTS_SUCCESS,
//   product,
// });
// export const productFail = (error) => ({
//   type: actionTypes.PRODUCTS_FAIL,
//   error,
// });

// export const used = (used) => {
//   return (dispatch) => {
//     dispatch(productStart());
//     dispatch(productSuccess(datas));
//   };
// };
