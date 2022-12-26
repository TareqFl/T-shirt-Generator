import {
  SET_PAGE,
  FRONT_STYLED_TEXT,
  FRONT_STYLED_IMAGE,
  DELETE_FRONT_STYLED_IMAGE,
  BLACK_CANVAS,
  GREEN_CANVAS,
  RED_CANVAS,
  SET_FRONT,
  SET_BACK,
  BACK_STYLES_TEXT,
  BACK_STYLES_NUMBER,
  FRONT_STYLED_UPLOAD,
  DELETE_FRONT_STYLED_UPLOAD,
} from "./types";

export const setPage = (value) => {
  return {
    type: SET_PAGE,
    payload: value,
  };
};

export const frontStyledText = (value) => {
  return {
    type: FRONT_STYLED_TEXT,
    payload: value,
  };
};

export const frontStyledImage = (value) => {
  return {
    type: FRONT_STYLED_IMAGE,
    payload: value,
  };
};

export const frontStyledUpload = (value) => {
  return {
    type: FRONT_STYLED_UPLOAD,
    payload: value,
  };
};

export const deleteFrontStyledImage = () => {
  return { type: DELETE_FRONT_STYLED_IMAGE };
};
export const deleteFrontStyledUpload = () => {
  return { type: DELETE_FRONT_STYLED_UPLOAD };
};

export const set_Black_Canvas = () => {
  return { type: BLACK_CANVAS };
};

export const set_Red_Canvas = () => {
  return { type: RED_CANVAS };
};

export const set_Green_Canvas = () => {
  return { type: GREEN_CANVAS };
};

export const setFront = () => {
  return {
    type: SET_FRONT,
  };
};

export const setBack = () => {
  return {
    type: SET_BACK,
  };
};

export const setBackText = (value) => {
  return {
    type: BACK_STYLES_TEXT,
    payload: value,
  };
};

export const setBackNumber = (value) => {
  return {
    type: BACK_STYLES_NUMBER,
    payload: value,
  };
};
