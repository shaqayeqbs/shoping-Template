import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getListOfOrderApi,
  deleteProductOrderApi,
  storeNewProductOrderApi,
  deleteAllProductOrderApi,
} from "../../@core/api/cartApi";

export const listOfOrder = createAsyncThunk(
  "product/list",
  async (id, thunkAPI) => {
    console.log({ id });
    try {
      const response = await getListOfOrderApi(id);
      console.log({ response });
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);
export const storeNewProductOrder = createAsyncThunk(
  "product/add",
  async (inventory_id, thunkAPI) => {
    try {
      const response = await storeNewProductOrderApi(inventory_id);
      return response?.data?.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteProductOrder = createAsyncThunk(
  "product/delete",
  async (indentory_id, thunkAPI) => {
    try {
      const response = await deleteProductOrderApi(indentory_id);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeWholeItems = createAsyncThunk(
  "product/deleteAll",
  async (indentory_id, thunkAPI) => {
    try {
      const response = await deleteAllProductOrderApi(indentory_id);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    logout(state, action) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(storeNewProductOrder.fulfilled, (state, action) => {
      console.log(action.payload);
      if (!action.payload) {
        return;
      }
      state.items = action.payload?.order.items;
    });

    builder.addCase(deleteProductOrder.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      console.log(action.payload);
      state.items = action.payload?.data?.data?.order?.items;
    });

    builder.addCase(listOfOrder.fulfilled, (state, action) => {
      console.log(action.payload);
      state.items = action.payload?.data?.data?.orders[0]?.items;
    });

    builder.addCase(removeWholeItems.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.items = [];
      }
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
