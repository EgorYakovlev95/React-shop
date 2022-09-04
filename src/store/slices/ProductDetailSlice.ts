import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react'
import { Product } from '../../model/model';

interface ProductDetailState {
    product: Product | null
    laoding: boolean
    error: string
}

const initialState: ProductDetailState = {
    product: null,
    laoding: false,
    error: '',
}

export const ProductDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        productFetching(state) {
            state.laoding = true
        },
        productFetchingSuccess(state, action: PayloadAction<Product>) {
            state.laoding = false
            state.error = ''
            state.product = action.payload
        },
        productFetchingError(state, action: PayloadAction<Error>) {
            state.laoding = false
            state.error = action.payload.message
        }
    }
})

export default ProductDetailSlice.reducer;