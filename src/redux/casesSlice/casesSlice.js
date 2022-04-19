import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getAuthorizationHeader } from "../../Services/privateApiService";

export const getCases = createAsyncThunk('cases/getCases', async (objeto) => {
    try {
        const response = await axios(`${process.env.REACT_APP_API_GET_CASES}client=${objeto.id}&local_updated__da
        te__gte=${objeto.desde}&local_updated__date__lte=${objeto.hasta}` , getAuthorizationHeader())

        return response.data
    }
    catch (err) {
        console.log(err)
    }
})

const caseSlice = createSlice({
    name: 'cases',
    initialState: {
        cases: [],
        status: null
    },
    extraReducers: {
        [getCases.pending]: (state) => {
            state.status = 'Loading'
        },
        [getCases.fulfilled]: (state, { payload }) => {
            state.status = 'Success'
            state.cases = payload.results
        },
        [getCases.rejected]: (state) => {
            state.status = 'Failed'
        }
    }
})

export default caseSlice.reducer