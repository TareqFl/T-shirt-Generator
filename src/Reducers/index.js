import { combineReducers } from "redux";

import Page from "./Pages_Reducer";
import FrontStyling from "./FrontStylingReducer";
import Canvas from "./CanvasReducer";
import View from "./ViewReducer";
import BackStyling from "./BackStylingReducer";
export default combineReducers({
  Page,
  FrontStyling,
  Canvas,
  BackStyling,
  View,
});
