import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import businessSlice from "./Slices/BussinessSlice";

const combinedReducer = combineReducers({
  businessSlice,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(makeStore);
