import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userSlice from "./UserSlice";
import dateSlice from "../components/dashboard/main/dateReducer";

const reducers = combineReducers({
  user: userSlice.reducer,
  usersDateData: dateSlice.reducer,
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
