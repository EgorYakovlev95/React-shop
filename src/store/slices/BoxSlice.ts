import { Product } from './../../model/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from "react";


interface IBox {
    itemsInBox: Product[]
}

const initialState: IBox = {
    itemsInBox: []
}

export const BoxSlice = createSlice({
    name: 'box',
    initialState,
    reducers: {
        addToBox(state, action: PayloadAction<Product>) {
            state.itemsInBox.push(action.payload)
            
            // localStorage.setItem('products', JSON.stringify(action.payload.id))
        },
        removeFromBox(state, action: PayloadAction<any>) {
            state.itemsInBox = state.itemsInBox.filter((item: Product) => item.id !== action.payload)

            // localStorage.removeItem('products')
        }
    }
})

export const {addToBox, removeFromBox} = BoxSlice.actions;
export default BoxSlice.reducer;