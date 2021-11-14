import { combineReducers } from "redux";

import modalReducer from "./modalSlice";
import routeReducer from "./routeSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  route: routeReducer,
});

export default rootReducer;
