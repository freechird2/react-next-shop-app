import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'

const rootReducer = combineReducers({
    auth: authReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
