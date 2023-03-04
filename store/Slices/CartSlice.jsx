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
      console.log(indentory_id, "kkk");
      const response = await deleteAllProductOrderApi(indentory_id);
      console.log(response);
      if (response === 401) {
        return indentory_id;
      }
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    logout(state, action) {},
    addItem(state, action) {
      console.log(action);
      if (!state.items) {
        state.items = [];
      }

      const item = action?.payload?.inventory;
      console.log({ item });
      const qty = item?.qty ? item.qty : 1;
      const price = item?.price?.price;
      const updatedTotalAmount = +state.totalAmount + parseFloat(price) * +qty;
      console.log(+state.totalAmount, parseFloat(price), +qty);
      console.log(item.price);
      const existingCartItemIndex = state.items?.findIndex(
        (myitem) => myitem.id == item.id
      );
      let existingCartItem = undefined;
      if (state?.items) {
        existingCartItem = state?.items[existingCartItemIndex];
      }
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          qty: +existingCartItem.qty + +qty,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        console.log(item, "lllllllllllllll");
        const myItem = { ...item, qty: 1 };
        console.log({ myItem });
        updatedItems = state.items.concat(myItem);
      }
      console.log(updatedItems);
      state.items = updatedItems;
      console.log({ updatedItems, updatedTotalAmount }, state.items);
      state.totalAmount = +updatedTotalAmount;
    },
    removeItem(state, action) {
      console.log(action);
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id == action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount =
        +state.totalAmount - +parseFloat(existingItem?.price);
      let updatedItems;
      if (existingItem.qty === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          qty: existingItem.qty - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      state.items = updatedItems;
      state.totalAmount = +updatedTotalAmount;
    },
    removeWholeItem(state, action) {
      console.log(action);
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id == action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount =
        +state.totalAmount -
        +parseFloat(existingItem.price) * +existingItem.qty;
      let updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = updatedItems;

      state.totalAmount = +updatedTotalAmount > 0 ? +updatedTotalAmount : 0;
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
      if (!action.payload || action.payload === 401) {
        return;
      }
      console.log(action.payload);
      state.items = action.payload?.data?.data?.order?.items;
    });

    builder.addCase(listOfOrder.fulfilled, (state, action) => {
      console.log(action.payload || action.payload === 401);
      if (!action.payload) {
        return;
      }
      state.items = action.payload?.data?.data?.orders[0]?.items;
    });

    builder.addCase(removeWholeItems.fulfilled, (state, action) => {
      console.log(action.payload || action.payload === 401);
      if (!action.payload) {
        return;
      }
      let _d = [];
      console.log(typeof action.payload);
      if (typeof action.payload == "number") {
        _d = state.items.filter((item) => {
          return item.id != action.payload;
        });
      }
      console.log(_d);

      state.items = _d;
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
