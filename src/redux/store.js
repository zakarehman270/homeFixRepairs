import { configureStore } from "@reduxjs/toolkit";
import { MyApi } from "../redux/api";
import authReducer from "../redux/AuthReducer";

export const store = configureStore({
  reducer: {
    [MyApi.reducerPath]: MyApi.reducer, // Integrating the API slice
    Auth: authReducer,                 // Adding the auth reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MyApi.middleware), // Adding API middleware
});

export default store;
