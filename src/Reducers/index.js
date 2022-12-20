import { combineReducers } from "redux";

import Page from "./Pages_Reducer";
import FrontStyling from "./FrontStylingReducer";
import Canvas from "./CanvasReducer";
import View from "./ViewReducer";
export default combineReducers({
  Page,
  FrontStyling,
  Canvas,
  View,
});
