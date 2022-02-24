import { configureStore } from '@reduxjs/toolkit';
//! imp reducers
import usersReducer from '../slices/users/usersSlice';
import modalSlice from '../slices/modal/modalSlice';
import servicesSlice from '../slices/services/servicesSlice';

const store = configureStore({
    reducer: {
        user: usersReducer,
        modal: modalSlice,
        service: servicesSlice,
    },
});

export default store;
