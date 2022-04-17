import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../authSlice/authSlice'
import clientsSlice from '../clientsSlice/clientsSlice';
import casesSlice from '../casesSlice/casesSlice';

export default configureStore({
    reducer:{
        user : userSlice,
        client : clientsSlice,
        case : casesSlice
    }
})