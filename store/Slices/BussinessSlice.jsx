import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  id: "",
  name: "",
  logo: "",
  description: "",
  events: [],
  addresses: [],
  connections: [],
  phone: [],
  workTimes: [],
  colors: {},
};

const businessSlice = createSlice({
  name: "bussiness",
  initialState,
  reducers: {
    fetchFirspageData: (state, action) => {
      const data = action.payload?.data?.domin?.business;

      let logoImg = "";
      data?.files?.forEach((item) => {
        if (item.type._ === "logo") {
          logoImg = item.details.location;
        }
      });

      state.id = data?.id;
      state.name = data?.name;
      state.logo = logoImg;
      state.events = data?.events;
      state.phone = data?.connections?.phone;
      state.addresses = data?.addresses;
      state.connections = data?.connections?.social;
      state.description = data?.description;
      state.workTimes = data?.workTimes;
      state.colors = data?.template?.colorPalette;
    },
  },
});

export const businessAction = businessSlice.actions;
export default businessSlice;
