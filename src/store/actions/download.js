import * as actionTypes from "./actionTypes";
import Axios from "axios";
import axios from "../../axios_db";

export const fetchGeolocationSuccess = (data) => ({
  type: actionTypes.FETCH_GEOLOCATION_SUCCESS,
  data,
});

export const fetchGeolocationFail = (error) => ({
  type: actionTypes.FETCH_GEOLOCATION_FAIL,
  error,
});

export const fetchGeolocation = () => {
  return (dispatch) => {
    Axios.get(
      "https://geolocation-db.com/json/344ec440-6bfc-11eb-a0c0-b5dee9e67313"
    )
      .then((response) => {
        dispatch(fetchGeolocationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchGeolocationFail(error));
      });
  };
};

export const postDownload = (data) => {
  return (dispatch) => {
    axios.post("/api/downloaded/store", data);
  };
};
