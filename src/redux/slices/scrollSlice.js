import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  scrollTop: 0,
  scrollLeft: 0
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
export const scrollSelector = (state) => state.scroll;
export default scrollSlice.reducer;
