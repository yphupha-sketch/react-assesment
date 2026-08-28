import { Link } from "react-router-dom"
export default function Navbar (){
    return(
        <div className="Navbarcontainer flex w-full h-16 border border-b-black text-black bg-gray-300 justify-end items-center sticky top-0"  ><Link to ="/" className="p-2 font-bold" >Home</Link><Link to="/Owner" className="p-2 font-bold ">Owner</Link></div>
    )
}