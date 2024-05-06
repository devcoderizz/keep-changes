import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
   

<nav className="bg-white border-gray-200 w-full ">
  <div className="w-full  flex flex-wrap items-center justify-between mx-auto p-4">
    <Link 
    to="/"
    className="flex items-center space-x-3 rtl:space-x-reverse">
  
      {/* <img src="" className="h-8" alt="" /> */}
      <span className="self-center text-2xl  whitespace-nowrap text-red-500 font-extrabold ">Keep Changes</span>
  </Link>

  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
    
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ">
     
    <Link className="text-black font-semibold mx-4  ">Program</Link>
    <Link className="text-black font-semibold  mx-4 ">Gallery</Link>
    <Link className="text-black font-semibold mx-4 ">About</Link>


    </ul>
  </div>
  

  </div>
  <FaCircleUser />
</nav>

  )
}

export default Navbar