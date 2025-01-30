
import { createSlice } from "@reduxjs/toolkit";
import { apiGetProducts, apiGetProductsByQuery } from "./operations.js";

const INITIAL_STATE = {
    products: null,
    isLoading: false,
    error: null,
  };

  const shopSlice = createSlice({
    name: "shop",
    initialState: INITIAL_STATE,
    extraReducers: (builder) =>
      builder
        .addCase(apiGetProducts.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(apiGetProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.products = action.payload.products;
        })
        .addCase(apiGetProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  
        .addCase(apiGetProductsByQuery.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(apiGetProductsByQuery.fulfilled, (state, action) => {
          state.isLoading = false;
          state.products = action.payload.products;
        })
        .addCase(apiGetProductsByQuery.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }),
  });
  
  export const shopReducer = shopSlice.reducer;