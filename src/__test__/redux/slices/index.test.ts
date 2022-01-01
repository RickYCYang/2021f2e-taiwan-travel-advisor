import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/slices/index";
import modalReducer from "redux/slices/modalSlice";
import routeReducer from "redux/slices/routeSlice";
import scrollReducer from "redux/slices/scrollSlice";

describe("redux/rootReducer", () => {
  const store = configureStore({ reducer: rootReducer });
  test("scrollReducer", () => {
    expect(store.getState().scroll).toEqual(
      scrollReducer(undefined, { type: "" })
    );
  });
  test("modalReducer", () => {
    expect(store.getState().modal).toEqual(
      modalReducer(undefined, { type: "" })
    );
  });
  test("routeReducer", () => {
    expect(store.getState().route).toEqual(
      routeReducer(undefined, { type: "" })
    );
  });
});
