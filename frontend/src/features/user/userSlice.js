import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        return;
      }
    } catch (error) {
      console.log("Error", error.response.data);
    }
  }
);

export const logout = createAsyncThunk("users/logout", async () => {
  localStorage.removeItem("token");
});

const token = localStorage.getItem("token");

const userSlice = createSlice({
  name: "user",
  initialState: token
    ? { username: "", token: "", isLoggedIn: true }
    : { username: "", token: "", isLoggedIn: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.username = "TempUser";
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
      });
  },
});

export default userSlice.reducer;
