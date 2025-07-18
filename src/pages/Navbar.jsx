import React, { useState } from 'react'

import { navLinks } from '../context/index.js'




const Navbar = () => {
  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen)
  }
  const Navitems = () => {
    return (
      <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
        {navLinks.map(({ id, href, name }) => (
          <li key={id} className='text-neutral-200 hover:text-white font-berlin max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'>
            <a onClick={() => {  }} href={href} className='text-neutral-400 hover:text-white font-berlin max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5 '>{name}</a> </li>
        ))}
      </ul >
    )
  }


  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='top-0 left-0 right-0 z-59 fixed bg-black/89'>

      <div className="flex px-10  mt-2 justify-between items-center bg-black/89 md:px-20 py-5">
        <a className='text-xl font-bold ' href="#home" >Hardik Jain</a>
        <button className='cursor-pointer text-neutral-400 hover:text-white *:focus:outline-none sm:hidden ' alt="menu" onClick={toggleMenu} >
          <img className='w-6 h-6' src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="" />
        </button>

        <nav className='sm:flex hidden'>
          <Navitems />
        </nav>

      </div>
      <div className={`absolute left-0 right-0 bg-black-200  transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? "max-h-[100vh]" : "max-h-0"}`}>

        <nav className='p-5 bg-neutral-800/80 backdrop-blur-sm '>
          <Navitems />

        </nav>

      </div>

    </header>
  )
}

export default Navbar
