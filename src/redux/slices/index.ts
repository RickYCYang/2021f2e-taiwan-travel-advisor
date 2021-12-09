import { combineReducers } from "redux";

import modalReducer from "./modalSlice";
import routeReducer from "./routeSlice";
import scrollSlice from "./scrollSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  route: routeReducer,
  scroll: scrollSlice
});

export default rootReducer;
