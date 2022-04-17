import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCases = createAsyncThunk('cases/getCases', async (objeto) => {
    try {
        const response = await axios(`https://admindev.inceptia.ai/api/v1/inbound-case/?client=${objeto.id}&local_updated__da
        te__gte=${objeto.desde}&local_updated__date__lte=${objeto.hasta}`, {
            headers: {
                authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        return response.data
    }
    catch (err) {
        console.log(err)
    }
})

const caseSlice = createSlice({
    name: 'cases',
    initialState: {
        cases: null,
        status: null
    },
    extraReducers: {
        [getCases.pending]: (state) => {
            state.status = 'Loading'
        },
        [getCases.fulfilled]: (state, { payload }) => {
            if(state.cases === null){
                state.status = 'Success'
                state.cases = payload.results
            }
            else{
                state.cases = null
            }
                
        },
        [getCases.rejected]: (state) => {
            state.status = 'Failed'
        }
    }
})

export default caseSlice.reducer