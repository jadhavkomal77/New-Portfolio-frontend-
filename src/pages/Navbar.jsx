import React, { useState } from 'react';
import { FaListUl } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return <div className='bg-slate-800 pt-6'>
    <nav className="border-4 border-slate-500  bg-red-400 p-6 rounded-full ml-6 mr-6 " id='home'>
      <div className="flex justify-between items-center">
        <ul className="flex gap-12">
          <li className="text-slate-800 text-2xl font-bold">Portfolio</li>
          <li className="hidden md:block">
            <a href="#home" className="text-slate-950 hover:text-gray-500 text-xl">Home</a>
          </li>
          <li className="hidden md:block">
            <a href="#about" className="text-slate-950 hover:text-gray-500 text-xl">About</a>
          </li>
          <li className="hidden md:block">
            <a href="#skills" className="text-slate-950 hover:text-gray-500 text-xl">Services</a>
          </li>
          <li className="hidden md:block">
            <a href="#project" className="text-slate-950 hover:text-gray-500 text-xl">Projects</a>
          </li>
          <li className="hidden md:block">
            <a href="#contact" className="text-slate-950 hover:text-gray-500 text-xl">Contact</a>
          </li>
        </ul>
        <div onClick={() => setShow(!show)} className='text-2xl md:hidden'>
          <FaListUl />
        </div>
      </div>
    </nav>

    {
      show && <div className="border-4 border-pink-500 bg-red-400 mt-4 md:hidden rounded-3xl ml-12 mr-12">
        <ul className="flex text-center flex-col gap-2">
          <li>
            <a href="#home" className="text-white hover:text-gray-500 text-xl">Home</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-500 text-xl">About</a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-gray-500 text-xl">Services</a>
          </li>
          <li>
            <a href="#project" className="text-white hover:text-gray-500 text-xl">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-500 text-xl">Contact</a>
          </li>
        </ul>
      </div>
    }
  </div>
};




export default Navbar;
