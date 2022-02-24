import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { PlatformBaseUrl } from '../../../utils';
import axios from 'axios';

const initialState = {
    loading: false,
    error: false,
    serviceCategories: [],
};

export const createServiceCategory = createAsyncThunk('servicecategories/create', async ({ name }, { rejectWithValue, dispatch, getState }) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
        },
    };
    try {
        const response = await axios.post(PlatformBaseUrl('/api/servicecategories'), { name }, config);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response.data);
    }
});

const serviceCategorySlice = createSlice({
    name: 'servicecategories',
    initialState,
    reducers: {
        //! create actions
        addServiceCategoryFailed: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (value) => {
                return {
                    payload: {
                        ...value,
                        id: nanoid,
                    },
                };
            },
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createServiceCategory.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

//! exp actions
// export const { createServiceCategory } = serviceCategorySlice.actions;

//! exp reducers
export default serviceCategorySlice.reducer;
