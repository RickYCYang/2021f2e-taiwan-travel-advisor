import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  keyword: "",
  city: "",
  category: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, { payload }) => {
      console.log("payload", payload);
      state.keyword = payload;
    },
    toggleCategory: (state, { payload }) => {
      state.category = payload;
    },
    toggleCity: (state, { payload }) => {
      console.log("payload", payload);
      state.city = payload;
    },
  },
});

export const { setKeyword, toggleCategory, toggleCity } = searchSlice.actions;
export const searchSelector = (state) => state.search;
export default searchSlice.reducer;
