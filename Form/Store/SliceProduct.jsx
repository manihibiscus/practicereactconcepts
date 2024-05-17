import { createSlice } from "@reduxjs/toolkit";
// import {products} from '../../practiceComponents/db.json'
import axios from "axios";



export const productSlice = createSlice({
    name:"productSlice",
    initialState:{
        product:[],
        cart:[],
        total:0,
        quantity:{}
    },
    reducers:{
        addCart:(state, action)=>{
            state.cart=([...state.cart,action.payload])
        },
        removeCart:(state, action)=>{
            state.cart=(state.cart.filter((c)=>c.id !== action.payload.id))
        },
        totalAmount:(state)=>{
        const grandTotal = state.cart
        let val = 0
        for(let i=0; i<grandTotal.length;i++){
            val+=parseInt(grandTotal[i].price)  
            state.total=val
        }
        if(state.cart.length == 0){
            state.total=0;
        }
        },
        fetchProduct:(state,action)=>{
            state.product=action.payload
        },
        quantity:(state,action)=>{
            state.quantity=action.payload
            console.log(state.quantity);
        }
    }
});

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            const data = response.data;
            console.log(data);
            dispatch(fetchProduct(data)); // Corrected function name
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
};

export const {addCart, removeCart, totalAmount, fetchProduct, quantity}=productSlice.actions
export default productSlice.reducer