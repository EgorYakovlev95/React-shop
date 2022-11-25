import { Product } from './../../model/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from "react";


interface IBox {
    itemsInBox: Product[]
}

const initialState: IBox = {
    itemsInBox: [],
}

export const BoxSlice = createSlice({
    name: 'box',
    initialState,
    reducers: {
        addToBox(state, action: PayloadAction<Product>) {
            state.itemsInBox.push(action.payload)

        },
        removeFromBox(state, action: PayloadAction<number>) {
            state.itemsInBox = state.itemsInBox.filter((item: Product) => item.id !== action.payload)

        }
    }
})

export const {addToBox, removeFromBox} = BoxSlice.actions;
export default BoxSlice.reducer;