import { useSelector, useDispatch } from "react-redux";
import {addCart, fetchData, removeCart, quantity} from "../../Form/Store/SliceProduct";
import { useEffect } from "react";


export const ProductPage = () => {
    const value=useSelector((state)=>(state.counter2));
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(fetchData())
    }, [])
    const getOnemoreItem = (id, value) =>{
      const quantityValue={
        "productId":id,
        "quantityCount":value
      }
      dispatch(quantity(quantityValue));
    }
    
  return (  
    <>
    <div className="grid grid-rows-5 sm:grid-cols-5 gap-4 m-4">
     {value.product.map(product=>(
        <div className="bg-gray-200 p-6 rounded-lg" key={product.id}>
          <div className="bg-slate-100 pl-4 p-2 rounded-lg">
            <img className="pl-4 w-[180px] h-[180px] rounded-lg" src={product.image_url} alt="" />
          </div>
          <div className="flex bg-slate-100">
            <p>Name:</p>
            <p>{product.name}</p>
          </div>
          <div className="bg-slate-100">
            <p>Description:</p>
            <p>{product.description}</p>
          </div>
          <div className="flex bg-slate-100">
            <p>Price:</p>
            <p>₹{product.price}</p>
          </div>
          <div className="flex bg-slate-100">
            <p>Category:</p>
            <p>{product.category}</p>
          </div>
          <div className="flex bg-slate-100">
            <select name="add" onChange={(e)=>getOnemoreItem(product.id,e.target.value)}>
              <option  value="" disabled selected>Get more</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="">
            {value.cart.includes(product) ? <button onClick={()=>dispatch(removeCart(product.id))} className="border-2 border-white bg-red-500 text-white rounded-md  ml-16 mt-2 p-1">Remove from Cart</button> : <button onClick={()=>dispatch(addCart(product))} className="border-2 border-white bg-blue-950 text-white rounded-md p-1 ml-20 mt-2">Add to Cart</button>}
          </div>
        </div>
    ))} 
    </div>
   </>
  )
}
