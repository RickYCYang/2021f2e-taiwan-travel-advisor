import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  stops: [],
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setStops: (state, { payload }) => {
      state.stops = payload;
    },
  },
});

export const { setStops } = routeSlice.actions;
export const routeSelector = (state) => state.route;
export default routeSlice.reducer;
