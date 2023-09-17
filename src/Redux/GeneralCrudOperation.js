
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utilities/api";

const initialState = {
    Create: null,
    loading: false,
    errorMessage: null,
    successMessageCreate: null,
    getData: null,
    successMessageDeleted: null,
    SuccessMessageUpdated: null,
    GetRoomFacilities: null,
    GetRoomOccupancy: null,
    GetRoomType: [],
    GetMarket: null,
    getGeneralSetting: null,
    getSMTP: null,
    getVat: null,
    getBoard: null,
    getDestination: null,
    SuccessFullyAddedRoomOccupancy: null,
    getSeason: null,
    SuccessFullCreatedSeasonInterVal:null,
    loadingSeasonInterval:false,
};
///  Create   ////
export const handlerCreate = createAsyncThunk(
    "general/create",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/create`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///  Create SeasonInterval   ////
export const handlerCreateSeasonInterval = createAsyncThunk(
    "general/createSeasonInterval",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/create`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///  Create Room Occupancy   ////
export const handlerCreateRoomOccupancy = createAsyncThunk(
    "general/createRoomOccupancy",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/create`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///  get   ////
export const handlerGet = createAsyncThunk(
    "general/get",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///   get Market   ////
export const handlerGetMarket = createAsyncThunk(
    "general/getMarket",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///   get Room Type   ////
export const handlerGetRoomType = createAsyncThunk(
    "general/getMarRoomType",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///   get Room Occupancy   ////
export const handlerGetOccupancy = createAsyncThunk(
    "general/getMarOccupancy",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///   get Room Facilities   ////
export const handlerGetFacilities = createAsyncThunk(
    "general/getRoomFacilities",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///  delete   ////
export const handleDelete = createAsyncThunk(
    "general/delete",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/delete`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///  Update   ////
export const handlerUpdate = createAsyncThunk(
    "general/update",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/update`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
export const handlerGetVAt = createAsyncThunk(
    "general/getRoomVat",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
export const handlerGetSMTP = createAsyncThunk(
    "general/getRoomSMTP",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
export const handlerGeneralSetting = createAsyncThunk(
    "general/getRoomGeneralSetting",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
///   get Board   ////
export const handlerGetBoard = createAsyncThunk(
    "general/getBoard",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
/// get Destination ///
export const handlerGetDestination = createAsyncThunk(
    "general/getDestination",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);
/// get Season ///
export const handlerGetSeason = createAsyncThunk(
    "general/getSeason",
    async (data, thunkAPI) => {
        data.key = import.meta.env.VITE_APP_KEY
        try {
            const response = await api.post(`/api/get`, data)
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
        ResetSuccessMessage(state, action) {
            state.successMessageCreate = null;
        },
        ResetSuccessMessageDeleted(state, action) {
            state.successMessageDeleted = null;
        },
        ResetSuccessMessageUpdated(state, action) {
            state.SuccessMessageUpdated = null;
        },
        ResetSuccessAddedRoomOccupancy(state, action) {
            state.SuccessFullyAddedRoomOccupancy = null;
        },
        ResetSuccessFullCreatedSeasonInterVal(state, action) {
            state.SuccessFullCreatedSeasonInterVal = null;
        },
        
    },
    extraReducers: (builder) => {
        /// Create //// 
        builder.addCase(handlerCreate.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerCreate.fulfilled, (state, action) => {
            state.successMessageCreate = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerCreate.rejected, (state, action) => {
            state.Auth = null;
            state.loading = false;
            state.errorMessage = action.payload;
        });
        /// Get  //// 
        builder.addCase(handlerGet.pending, (state, action) => {

        });
        builder.addCase(handlerGet.fulfilled, (state, action) => {
            state.getData = action.payload;
        });
        builder.addCase(handlerGet.rejected, (state, action) => {
            state.errorMessage = action.payload;
        });

        /// delete  //// 
        builder.addCase(handleDelete.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handleDelete.fulfilled, (state, action) => {
            state.successMessageDeleted = true;
            state.loading = false;
        });
        builder.addCase(handleDelete.rejected, (state, action) => {
            state.successMessageDeleted = null;
            state.errorMessage = action.payload;
            state.loading = false;
        });

        /// Update  //// 
        builder.addCase(handlerUpdate.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerUpdate.fulfilled, (state, action) => {
            state.SuccessMessageUpdated = true;
            state.loading = false;
        });
        builder.addCase(handlerUpdate.rejected, (state, action) => {
            state.SuccessMessageUpdated = false;
            state.errorMessage = action.payload;
            state.loading = false;
        });
        /// get market  //// 
        builder.addCase(handlerGetMarket.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetMarket.fulfilled, (state, action) => {
            state.GetMarket = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetMarket.rejected, (state, action) => {
            state.loading = false;
        });
        /// get room type  //// 
        builder.addCase(handlerGetRoomType.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetRoomType.fulfilled, (state, action) => {
            state.GetRoomType = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetRoomType.rejected, (state, action) => {
            state.loading = false;
        });

        /// get Occupancy  //// 
        builder.addCase(handlerGetOccupancy.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetOccupancy.fulfilled, (state, action) => {
            state.GetRoomOccupancy = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetOccupancy.rejected, (state, action) => {
            state.loading = false;
        });

        /// get facilities  //// 
        builder.addCase(handlerGetFacilities.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetFacilities.fulfilled, (state, action) => {
            state.GetRoomFacilities = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetFacilities.rejected, (state, action) => {
            state.loading = false;
        });
        /// get VAT  //// 
        builder.addCase(handlerGetVAt.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetVAt.fulfilled, (state, action) => {
            state.getVat = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetVAt.rejected, (state, action) => {
            state.loading = false;
        });

        /// get SMTP  //// 
        builder.addCase(handlerGetSMTP.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetSMTP.fulfilled, (state, action) => {
            state.getSMTP = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetSMTP.rejected, (state, action) => {
            state.loading = false;
        });

        /// get General Setting  //// 
        builder.addCase(handlerGeneralSetting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGeneralSetting.fulfilled, (state, action) => {
            state.getGeneralSetting = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGeneralSetting.rejected, (state, action) => {
            state.loading = false;
        });

        ///  get BOARD  //// 
        builder.addCase(handlerGetBoard.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetBoard.fulfilled, (state, action) => {
            state.getBoard = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetBoard.rejected, (state, action) => {
            state.loading = false;
        });

        /// get destination  //// 
        builder.addCase(handlerGetDestination.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetDestination.fulfilled, (state, action) => {
            state.getDestination = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetDestination.rejected, (state, action) => {
            state.loading = false;
        });

        /// get Room Occupancy  //// 
        builder.addCase(handlerCreateRoomOccupancy.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerCreateRoomOccupancy.fulfilled, (state, action) => {
            state.SuccessFullyAddedRoomOccupancy = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerCreateRoomOccupancy.rejected, (state, action) => {
            state.loading = false;
        });

        /// get Season  //// 
        builder.addCase(handlerGetSeason.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(handlerGetSeason.fulfilled, (state, action) => {
            state.getSeason = action.payload;
            state.loading = false;
        });
        builder.addCase(handlerGetSeason.rejected, (state, action) => {
            state.loading = false;
        });

        /// Create Season InterVal  //// 
        builder.addCase(handlerCreateSeasonInterval.pending, (state, action) => {
            state.loadingSeasonInterval = true;
        });
        builder.addCase(handlerCreateSeasonInterval.fulfilled, (state, action) => {
            state.SuccessFullCreatedSeasonInterVal = action.payload;
            state.loadingSeasonInterval = false;
        });
        builder.addCase(handlerCreateSeasonInterval.rejected, (state, action) => {
            state.loadingSeasonInterval = false;
        });


    },
});

export const { ResetErrorMessage, logout, updatedResetPassword, ResetSuccessMessage,
    ResetSuccessMessageDeleted, ResetSuccessMessageUpdated, ResetSuccessAddedRoomOccupancy  , ResetSuccessFullCreatedSeasonInterVal} = userReducer.actions;
export default userReducer.reducer;