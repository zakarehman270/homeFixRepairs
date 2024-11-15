// src/app/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
let userData = JSON.parse(localStorage.getItem("token") || "{}");
const initialState = {
  auth: userData ? userData : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.auth = action.payload;
    },
    setClearToken: (state, action) => {
      state.auth =null;
    }
  },
});

export const { setToken , setClearToken} = authSlice.actions;
export default authSlice.reducer;
