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
  id_card: "",
  surname: "",
  city: "",
  mobile: "",
  gender: "",
  birthday: null,
  roles: [],
  token: "",
  balance: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.name = "";
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("persist:root");
      localStorage.removeItem("root");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userData.fulfilled, (state, action) => {
      const data = action.payload?.data?.data;

      if (action.payload) {
        state.name = data?.user?.name;
        state.surname = data?.user?.surname;
        state.gender = data?.user?.gender[0]?._;
        state.mobile = data?.user?.mobile;
        state.city = data?.user?.city;
        state.id_card = data?.user?.id_card;
        state.birthday = data?.user?.birthday;
        state.token = data?.token;
        state.balance = data?.user.balance;
        localStorage.setItem("toekn", data?.token);
        state.isLoggedIn = true;
      }
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice;
