import { combineReducers } from "redux";

import modalReducer from "./modalSlice";
import routeReducer from "./routeSlice";
import scrollReducer from "./scrollSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  route: routeReducer,
  scroll: scrollReducer,
});

export default rootReducer;
