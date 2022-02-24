import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PlatformBaseUrl } from '../../../utils';

//! ServiceCategory
export const getServiceCategoriesAsync = createAsyncThunk('services/getServiceCategoriesAsync', async () => {
    const response = await fetch(PlatformBaseUrl.baseApiUrl('/api/services'));
    if (response.ok) {
        // const {categories} = await response.json();
        // return categories; // payload Action
        const { serviceCategories } = await response.json();
        return serviceCategories; // payload Action
    }
});

export const addServiceCategoryAsync = createAsyncThunk('services/addServiceCategoryAsync', async (payload) => {
    // console.log(`servicesSlice - addServiceCategoryAsync: `, payload);
    const response = await fetch(PlatformBaseUrl.baseApiUrl('/api/services'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: payload.name }),
    });

    if (response.ok) {
        const { serviceCategory } = await response.json();
        // const { category } = data;
        return serviceCategory; //! return Action 1 Array
    }
});

//! getServiceAsync(:serviceCategoryId)
export const getServicesWithCategoryAsync = createAsyncThunk('services/getServicesWithCategoryAsync', async (payload, { getState }) => {
    // const  serviceCategoryId  = getState().service.serviceCategory.id;

    // console.log(`servicesSlice - getState().service.serviceCategory: `, serviceCategoryId);
    // console.log(`servicesSlice - id payload: `, payload);

    const response = await fetch(PlatformBaseUrl.baseApiUrl(`/api/services/${payload}`));

    if (response.ok) {
        // const {categories} = await response.json();
        // return categories; // payload Action
        const { services } = await response.json();
        return services; // payload Action
    }
});

//! Service
export const addServiceAsync = createAsyncThunk('services/addServiceSync', async (payload, { getState }) => {
    const { serviceCategoryId } = getState().modal.modalProps;

    const response = await fetch(PlatformBaseUrl.baseApiUrl(`/api/services/${serviceCategoryId}`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: payload.name, price: payload.price, content: payload.content, category: serviceCategoryId }),
    });

    if (response.ok) {
        const { service } = await response.json();
        return service; //! return Array
    }
});

const initialState = {
    isLoading: false,
    error: false,
    serviceCategories: [],
    // services: [],
};

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getServiceCategoriesAsync.pending, (state, action) => {
            console.log('getServiceCategoriesAsync pending');
        });
        builder.addCase(getServiceCategoriesAsync.fulfilled, (state, action) => {
            console.log('getServiceCategoriesAsync fulfilled');
            return {
                ...state,
                serviceCategories: action.payload,
            };
        });
        builder.addCase(addServiceCategoryAsync.fulfilled, (state, action) => {
            console.log('addServiceCategoryAsync successfully');
            // state.serviceCategories.push(action.payload.serviceCategory);
            // console.log(`action.payload: `, action.payload);
            return {
                ...state,
                serviceCategories: [...state.serviceCategories, action.payload],
            };
        });
        builder.addCase(getServicesWithCategoryAsync.pending, (state, action) => {
            console.log('getServicesWithCategoryAsync pending');
            return {
                ...state,
                // services: [],
            };
        });
        builder.addCase(getServicesWithCategoryAsync.fulfilled, (state, action) => {
            console.log('getServicesWithCategoryAsync fulfilled');
            return {
                ...state,
                services: action.payload,
            };
        });
        builder.addCase(addServiceAsync.fulfilled, (state, action) => {
            console.log('addServiceAsync successfully');
            // state.serviceCategories.push(action.payload.serviceCategory);
            //! return Object { "__v": 0, "_id": "62130b59981157099d3069e4", "category": "6210f603b91ea1b46ad611be", "content": "",
            //! "createdAt": "2022-02-21T03:47:37.260Z", "name": "222", "price": 50, "updatedAt": "2022-02-21T03:47:37.260Z",}
            
            //!___DEBUG
            // console.log(`action.payload: `, action.payload);

            const selectedServiceCategory = state.serviceCategories.find(sc => sc._id === action.payload.category)
            selectedServiceCategory.services.push(action.payload);

            // state.serviceCategories.forEach((serviceCategory) => {
            //     console.log(`serviceCategory._id: `, serviceCategory._id);
            //     if (serviceCategory._id === action.payload.category) {
            //         //!___DEBUG
            //         serviceCategory.services.push(action.payload);
            //     }
            // });

            // return {
            //     ...state,
            //     services: [...state.services, action.payload],
            // };
        });
    },
});

//! exp Actions
export const {} = servicesSlice.actions;
//! exp Reducer
export default servicesSlice.reducer;
