// import { useState }from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import { useState } from "react";

const NavBar = () => {

  const [click,setClick]= useState(false);

  const handleToggle=()=>{
      setClick(!click);
  }

  return (
    <>
      <nav className=" bg-slate-900 fixed top-0 w-full z-50 h-auto">
        <div className="w-full flex flex-wrap items-center justify-between ">
          <Link to="/" className="py-4 px-3 gap-3 flex ">
            <img src={logo} alt="logo" width={55}  />
            <span className=" text-3xl font-semibold text-white">NewsMonk</span>
          </Link>
          
          <button onClick={()=>handleToggle()} data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center mr-4 p-1 ml-1 text-md text-gray-500 rounded-lg lg:hidden md:visible hiddehover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"></path>
				</svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"></path>
				</svg>
			</button>



      block pt-0 pl-3 pr-4 text-white


          <div
            className={` ${!click && "hidden"}  text-center md:top-0 lg:flex lg:w-auto w-full items-center justify-center md:block md:w-auto bg-slate-900 md:pt-10 `}
            id="navbar-default"
          >
            <ul className="px-4 font-medium  items-center justify-center space-x-4 flex flex-col md:p-0 mt-4 md:flex-row md:mt-0 border-gray-700">
              <li>
                <Link to="/" className=" text-white " aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sports" className=" text-white">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/bussiness" className=" text-white">
                  Bussiness
                </Link>
              </li>
              <li>
                <Link to="/science" className=" text-white">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/health" className=" text-white">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/technology" className=" text-white">
                  Technology
                </Link>
              </li>

              <li>
                <Link to="/entertainment" className=" text-white ">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
