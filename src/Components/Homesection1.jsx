import React from 'react'
import deposit from '../assets/images/deposit.png';
import withdraw from '../assets/images/withdraw.png';
import send from '../assets/images/send.png';
import convert from '../assets/images/convert.png';
import { NavLink } from 'react-router-dom';

const Homesection1 = () => {
  return (
    <div>
      <div className='mt-5 ml-5'>Est.Total Value(USD)</div>
      <div className='mt-2 ml-5  text-3xl font-bold'>0.00</div>
      <div className='flex justify-between mt-10 ml-5 mr-5 '>
      <div className="flex flex-col items-center">
  <div className="bg-black w-10 h-10 flex justify-center items-center rounded-full hover:cursor-pointer">
    <img className="invert w-5 h-5" src={deposit} alt="" />
  </div>
  <div className="mt-1 text-center">Deposit</div>
</div>
<div className="flex flex-col items-center">
  <div className="bg-yellow-300 w-10 h-10 flex justify-center items-center rounded-full hover:cursor-pointer">
    <img className=" w-5 h-5" src={send} alt="" />
  </div>
  <div className="mt-1 text-center">Send</div>
</div>
<div className="flex flex-col items-center">
  <div className="bg-yellow-300 w-10 h-10 flex justify-center items-center rounded-full hover:cursor-pointer">
    <img className=" w-5 h-5" src={convert} alt="" />
  </div>
  <div className="mt-1 text-center">Convert</div>
</div>
<NavLink
            to="/currency"
          >
        <div className="flex flex-col items-center">
  <div className="bg-yellow-300 w-10 h-10 flex justify-center items-center rounded-full hover:cursor-pointer">
    <img className="invert w-5 h-5" src={withdraw} alt="" />
  </div>
  <div className="mt-1 text-center">Withdraw</div>
</div>
          </NavLink>


       
   
      </div>
    </div>
  )
}

export default Homesection1
