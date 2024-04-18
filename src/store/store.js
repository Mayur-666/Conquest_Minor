import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  devTools: true,
  // middleware: () =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});

export default store;
