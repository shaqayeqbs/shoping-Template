import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { verifyCode } from "../../@core/api/authApi";

export const userData = createAsyncThunk(
  "user/data",
  async (data, thunkAPI) => {
    try {
      console.log("here");
      const response = await verifyCode(data);
      console.log(response);
      if (response) {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const initialState = {
  isLoggedIn: false,
  name: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.name = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userData.fulfilled, (state, action) => {
      const data = action.payload?.data?.data;

      if (action.payload) {
        state.name = data?.user?.name;
        state.token = data?.token;
        state.isLoggedIn = true;
      }
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice;
