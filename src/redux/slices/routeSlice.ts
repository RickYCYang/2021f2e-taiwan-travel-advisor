import { createSlice } from "@reduxjs/toolkit";
import { stopOfRouteAndArrival } from "types/traffic";

type routeState = {
  stops: Array<stopOfRouteAndArrival>;
};

const initialState: routeState = {
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
export const routeSelector = (state: { route: routeState }) => state.route;
export default routeSlice.reducer;
