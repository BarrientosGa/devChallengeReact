import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/LoginScreen/Login'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard/Layout/Dashboard'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { ThemeProvider } from '@mui/material'
import {theme} from './theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                    />
                    <Route exact path='/login' element={ <Login/> } />
                </Routes>
            </BrowserRouter>
        </Provider>
        </ThemeProvider>
    )
}

export default App