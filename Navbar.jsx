import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import {TbMenu2 , TbMenu3} from "react-icons/tb"




const Navbar = () => {


  const[showMenu,setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }



  return (
    <header className ='bg-white fixed top-0 right-0 left-0 z-50'>
      <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] flex justify-between bg-white-300 items-center'>
       {/* logo */}
        <a href="#" className='text-3xl font-semibold'>
          Gr<span className='text-orange-500'>O</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className='md:flex item-center  gap-15 hidden'>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold  tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
        </ul>
        {/* input field */}
        <div className='md:flex  p-1 border-2 border-orange-500 rounded-full'>
          <input type="text" name='text' placeholder='Search...' autoComplete='off'
          className='flex-1 h-[5vh] px-3 focus:outline-none text-zinc-800'/>
          <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearchOutline />
          </button>
        </div>
        {/* Nav Action  */}
        <div className='flex items-center gap-x-15'>
          <a href="#" className= 'text-zinc-800 text-2xl'>
            <FaHeart />
          </a>
          <a href="#" className= 'text-zinc-800 text-2xl'>
            <HiMiniShoppingBag />
          </a>
          {/* Hamburger  */}
          <a href="#" className='text-zinc-800 text-2xl md:hidden'onClick={toggleMenu}>
            {showMenu ? <TbMenu3/>: <TbMenu2/>}
          </a>
        </div>
        {/* Mobile Menu  */}
          <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 top-30 item-center  gap-x-5 md:hidden absolute left-full translate-x-1.2 transation-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold  tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
          <li className='flex  p-1 border-2 border-orange-500 rounded-full md:hidden'>
          <input type="text" name='text' placeholder='Search...' autoComplete='off'
          className='flex-1 h-[5vh] px-3 focus:outline-none text-zinc-800'/>
          <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearchOutline />
          </button>
        </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
