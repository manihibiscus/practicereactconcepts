import { createSlice } from "@reduxjs/toolkit";
import {products} from '../../practiceComponents/db.json'

export const productSlice = createSlice({
    name:"productSlice",
    initialState:{
        product:products,
        cart:[],
        total:0
    },
    reducers:{
        addCart:(state, action)=>{
            state.cart=([...state.cart,action.payload])
        },
        removeCart:(state, action)=>{
            state.cart=(state.cart.filter((c)=>c.id !== action.payload))
        },
        totalAmount:(state,action)=>{
            state.total= action.payload
        }
    }
});

export const {addCart, removeCart, totalAmount}=productSlice.actions
export default productSlice.reducer