import { createSlice } from "@reduxjs/toolkit";

interface Modal {
  show: boolean;
  location: string;
  photos: Array<string>;
  title: string;
  description: string;
  phone?: string;
  address?: string;
  city: string;
  time: string;
  class1: string;
  cycle?: string;
  nonCycle?: string;
  charge?: string;
  website?: string;
  position?: {
    PositionLat: string;
    PositionLon: string;
  };
}

interface State {
  modal: Modal;
}

export const initialState: Modal = {
  show: false,
  location: "",
  city: "",
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
  website: "",
  position: {
    PositionLat: "",
    PositionLon: "",
  },
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
      state.city = payload.city;
      state.website = payload.website;
      state.position = payload.position;
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
      state.city = "";
      state.website = "";
      state.position = {
        PositionLat: "",
        PositionLon: "",
      };
    },
  },
});

export const { openModal, closeModal } = postSlice.actions;
export const modalSelector = (state: State) => state.modal;
export default postSlice.reducer;
export type { Modal };
