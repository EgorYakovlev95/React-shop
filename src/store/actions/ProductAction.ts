import { Product } from './../../model/model';
import React from 'react'
import { ProductSlice } from './../slices/ProductSlice';
import { AppDispatch } from './../index';
import axios from 'axios';


export const ProductAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(ProductSlice.actions.fetching())
            const responce = await axios.get<Product[]>('https://fakestoreapi.com/products')
            dispatch(ProductSlice.actions.fetchSuccess({
                products: responce.data
            }))
        } catch (error) {
            dispatch(ProductSlice.actions.fetchError(error as Error))
        }
    }
}