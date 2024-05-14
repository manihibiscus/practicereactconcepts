import { useContext } from "react"
import {UsingContext} from "../PracticeConcepts"

export const ProductPage = () => {
    const value=useContext(UsingContext)

    const addCart=(p)=>{
      value.setCart([...value.cart,p]);
      console.log(value.cart)
    }
    const removeCart=(id)=>{
      value.setCart(value.cart.filter((c)=>c.id !== id))
    }
   
  return (  
    <>
    <div className="grid grid-cols-5 gap-4">
     {value.product.map(product=>(
        <div className="bg-blue-700 p-6" key={product.id}>
          <div className="bg-slate-400 pl-8 p-2">
            <img className="pl-4 w-[180px] h-[180px]" src={product.image_url} alt="" />
          </div>
          <div className="flex bg-slate-400">
            <p>Name:</p>
            <p>{product.name}</p>
          </div>
          <div className="bg-slate-400">
            <p>Description:</p>
            <p>{product.description}</p>
          </div>
          <div className="flex bg-slate-400">
            <p>Price:</p>
            <p>₹{product.price}</p>
          </div>
          <div className="flex bg-slate-400">
            <p>Category:</p>
            <p>{product.category}</p>
          </div>
          <div className="ml-20">
            {value.cart && value.cart.includes(product) ? <button onClick={()=>removeCart(product.id)} className="border-2 border-white">Remove from Cart</button>: <button onClick={()=>addCart(product)} className="border-2 border-white bg-gray-400 rounded-md p-1">Add to Cart</button>}
          </div>
        </div>
    ))} 
    </div>
    {/* {product.cart.map(cart=>{
      <li key={cart.id}>{cart.name}
      <p>HI</p>
      </li>
    })} */}
   </>
  )
}
