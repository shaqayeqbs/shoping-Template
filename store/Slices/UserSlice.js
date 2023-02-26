import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { verifyCode } from "../../@core/api/authApi";
import {
  uploadCurrentUserPictureApi,
  updateUserProfile,
} from "../../@core/api/userApi";

export const userData = createAsyncThunk(
  "user/data",
  async (data, thunkAPI) => {
    try {
      const response = await verifyCode(data);
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
      const response = await uploadCurrentUserPictureApi(image);
      if (response) {
        return image;
      }
    } catch (err) {
      console.log(err);
    }
  }
);
export const updateProfile = createAsyncThunk(
  "user/update/profile",
  async (birthday, city_id, gender, lang, thunkAPI) => {
    try {
      const response = await updateUserProfile(birthday, city_id, gender, lang);
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
  id: "",
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
      const data = action.payload?.data?.data;
      if (action.payload) {
        state.id = data.user?.id;
        state.name = data?.user?.name;
        state.surname = data?.user?.surname;
        state.gender = data?.user[0]?.gender?._;
        state.mobile = data?.user?.mobile;
        state.city = data?.user[0]?.city;
        state.image = data?.user?.files[0]?.details?.location;
        state.id_card = data?.user?.id_card;
        state.birthday = data?.user[0]?.birthday;
        state.token = data?.token;
        state.balance = data?.user[0]?.balance;
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
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      const data = action?.payload;

      if (data) {
        state.birthday = data?.birthday;
      }
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice;
