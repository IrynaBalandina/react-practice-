import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { usersReducer } from "./users/usersReducer";
import { filterReducer } from "./filters/filterReducer";
import { shopReducer } from "./shop/shopSlice";
import { authReducer } from "./phonebook/authSlice.js";
import { contactsReducer } from "./phonebook/contactsSlice.js";

const usersConfig = {
  key: "usersKey",
  storage,
  //   whitelist: ["users"], // blacklist: ["showProfilesList"]
};

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    usersData: persistReducer(usersConfig, usersReducer),
    filter: filterReducer,
    shop: shopReducer,
    auth: persistReducer(authConfig, authReducer),
    contacts:contactsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);