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
    const [cart, setCart]=useState([{
        "id": 1,
        "name": "Smartphone X",
        "description": "A powerful smartphone with advanced features.",
        "price": 599.99,
        "category": "Electronics",
        "stock": 100,
        "image_url": "data:image/jpeg;base64,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"
      }]);
    
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
