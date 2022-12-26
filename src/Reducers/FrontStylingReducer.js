import {
  FRONT_STYLED_IMAGE,
  FRONT_STYLED_TEXT,
  FRONT_STYLED_UPLOAD,
  DELETE_FRONT_STYLED_IMAGE,
  DELETE_FRONT_STYLED_UPLOAD,
} from "../Actions/types.js";

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
  upload: {
    uploadValue: null,
    uploadSize: 10,
    uploadRtn: 0,
    bool: false,
  },
};

const { image, upload } = INITIAL_STATE;

const frontSideStyling = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRONT_STYLED_TEXT:
      return { ...state, text: action.payload };
    case FRONT_STYLED_IMAGE:
      return { ...state, image: action.payload };
    case FRONT_STYLED_UPLOAD:
      return { ...state, upload: action.payload };
    case DELETE_FRONT_STYLED_IMAGE:
      return { ...state, image };
    case DELETE_FRONT_STYLED_UPLOAD:
      return { ...state, upload };
    default:
      return state;
  }
};

export default frontSideStyling;
