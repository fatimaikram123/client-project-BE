import React from 'react'
import leftarrow from '../assets/images/leftarrow.png';
import history from '../assets/images/history.png';
import { NavLink } from 'react-router-dom';

const Deposit = () => {
  return (
    
  <div>
        <header className="w-full h-15  content-center ">
      <div className='flex justify-between'>
      <NavLink
            to="/"
          >
       <div className='pl-10 pt-2  max-sm:pl-2'><img className='max-sm:w-7' src={leftarrow} alt="" /></div>
          </NavLink>
          <div className="ml-7 text-2xl font-bold  text-black max-sm:ml-2 sm:flex justify-center sm:text-5xl   " >Deposit USDT</div>
        <div className='pr-10 pt-2  max-sm:pr-2'><img className='max-sm:w-7' src={history} alt="" /></div>
      </div>
      </header>
     <section>
        <div className='flex justify-center text-gray-500 mt-10'>Network</div>
        <div  className='flex justify-center text-black mt-2'>Tron(TRC20)</div>
        <div><img src="" alt="" /></div>
     </section>
  </div>
    
  )
}

export default Deposit
