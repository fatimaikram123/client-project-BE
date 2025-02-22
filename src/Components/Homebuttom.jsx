import React from 'react'
import { NavLink } from 'react-router-dom';

const Homebuttom = () => {
  return (
    <div className='absolute bottom-0 left-0 w-full bg-blue-500 text-white p-4'>
      <div >
       <ul className='flex gap-48'> <li>Home</li>
       <li>
          <NavLink
            to="/card"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl transition-all duration-300 ease-in-out transform ${
                isActive ? 'bg-white text-black scale-105 shadow-md' : 'text-gray-300 hover:text-white'
              }`
            }
          >
             Card
          </NavLink>
        </li>
        <li>Benifits</li>
        <li>Hub</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Homebuttom
