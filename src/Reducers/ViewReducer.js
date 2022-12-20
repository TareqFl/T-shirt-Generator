import { SET_FRONT, SET_BACK } from "../Actions/types";

const INITIAL_STATE = true;

const setView = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FRONT:
      return (state = true);
    case SET_BACK:
      return (state = false);
    default:
      return state;
  }
};

export default setView;
