import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  contents: [],
  loading: false,
  error: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CONTENTS_START:
      return updateObject(state, {
        loading: true,
      });
    case actionTypes.CONTENTS_SUCCESS:
      return updateObject(state, {
        contents: state.contents.concat(action.content),
        loading: false,
      });
    case actionTypes.CONTENTS_DELETE:
      return updateObject(state, {
        loading: false,
        contents: state.contents.filter(
          (content, index) => index !== action.index
        ),
      });
    default:
      return state;
  }
};

export default reducer;
