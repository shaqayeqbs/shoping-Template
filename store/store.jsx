import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import businessSlice from "./Slices/BussinessSlice";
import userSlice from "./Slices/UserSlice";
import cartSlice from "./Slices/CartSlice";

import filterModalSlice from "./Slices/filterModalSlice";

const reducers = combineReducers({
  user: userSlice.reducer,
  businessSlice: businessSlice.reducer,
  cart: cartSlice.reducer,
  filterModal: filterModalSlice.reducer,
});

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: reducers,
});
export default store;
