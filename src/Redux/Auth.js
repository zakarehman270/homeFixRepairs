
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let userData = localStorage.getItem("userToken")
const initialState = {
	Auth: userData ? userData : null,
	loading: false,
	errorMessage: null,
	resetPassword: null,
	loadingResetPass: null
};
///  login   ////
export const handlerLoginUser = createAsyncThunk(
	"auth/login",
	async (user, thunkAPI) => {
		try {
			const response = await axios({
				method: "post",
				url: import.meta.env.VITE_APP_BASE_URL + `/user/token/`,
				data: user,
				headers: {
					"Content-Type": "application/json",
				},
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);


const userReducer = createSlice({
	name: "person",
	initialState,
	reducers: {
		ResetErrorMessage(state, action) {
			state.errorMessage = null;
		},
		logout(state, action) {
			state.Auth = null,
				state.loading = false,
				state.errorMessage = null,
				state.resetPassword = null,
				state.loadingResetPass = null
		},
		updatedResetPassword(state, action) {
			state.resetPassword = null
		},
	},
	extraReducers: (builder) => {
		/// LOGIN USER  //// 
		builder.addCase(handlerLoginUser.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerLoginUser.fulfilled, (state, action) => {
			state.Auth = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerLoginUser.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});
	},
});

export const { ResetErrorMessage, logout, updatedResetPassword } = userReducer.actions;
export default userReducer.reducer;