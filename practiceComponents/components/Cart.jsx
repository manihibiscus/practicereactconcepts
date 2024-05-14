import { useContext } from "react"
import { UsingContext } from "../PracticeConcepts"

export const Cart = () => {
    const value=useContext(UsingContext)
    const removeCart=(id)=>{
        value.setCart(value.cart.filter((c)=>c.id !== id))
      }
  return (
    // <div>{value.cart.map(cart=>(
    //     <li key={cart.id}>{cart.name}</li>
    // ))}</div>
    <div className="grid grid-cols-5 gap-4">
     {value.cart.map(cart=>(
        <div className="bg-blue-700 p-6" key={cart.id}>
          <div className="bg-slate-400 pl-8 p-2">
            <img className="pl-4 w-[180px] h-[180px]" src={cart.image_url} alt="" />
          </div>
          <div className="flex bg-slate-400">
            <p>Name:</p>
            <p>{cart.name}</p>
          </div>
          <div className="bg-slate-400">
            <p>Description:</p>
            <p>{cart.description}</p>
          </div>
          <div className="flex bg-slate-400">
            <p>Price:</p>
            <p>₹{cart.price}</p>
          </div>
          <div className="flex bg-slate-400">
            <p>Category:</p>
            <p>{cart.category}</p>
          </div>
          <div className="ml-20">
            <button onClick={()=>removeCart(cart.id)} className="border-2 border-white">Remove from Cart</button>
          </div>
        </div>
    ))} 
    </div>
  )
}
