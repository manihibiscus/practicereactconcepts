import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from './Slice'

export default configureStore({
    reducer:{
        counter:bmiReducer,
    },
})