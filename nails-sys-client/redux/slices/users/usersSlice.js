import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//! login
//! register
//! fetchAllUsers
//! Update (Edit)
//! Delete (Remove)

// First, create the thunk
export const loginUserAction = createAsyncThunk('users/login', async (payload, { rejectWithValue, getState, dispatch }) => {
    //! callback function: 1. payload (userData, formData) - 2. thunkAPI
    const config = {
        headers: {
            'Content-Type': 'application/json',
            //! help us to protected API in Application
        },
    };
    try {
        //! make http call here
        const response = await axios.post('http://localhost:5000/api/users/login', payload, config); //! sent this Payload to the Server
        return response.data;
    } catch (error) {
        if (!error?.response) {
            //! chaining simply !error && !error.response
            //! Not error Server
            throw error;
        }
        return rejectWithValue(error?.response?.data);
        // return rejectWithValue(error?.response?.data);
    }
});

//! Slices
const usersSlice = createSlice({
    //! first: name of Slice or Reducer
    name: 'users',
    initialState: { auth: 'False', users: ['Ben', 'Joe'] },
    extraReducers: (builder) => {
        //! handle pending state
        builder.addCase(loginUserAction.pending, (state, action) => {
            state.userLoading = true;
            state.userAppErr = undefined;
            state.userServer = undefined;
        });
        //! handle fulfilled state - success
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.userAuth = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServer = undefined;
        });
        //! handle rejected state
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.userLoading = false;
            state.userAppErr = action?.payload?.message;
            state.userServer = action?.payload?.message;
        });
    },
});

//! __export __actions

//! __export __reducer

// export const {}

export default usersSlice.reducer;


