import { createSlice } from "@reduxjs/toolkit";

interface Scroll {
  scrollTop: number;
  scrollLeft: number;
}

interface State {
  scroll: Scroll;
}

const initialState: Scroll = {
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
export const scrollSelector = (state: State) => state.scroll;
export default scrollSlice.reducer;
