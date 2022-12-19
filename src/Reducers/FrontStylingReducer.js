import { FRONT_STYLED_IMAGE, FRONT_STYLED_TEXT } from "../Actions/types.js";

const INITIAL_STATE = {
  text: {
    value: "",
    fntSize: 1,
    ltrSpace: 1,
    rt: 0,
    color: "#fff",
    font: "",
    bool: false,
  },
  image: {
    imageValue: null,
    imageSize: 10,
    rtn: 0,
    bool: false,
  },
};

const frontSideStyling = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRONT_STYLED_TEXT:
      return { ...state, text: action.payload };
    case FRONT_STYLED_IMAGE:
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

export default frontSideStyling;
