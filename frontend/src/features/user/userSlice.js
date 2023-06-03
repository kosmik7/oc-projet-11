import { createSlice } from "@reduxjs/toolkit";
import { login, fetchUser, editUsername } from "./userAPI";

const token =
  localStorage.getItem("token") !== null ? localStorage.getItem("token") : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    error: null,
    token: token,
    loading: false,
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.data = null;
      state.token = null;
      state.loading = false;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload.body;
        state.token = token;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload;
        state.token = null;
        state.loading = false;
        state.isLoggedIn = false;
      })
      .addCase(editUsername.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.body;
      })
      .addCase(editUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
