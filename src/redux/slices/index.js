import { combineReducers } from "redux";

import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  search: searchReducer,
});

export default rootReducer;
