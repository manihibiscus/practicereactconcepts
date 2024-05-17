/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBars
  // } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBars} from '@fortawesome/free-regular-svg-icons'
// import { useContext } from "react"
// import {UsingContext} from "../PracticeConcepts"
import { useSelector} from "react-redux"
export const Header = () => {
    // const product=useContext(UsingContext)
    const value = useSelector((state)=>(state.counter2))
  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <h2 className="text-xl">ProMart</h2>
        {/* <FontAwesomeIcon className='w-[26px] h-[26px]' icon={faBars} /> */}
        <ul className="flex text-xl">
          <li className="pl-2"><Link to={"/"}>Home</Link></li>
          <li className="pl-2"><Link to={"/products"}>Products</Link></li>
          <li className="pl-2"><Link to={"/about"}>About</Link></li>
          <li className="pl-2"><Link to={"/cart"}>Cart <span className="text-green-400 font-bold">{value.cart.length}</span> </Link></li>
        </ul>
      </nav>
    </div>
  )
}
