
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiWithFormData } from "../utilities/api";

const initialState = {
	uploadHotelImage: null,
	loading: false,
	errorMessage: null,
	resetPassword: null,
	loadingResetPass: null
};
///  login   ////
export const handlerUploadImage = createAsyncThunk(
	"fileUpload/hotelUpload",
	async (data, thunkAPI) => {
		try {
			const response = await apiWithFormData.post(`/hotel/image/`, data)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.data);
		}
	}
);
export const handlerDeleteImage = createAsyncThunk(
	"fileUpload/hotelDelete",
	async (data, thunkAPI) => {
		data.key = import.meta.env.VITE_APP_KEY
		try {
			const response = await apiWithFormData.delete(`/hotel/image/${data}/`)
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
		ResetUploadImage(state, action) {
			state.uploadHotelImage = null;
		},
	},
	extraReducers: (builder) => {
		/// LOGIN USER  //// 
		builder.addCase(handlerUploadImage.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerUploadImage.fulfilled, (state, action) => {
			state.uploadHotelImage = action.payload;
			state.loading = false;
		});
		builder.addCase(handlerUploadImage.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});

		/// LOGIN USER  //// 
		builder.addCase(handlerDeleteImage.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(handlerDeleteImage.fulfilled, (state, action) => {

			state.loading = false;
		});
		builder.addCase(handlerDeleteImage.rejected, (state, action) => {
			state.Auth = null;
			state.loading = false;
			state.errorMessage = action.payload;
		});


	},
});

export const { ResetErrorMessage, logout, updatedResetPassword, ResetUploadImage } = userReducer.actions;
export default userReducer.reducer;