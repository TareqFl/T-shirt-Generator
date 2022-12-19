import { SET_PAGE } from "../Actions/types";

const INITIAL_STATE = null;

const PageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAGE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default PageReducer;
