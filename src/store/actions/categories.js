import axios from "../../axios_db";
import * as actionTypes from "./actionTypes";

export const categoryStart = () => ({
  type: actionTypes.FETCH_CATEGORIES_START,
});

export const categorySuccess = (category) => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  category,
});

export const categoryFail = (error) => ({
  type: actionTypes.FETCH_CATEGORIES_FAIL,
  error,
});

export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(categoryStart());

    axios
      .get("/api/categories/show")
      .then((response) => {
        const data = response.data.data.map((data) => {
          return {
            ...data,
            openSubC: false,
          };
        });
        dispatch(categorySuccess(data));
      })
      .catch((error) => {
        dispatch(categoryFail(error));
      });
  };
};
