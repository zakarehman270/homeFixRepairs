import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//==============Reducers ================
import AuthSlice from "./Redux/Auth";
import GeneralCrudOperation from './Redux/GeneralCrudOperation'
import ImageUpload from './Redux/ImageUpload'
const reducers = combineReducers({
  auth: AuthSlice,
  GeneralCrudOperation: GeneralCrudOperation,
  ImageUpload:ImageUpload
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth",] // Specify the reducers to persist
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});