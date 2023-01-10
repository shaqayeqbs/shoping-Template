import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bussinessByDomainApi } from "../../@core/api/BussinessApi";

// export const BussinessData = createAsyncThunk(
//   "bussiness/data",
//   async (thunkAPI) => {
//     try {
//       const response = await bussinessByDomainApi();
//       console.log({ response });
//       if (response) {
//         return response;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

export const initialState = {
  id: "",
  name: "",
  logo: "",
  description: "",
  events: [],
  addresses: [],
  connections: {},
  workTimes: [],
};

const businessSlice = createSlice({
  name: "bussiness",
  initialState,
  reducers: {
    fetchFirspageData: (state, action) => {
      console.log(action.payload);
      const data = action.payload.data.domin.business;

      let logoImg = "";
      data.files.forEach((item) => {
        if (item.type._ === "logo") {
          console.log(item);
          logoImg = item.details.location;
        }
      });

      state.id = data.id;
      state.name = data.name;
      state.logo = logoImg;
      state.events = data.events;
      state.addresses = data.addresses;
      state.connections = data.connections;
      state.description = data.description;
      state.workTimes = data.workTimes;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(BussinessData.fulfilled, (state, action) => {
  //     const data = action.payload.domin.business;

  //     let logoImg = "";
  //     data.files.forEach((item) => {
  //       if (item.type._ === "logo") {
  //         console.log(item);
  //         logoImg = item.details.location;
  //       }
  //     });

  //     state.id = data.id;
  //     state.name = data.name;
  //     state.logo = logoImg;
  //     state.events = data.events;
  //     state.addresses = data.addresses;
  //     state.connections = data.connections;
  //     state.description = data.description;
  //     state.workTimes = data.workTimes;
  //   });
  // },
});

export const businessAction = businessSlice.actions;
export default businessSlice.reducer;
