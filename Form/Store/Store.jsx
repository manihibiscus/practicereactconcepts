import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from './Slice'
import productReducer from './SliceProduct'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer:{
        counter:bmiReducer,
        counter2:productReducer
    },
})