import React from 'react'
import { Product, CategoryFilter } from './../../model/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
    loading: boolean
    error: string
    products: Product[]
    ProductContainer: Product[]
}

interface ProductsPayload {
    products: Product[]
}

const initialState: ProductState = {
    loading: false,
    error: '',
    products: [],
    ProductContainer: [],
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
            state.ProductContainer = action.payload.products
            state.error = ''
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
        productFilter(state, action: PayloadAction<CategoryFilter>) {
            state.products = state.ProductContainer.filter(p => p.category.includes(action.payload.category))
        }
    }
})

export default ProductSlice.reducer;