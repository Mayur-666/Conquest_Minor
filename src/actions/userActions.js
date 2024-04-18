import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:8000/api/v1";

export const login = createAsyncThunk(
  "user/login",
  async ({ loginEmail, loginPassword }) => {
    try {
      console.log(loginEmail);
      console.log(loginPassword);
      const response = await axios.post(`${api}/login`, {
        email: loginEmail,
        password: loginPassword,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${api}/register`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loadUser = createAsyncThunk("user/load", async () => {
  try {
    const res = await axios.get(`${api}/me`);
    return res;
  } catch (error) {
    console.log(error);
  }
});
