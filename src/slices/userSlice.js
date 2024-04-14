import { createSlice } from "@reduxjs/toolkit";
import { loadUser, login, register } from "../actions/userActions.js";

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
  success: false,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.isAuth = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.error = action.payload;
      })
      .addCase(loadUser.pending, (state) => {
        (state.loading = true), (state.isAuth = false);
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        (state.loading = false), (state.isAuth = true);
        // state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        (state.loading = false),
          (state.isAuth = false),
          (state.user = null),
          (state.error = action.payload);
      });
  },
});

export default userSlice.reducer;
