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

export const startDownload = () => ({ type: actionTypes.DOWNLOAD_START });

export const successDownload = (download_today, download_total) => ({
  type: actionTypes.DOWNLOAD_SUCCESS,
  download_today,
  download_total,
});

export const failDownload = (error) => ({
  type: actionTypes.DOWNLOAD_FAIL,
  error,
});

export const getDownload = (id) => {
  return (dispatch) => {
    dispatch(startDownload());
    axios
      .get(`/api/downloaded/max/${id}`)
      .then((response) => {
        // const download_today = response.data.data.filter((d) => {
        //   return new Date(d.created_at).getTime() <= new Date().getTime();
        // });

        dispatch(
          successDownload(response.data.data.length, response.data.data.length)
        );
      })
      .catch((error) => {
        dispatch(failDownload(error));
      });
  };
};
