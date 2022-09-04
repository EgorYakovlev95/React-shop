import React from 'react'
import { Product } from './../../model/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
    loading: boolean
    error: string
    products: Product[]
}

interface ProductsPayload {
    products: Product[]
}

const initialState: ProductState = {
    loading: false,
    error: '',
    products: []
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<ProductsPayload>) {
            state.loading = false
            state.products = action.payload.products
            state.error = ''
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export default ProductSlice.reducer;