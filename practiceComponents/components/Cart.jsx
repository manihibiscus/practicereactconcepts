import {useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../Form/Store/SliceProduct";
export const Cart = () => {
    const value=useSelector((state)=>state.counter2);
    const dispatch = useDispatch();
    const [total, setTotal]=useState(0)

      useEffect(()=>{
        const grandTotal = value.cart
        let val = 0
        for(let i=0; i<grandTotal.length;i++){
            val+=parseInt(grandTotal[i].price)  
            setTotal(val)
        }
        if(value.cart.length == 0){
            setTotal(0);
        }
        },[value.cart]);
  return (
    <>
    <div className="grid grid-cols-5 gap-4">
     {value.cart.map(cart=>(
        <div className="bg-gray-200 p-6" key={cart.id}>
          <div className="bg-slate-100 pl-8 p-2">
            <img className="pl-4 w-[180px] h-[180px]" src={cart.image_url} alt="" />
          </div>
          <div className="flex bg-slate-100">
            <p>Name:</p>
            <p>{cart.name}</p>
          </div>
          <div className="bg-slate-100">
            <p>Description:</p>
            <p>{cart.description}</p>
          </div>
          <div className="flex bg-slate-100">
            <p>Price:</p>
            <p>₹{cart.price}</p>
          </div>
          <div className="flex bg-slate-100">
            <p>Category:</p>
            <p>{cart.category}</p>
          </div>
          <div className="ml-20">
            <button onClick={()=>dispatch(removeCart(cart.id))} className="border-2 border-white bg-red-500 text-white rounded-md p-1">Remove from Cart</button>
        </div>
        </div>
    ))} 
    </div>
    <div>
        Grand Total: {total}
    </div>
    
   </>
  )
}
