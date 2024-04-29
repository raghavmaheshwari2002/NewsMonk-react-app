import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "./logo.png"



const Nav = () => {
    const [click,setClick]= useState(false);

const handleToggle=()=>{
    setClick(!click);
    // console.log(click);
}

  return (
    <>
     
<nav className=" bg-slate-900 border-slate-200 py-3 ">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    <Link to="/" className="py-2 px-2 gap-3 flex ">
            <img src={logo} alt="logo" width={65}  />
            {/* <span className=" text-3xl font-semibold text-white">NewsMonk</span> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">NewsMonk</span>
          </Link>
        
        <div className="flex items-center lg:order-2">

            <button onClick={()=>handleToggle()} data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden md:visible hiddehover:bg-slate-100 focus:outline-none focus:ring-2 text-slate-400 hover:bg-slate-700 focus:ring-slate-600"
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
        </div>
        <div className= {` ${!click && "hidden" } lg:float-right justify-evenly w-full lg:flex lg:w-auto lg:order-1 `}  id="mobile-menu-2">
            <ul className="flex flex-col mt-1 mr-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full lg:float-right text-center ">
            <li>
                <Link to="/" className="block pt-0 pl-3  text-white" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sports" className="block pt-0 pl-3  text-white">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/bussiness" className="block pt-0 pl-3  text-white">
                  Bussiness
                </Link>
              </li>
              <li>
                <Link to="/science" className="block pt-0 pl-3 text-white">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/health" className="block pt-0 pl-3  text-white">
                  Health
                </Link>
              </li>
              <li >
                <Link to="/technology" className="block pt-0 pl-3 text-white">
                  Technology
                </Link>
              </li>

              <li>
                <Link to="/entertainment" className="block pt-0 pl-3 text-white ">
                  Entertainment
                </Link>
              </li>
            </ul>
        </div>
    </div>
</nav>




 
</>
  )
}

// script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script> 

export default Nav
