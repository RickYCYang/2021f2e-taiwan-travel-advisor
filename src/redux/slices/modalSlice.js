import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  show: false,
  location: "",
  photos: [],
  title: "",
  description: "",
  time: "",
  charge: "",
  phone: "",
  address: "",
  class1: "",
  cycle: "",
  nonCycle: "",
};

const postSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.show = true;
      state.location = payload.location;
      state.photos = payload.photos;
      state.title = payload.title;
      state.description = payload.description;
      state.time = payload.time;
      state.charge = payload.charge;
      state.phone = payload.phone;
      state.address = payload.address;
      state.class1 = payload.class1;
      state.cycle = payload.cycle;
      state.nonCycle = payload.nonCycle;
    },
    closeModal: (state) => {
      state.show = false;
      state.location = "";
      state.photos = [];
      state.title = "";
      state.description = "";
      state.time = "";
      state.charge = "";
      state.phone = "";
      state.address = "";
      state.class1 = "";
      state.cycle = "";
      state.nonCycle = "";
    },
  },
});

export const { openModal, closeModal } = postSlice.actions;
export const modalSelector = (state) => state.modal;
export default postSlice.reducer;
