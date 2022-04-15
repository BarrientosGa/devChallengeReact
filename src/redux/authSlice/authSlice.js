import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { sweetAlertMixin } from '../../components/Utils/Alert/AlertState'

export const loginUser = createAsyncThunk('user/loginUser', async (values) => {
    try {
        const response = await axios.post(`https://admindev.inceptia.ai/api/v1/login/`, values)
        return response.data
    }
    catch (err) {
        console.log(err)
        return sweetAlertMixin('error', 'Por favor ingrese un email o contraseña valido')
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token') || "",
        status: null
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.status = 'Loading'
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            if (payload.login_status === 'SUCCESS') {
                state.status = 'Success'
                localStorage.setItem('token', payload.token)
                state.token = payload.token
            }
            else {
                state.status = 'Failed'
            }
        },
        [loginUser.rejected]: (state) => {
            state.status = 'Failed'
        }
    }
})

export default userSlice.reducer