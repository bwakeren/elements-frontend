import * as actionTypes from "./actionTypes";

export const contentStart = () => ({ type: actionTypes.CONTENTS_START });
export const contentSuccess = (content) => ({
  type: actionTypes.CONTENTS_SUCCESS,
  content,
});
export const contentDelete = (index) => ({
  type: actionTypes.CONTENTS_DELETE,
  index,
});
export const contentFail = (error) => ({
  type: actionTypes.CONTENTS_FAIL,
  error,
});

export const addContent = (html) => {
  return (dispatch) => {
    dispatch(contentStart());
    dispatch(contentSuccess(html));
  };
};

export const deleteContent = (index) => {
  return (dispatch) => {
    dispatch(contentStart());
    dispatch(contentDelete(index));
  };
};
