import { BLACK_CANVAS, GREEN_CANVAS, RED_CANVAS } from "../Actions/types";

import { canvas } from "../Assets/flags";

const { frontBlack, backBlack, frontRed, backRed, frontGreen, backGreen } =
  canvas;

const INITIAL_STATE = {
  front: frontBlack,
  back: backBlack,
};

const setCanvas = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLACK_CANVAS:
      return { ...state, front: frontBlack, back: backBlack };
    case GREEN_CANVAS:
      return { ...state, front: frontGreen, back: backGreen };
    case RED_CANVAS:
      return { ...state, front: frontRed, back: backRed };
    default:
      return state;
  }
};

export default setCanvas;
