import React from 'react'
import card from '../assets/images/card.png';
import { NavLink } from 'react-router-dom';
const Homeverify = () => {
  return (
    <div className='flex justify-center'>
        
      <div className='w-200 h-15 bg-orange-200 flex justify-between items-center rounded-2xl'>
      <div className=' ml-2 '><img className='' src={card} width={30} alt="" /></div>
        <div className='font-bold max-sm:text-[10px]'>Apply for a Redotpay card
            <div>Start Your Spending Journey Today.</div>
        </div>
        <NavLink
         to="/card">
        <div className='bg-white  w-20 rounded-2xl flex justify-center mr-5 max-sm:mr-1 hover:cursor-pointer ' >Apply</div>
        </NavLink>
      </div>
    </div>
  )
}

export default Homeverify
