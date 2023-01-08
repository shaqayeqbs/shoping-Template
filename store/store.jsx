import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import userSlice from "./UserSlice";
import businessSlice from "./Slices/BussinessSlice";

const reducers = combineReducers({
  // user: userSlice.reducer,
  businessSlice: businessSlice.reducer,
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
