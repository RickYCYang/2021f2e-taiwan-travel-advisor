import { createSlice } from "@reduxjs/toolkit";

interface Stop {
  StationID: string;
  StopBoarding: number;
  StopID: string;
  StopName: {
    En: string;
    Zh_tw: string;
  };
  StopPosition: {
    PositionLat: number;
    PositionLon: number;
  };
  StopSequence: number;
  StopUID: string;
  estimateTime: number;
  stopStatus: number;
}

interface Route {
  stops: Array<Stop>;
}

interface State {
  route: {
    stops: Array<any>;
  };
}

export const initialState: Route = {
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
export const routeSelector = (state: State) => state.route;
export default routeSlice.reducer;
