import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import businessSlice from "./Slices/BussinessSlice";
import userSlice from "./Slices/UserSlice";
import cartSlice from "./Slices/CartSlice";
import thunk from "redux-thunk";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const reducers = combineReducers({
  user: userSlice.reducer,
  businessSlice: businessSlice.reducer,
  cart: cartSlice.reducer,
});
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      middleware: [thunk],
    }),
});
export default store;
