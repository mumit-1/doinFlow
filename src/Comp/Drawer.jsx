import { useState } from "react";
import Root from "./Root";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImMenu } from "react-icons/im";



const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
const currentPath = location.pathname;
const navigate = useNavigate();
console.log(currentPath);
  return (
    <div className="flex  manrope bg-[#040D12]">
      {/* Mobile overlay sidebar */}
      <div className={`fixed inset-0 z-40  bg-opacity-50 lg:hidden transition-opacity ${isOpen ? "block" : "hidden"}`} onClick={() => setIsOpen(false)}></div>

     <aside
  className={`fixed z-50 top-0 left-0 h-full w-64 bg-[#183D3D] shadow-lg transform transition-transform duration-700 rounded-tr-2xl rounded-br-2xl ${
    isOpen ? "translate-x-0" : "lg:translate-x-0 -translate-x-full"
  }`}
>
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4 pb-1">AmiAdmin</h2>  
          <hr />
        <ul className="menu space-y-2 pt-3">
  <li>
    <Link 
      to="/users" 
       className={`rounded-full pl-5 pr-5 py-2 font-bold text-white cursor-pointer transition-all duration-500
    ${currentPath === "/users" ? "bg-[#1a212e]" : "bg-transparent hover:bg-[#1a202c]"}`}
    > 
      Users
    </Link>
  </li>
  <li className="w-52">
    <Link 
      to="/createEvent" 
   className={`rounded-full pl-5 pr-5 py-2 font-bold text-white cursor-pointer transition-all duration-500
    ${currentPath === "/createEvent" ? "bg-[#1a212e]" : "bg-transparent hover:bg-[#1a202c]"} `}
    >
      Create Event
    </Link>
    
  </li>
  <li>
     <details>
 <summary
 className="rounded-full pl-5 pr-5 py-2 font-bold text-white cursor-pointer transition-all duration-500 bg-transparent hover:bg-[#1a202c] "
 >
  Events
      </summary>
      
    {/* <Link 
      to="/events" 
    className={`rounded-full pl-5 pr-5 py-2 font-bold text-white cursor-pointer transition-all duration-500
    ${currentPath === "/event" ? "bg-[#1a212e]" : "bg-transparent hover:bg-[#1a202c]"}`}
    >
      Events
    </Link> */}
    <ul className="p-2">
            <li className="">   <Link 
      to="/events" 
    className={`rounded-full pl-5 pr-5 py-2 font-bold text-white cursor-pointer transition-all duration-500
    ${currentPath === "/events" ? "bg-[#1a212e]" : "bg-transparent hover:bg-[#1a202c]"} mr-7`}
    >
      Show Events
    </Link></li>
            <li><a>Submenu 2</a></li>
          </ul>
     </details>
  </li>
    <li>
      <Link 
        to="/analytics" 
    className={`rounded-full pl-5 pr-5 py-2 font-bold text-white cursor-pointer transition-all duration-500
      ${currentPath === "/analytics" ? "bg-[#1a212e]" : "bg-transparent hover:bg-[#1a202c]"}`}
      >
        Analytics
      </Link>
    </li>
    <li>
      <Link 
        to="/test" 
    className={`rounded-full pl-5 pr-5 py-2 font-bold text-white cursor-pointer transition-all duration-500
      ${currentPath === "/test" ? "bg-[#1a212e]" : "bg-transparent hover:bg-[#1a202c]"}`}
      >
        Test
      </Link>
    </li>
</ul>

        </div>
      </aside>

      <div className="flex-1 flex flex-col ">
        {/* Mobile Navbar */}
        <div className="lg:hidden p-4 bg-[#005B41] z-10 fixed w-full shadow-md flex justify-between items-center">
          <p className="text-bold text-2xl">AmiAdmin</p>
          <button className="btn rounded-2xl px-2 py-5 text-2xl bg-[#183D3D] mr-3" onClick={() => setIsOpen(true)}>
           <ImMenu />
          </button>
        </div>

        {/* Main content */}
        <main className="px-4 py-4 pt-[90px] pb-20  lg:pt-5 lg:ml-64">
      <Root></Root>
        </main>
      </div>
    </div>
  );
};

export default Drawer;
