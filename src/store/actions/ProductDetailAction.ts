import { AppDispatch } from './../index';
import React from 'react'
import {ProductDetailSlice} from '../slices/ProductDetailSlice';
import axios from 'axios';
import { Product } from '../../model/model';

export const ProductDetailAction = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(ProductDetailSlice.actions.productFetching()) 
            const responce = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
            dispatch(ProductDetailSlice.actions.productFetchingSuccess(responce.data))
        } catch (error) {
            dispatch(ProductDetailSlice.actions.productFetchingError(error as Error))
        }
    }
}