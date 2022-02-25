import { createSlice } from "@reduxjs/toolkit";

type scrollState = {
  scrollTop: number;
  scrollLeft: number;
};

const initialState: scrollState = {
  scrollTop: 0,
  scrollLeft: 0,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollTop: (state, { payload }) => {
      state.scrollTop = payload;
    },
  },
});

export const { setScrollTop } = scrollSlice.actions;
export const scrollSelector = (state: { scroll: scrollState }) => state.scroll;
export default scrollSlice.reducer;
