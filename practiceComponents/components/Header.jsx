/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

// import { useContext } from "react"
// import {UsingContext} from "../PracticeConcepts"
export const Header = () => {
    // const product=useContext(UsingContext)
  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <h2 className="text-2xl">ProMart</h2>
        <ul className="flex text-xl">
          <li className="pl-2"><Link to={"/"}>Home</Link></li>
          <li className="pl-2"><Link to={"/products"}>Products</Link></li>
          <li className="pl-2"><Link to={"/about"}>About</Link></li>
          <li className="pl-2"><Link to={"/cart"}>Cart</Link></li>
        </ul>
      </nav>
    </div>
  )
}
