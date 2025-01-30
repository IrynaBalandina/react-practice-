import { getProducts, searchProducts } from "../../api/products.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiGetProducts = createAsyncThunk(
    "shop/getProducts", 
    async(_,thunkApi)=>{
try{
      const data = await getProducts({limit: 10});
      return data;
}catch(error){
return thunkApi.rejectWithValue(error.message);
}
    }
)

export const apiGetProductsByQuery = createAsyncThunk(
    "shop/getProductsByQuery",
    async (searchValue, thunkApi) => {
      try {
        const data = await searchProducts(searchValue);
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );