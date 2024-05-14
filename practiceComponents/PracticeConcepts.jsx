import { createContext, useState } from "react";
import { Header } from "./components/Header";
import {products} from './db.json'
import { ProductPage } from "./components/ProductPage";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
// import { HomePage } from "../src/components/HomePage";
export const UsingContext = createContext();

export function PracticeConcepts (){

    const [product]=useState(products);
    const [cart, setCart]=useState([]);
    
    const passProps={
        product:product,
        cart:cart,
        setCart:setCart
    }
return(
    <>
    <BrowserRouter>
        <UsingContext.Provider value={passProps}>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </UsingContext.Provider>
    </BrowserRouter>

    {/* {product.map(product=>(
        <h1 key={product.id}>{product.name}</h1>
    ))} */}
    </>
);
}
