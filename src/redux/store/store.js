import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../authSlice/authSlice'
import clientsSlice from '../clientsSlice/clientsSlice';

export default configureStore({
    reducer:{
        user : userSlice,
        client : clientsSlice
    }
})