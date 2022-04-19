import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { getAuthorizationHeader } from "../../Services/privateApiService";

export const getClient = createAsyncThunk('client/getClient',async () => {
    try{
        const response = await axios(process.env.REACT_APP_API_GET_CLIENTS ,getAuthorizationHeader())
        return response.data
    }
    catch(err) {
        console.log(err)
    }
})

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        clients : [],
        status : null
    },
    extraReducers: {
        [getClient.pending] : (state) => {
            state.status = 'Loading'
        },
        [getClient.fulfilled] : (state,{payload}) => {
            state.status = 'Success'
            state.clients = payload
        },
        [getClient.rejected]: (state) => {
            state.status = 'Failed'
        }
    }
})

export default clientSlice.reducer