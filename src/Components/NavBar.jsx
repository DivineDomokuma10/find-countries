import React,{useState} from 'react'
import {FaMoon, FaRegMoon} from 'react-icons/fa'


const NavBar = ({theme,toggleTheme}) => {
   
    return (
        <nav className={theme === 'Light' ? 'nav-light': 'nav-dark'}>
            <p className='font-bold text-lg md:text-xl'>Where in the world?</p>
            <span className={`p-3 flex items-center justify-center rounded-full ${theme === 'Light' ? 'hover:bg-gray-100' : 'hover:bg-gray-400'} md:space-x-3`}
            onClick={()=> toggleTheme()}
            >
               {theme === 'Light' ? <FaRegMoon className={`text-xl`}/> : <FaMoon className={`text-xl`}/>}
                <p className='hidden md:block'>{theme === 'Light' ? 'Dark' : 'Light'} Theme</p>
            </span>
        </nav>
    )
}

export default NavBar