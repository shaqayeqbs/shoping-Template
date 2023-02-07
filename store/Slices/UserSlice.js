import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { verifyCode } from "../../@core/api/authApi";
import { uploadCurrentUserPictureApi } from "../../@core/api/userApi";

export const userData = createAsyncThunk(
  "user/data",
  async (data, thunkAPI) => {
    try {
      console.log("here");
      const response = await verifyCode(data);
      console.log(response);

      return response;
    } catch (err) {
      console.log(err);
    }
  }
);
export const updateProfileImage = createAsyncThunk(
  "user/update/image",
  async (image, thunkAPI) => {
    try {
      console.log("here");
      const response = await uploadCurrentUserPictureApi(image);
      console.log(response);
      if (response) {
        return image;
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
  image: "",
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
      console.log("object", action);
      const data = action.payload?.data?.data;
      console.log(data?.token);
      if (action.payload) {
        state.name = data?.user?.name;
        state.surname = data?.user?.surname;
        state.gender = data?.user?.gender[0]?._;
        state.mobile = data?.user?.mobile;
        state.city = data?.user?.city;
        state.image = data?.user?.image;
        state.id_card = data?.user?.id_card;
        state.birthday = data?.user?.birthday;
        state.token = data?.token;
        state.balance = data?.user.balance;
        localStorage.removeItem("token");
        localStorage.setItem("token", data?.token);
        state.isLoggedIn = true;
      }
    });
    builder.addCase(updateProfileImage.fulfilled, (state, action) => {
      const data = action?.payload;

      if (data) {
        state.image = data?.image;
      }
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice;
