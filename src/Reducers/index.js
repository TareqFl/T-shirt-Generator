import { combineReducers } from "redux";

import Page from "./Pages_Reducer";
import FrontStyling from "./FrontStylingReducer";
export default combineReducers({
  Page,
  FrontStyling,
});
