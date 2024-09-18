import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white  '>
        <div className='container mx-auto h-full flex items-center px-4 justify-between pr-9'>
            <div className=''>
                <Link to={"/"}>
                  <Logo />
                </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md  pl-2'>
              <input type='text' placeholder='search product here...' className='w-full outline-none '/> 
              <div className='text-lg  min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer'>
                <FaSearch /> 
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='text-3xl cursor-pointer'>
                <FaRegUserCircle />
              </div>

              <div className='text-2xl cursor-pointer mr-3 relative '>
                <span><FaCartShopping /></span>
                <div className='text-xl text-white bg-red-600 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3 '>
                  <p className='text-sm' >0</p>
                </div>
              </div> 
              <div>
                <Link to={"/login"}>
                <button className='px-3 py-1 bg-red-600 rounded-full hover:bg-red-700 text-white '>Login</button>
                </Link>
              </div>

            </div>

        </div>
    </header>
  )
}

export default Header