import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
  // headers: {
  //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzliYTU3MGM0OTVlZDZlMjVmM2M5OWQiLCJpYXQiOjE3MzgyNTM2ODB9.MI2Gas9M4UPyPdaWToIr0OU8kyVRgJfSs7iwfg0PdkA"
  // }token
});


export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiRegisterUser = createAsyncThunk(
    "auth/registerUser",
    async (formData, thunkApi) => {
      // formData -> { "name": "Adrian Cross", "email": "across@mail.com",  "password": "examplepwd12345" }
      try {
        const { data } = await authInstance.post("/users/signup", formData);
   console.log("data:",data);
        setToken(data.token)
       
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  export const apiLoginUser = createAsyncThunk(
    "auth/loginUser",
    async (formData, thunkApi) => {
      // formData -> { "email": "across@mail.com",  "password": "examplepwd12345" }
      try {
        const { data } = await authInstance.post("/users/login", formData);
       
  
        setToken(data.token)
        console.log("data: ", data);
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const apiGetCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
  
      if (!token) {
        return thunkApi.rejectWithValue("No token provided to refresh user data");
      }
  
      try {
        setToken(token);
        const { data } = await authInstance.get("/users/current");
  
        console.log("data: ", data);
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const apiLogoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, thunkApi) => {
      try {
        const { data } = await authInstance.post("/users/logout");
  
        clearToken();
        console.log("data: ", data);
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );