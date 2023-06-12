import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.body.token);
        return data.body.token;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "users/profile",
  async (token, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        // on retire le token si invalide
        localStorage.removeItem("token");
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUsername = createAsyncThunk(
  "users/edit",
  async ({ token, username }, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userName: username,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Composant pour vérifier le token auprès du serveur et importer le profil utilisateur
export const UserProfile = () => {
  const dispatch = useDispatch();
  const { loading, token, data } = useSelector((state) => state.user);

  useEffect(() => {
    if (!loading && token && !data) {
      dispatch(fetchUser(token));
    }
  }, [dispatch, loading, token, data]);
};
