import React from 'react'
import { NavLink } from 'react-router-dom';
import home from '../assets/images/home.png';
import card from '../assets/images/card.png';
import benifits from '../assets/images/benifits.png';
const Homebuttom = () => {
  return (
   
    <div className='absolute bottom-0 left-0 w-full  text-white p-1'>

      <div >
       <ul className='flex justify-between pr-10 pl-10 max-sm:p-0'> 
        <li>
        <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-black font-bold" : "text-gray-500"
  }
>
  <div className="flex justify-center">
    <img
      src={home}
      width={20}
      alt="Home"
      className={({ isActive }) => (isActive ? "filter-none" : "opacity-50")}
    />
  </div>
  <div className="text-[10px]">Home</div>
</NavLink>

          </li>
       <li>
       <NavLink
  to="/card"
  className={({ isActive }) =>
    isActive ? "text-black font-bold " : "text-gray-500"
  }
>
  <div className="flex justify-center">
    <img
      src={card}
      width={20}
      alt="card"
      className={({ isActive }) => (isActive ? "filter-none" : "opacity-50")}
    />
  </div>
  <div className="text-[10px]">Card</div>
</NavLink>

        </li>
        <li > <NavLink
>
  <div className="flex justify-center">
    <img
      src={benifits}
      width={20}
      alt="benifits"
      
    />
  </div>
  <div className="text-[10px] text-gray-500 ">Benifits</div>
</NavLink></li>
        <li> <NavLink
  to="/hub"
  className={({ isActive }) =>
    isActive ? "text-black font-bold " : "text-gray-500"
  }
>
  <div className="flex justify-center">
    <img
      src={card}
      width={20}
      alt="card"
      className={({ isActive }) => (isActive ? "filter-none" : "opacity-50")}
    />
  </div>
  <div className="text-[10px]">Hub</div>
</NavLink></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Homebuttom
