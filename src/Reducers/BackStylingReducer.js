import { BACK_STYLES_TEXT, BACK_STYLES_NUMBER } from "../Actions/types";

const INITIAL_STATE = {
  backText: {
    textValue: "",
    backFontSize: 1,
    letterSpaceBack: 1,
  },
  backNumber: {
    Number: "",
    numberFontSize: 1,
  },
};

const setBackStylingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BACK_STYLES_TEXT:
      return { ...state, backText: action.payload };
    case BACK_STYLES_NUMBER:
      return { ...state, backNumber: action.payload };
    default:
      return state;
  }
};

export default setBackStylingReducer;
