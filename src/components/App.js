import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import store from '../redux/store/store'
import { Provider } from 'react-redux'
import Dashboard from './Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const App = () => {
    return (
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
    )
}

export default App