import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { sweetAlertMixin } from '../../components/Utils/Alert/AlertState'

export const loginUser = createAsyncThunk('user/loginUser', async (values) => {
    try {
        const response = await axios.post(process.env.REACT_APP_API_POST_LOGIN , values)
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
    },
    reducers:{
        logOut: (state) => {
            localStorage.clear()
            state.token = ""
        }
    }
})
export const {logOut} = userSlice.actions
export default userSlice.reducer