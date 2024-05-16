import { useSelector, useDispatch } from "react-redux";
import {addCart, removeCart} from "../../Form/Store/SliceProduct";


export const ProductPage = () => {
    const value=useSelector((state)=>(state.counter2));
    const dispatch=useDispatch();
 
  return (  
    <>
    <div className="grid grid-cols-5 gap-4">
     {value.product.map(product=>(
        <div className="bg-gray-200 p-6" key={product.id}>
          <div className="bg-slate-100 pl-8 p-2">
            <img className="pl-4 w-[180px] h-[180px]" src={product.image_url} alt="" />
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
          <div className="ml-20">
            {value.cart.includes(product) ? <button onClick={()=>dispatch(removeCart(product.id))} className="border-2 border-white bg-red-500 text-white rounded-md p-1">Remove from Cart</button>: <button onClick={()=>dispatch(addCart(product))} className="border-2 border-white bg-blue-950 text-white rounded-md p-1">Add to Cart</button>}
          </div>
        </div>
    ))} 
    </div>
   </>
  )
}
