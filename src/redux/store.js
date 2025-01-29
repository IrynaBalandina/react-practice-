import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersReducer.js";
import { filterReducer } from "./filters/filterReducer.js";

export const store = configureStore({
reducer :{
usersData:usersReducer,
filter:filterReducer
}

});

