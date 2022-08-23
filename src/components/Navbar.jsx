import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link:'Coffee & Tea'
        },
        {
            id: 2,
            link:'Goods'
        },
        {
            id: 3,
            link:'Subscriptons'
        },
        {
            id: 4,
            link:'About'
        },
        {
            id: 5,
            link:'Career'
        },

    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-10 fixed top-0 '>
        <div>
            <h1 className='cursor-pointer text-2xl font-extrabold hover:scale-105 duration-200'>KapeCartel Co.</h1>
        </div>
        <ul className='hidden  md:flex'>
        {links.map(({id,link}) => (            
            <li key={id} className='px-4 text-lg cursor-pointer capitalize font-medium hover:scale-105 duration-200'>
              {link}
            </li>
          ))}
        </ul>
  

        <div onClick={() => setNav(!nav)} 
        className='cursor-pointer pr-4 z-10  md:hidden '>
           {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black dark:bg-black dark:text-white'>
          {links.map(({id,link}) => (            
              <li key={id} className='px-4 cursor-pointer capitalize py-6 text-xl hover:scale-105 duration-200 font-medium '>
               {link}
              </li>
            ))}
          </ul>
   
           )}


    </div>
  )
}

export default Navbar