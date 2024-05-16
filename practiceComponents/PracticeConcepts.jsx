// import { useState } from "react";
import { Header } from "./components/Header";
// import {products} from './db.json'
import { ProductPage } from "./components/ProductPage";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
// import { HomePage } from "../src/components/HomePage";
import store from "../Form/Store/Store";
import { Provider } from "react-redux";
// export const UsingContext = createContext();



export function PracticeConcepts (){

return(
    <>
    <BrowserRouter>
        <Provider store={store}>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </Provider>
    </BrowserRouter>

    </>
);
}
