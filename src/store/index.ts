import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProductReducer from './slices/ProductSlice'
import ProductDetailReducer from './slices/ProductDetailSlice'
import AuthReducer from './slices/AuthSlice'
import BoxReducer from './slices/BoxSlice'


const rootReducer = combineReducers({
    products: ProductReducer,
    productDetail: ProductDetailReducer,
    auth: AuthReducer,
    box: BoxReducer,
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']