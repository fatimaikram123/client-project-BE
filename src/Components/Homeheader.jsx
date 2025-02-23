import React from 'react'
import { NavLink } from 'react-router-dom';
import User from '../assets/images/User.png';
import gift from '../assets/images/gift.png';
import notification from '../assets/images/notification.png';
const Homeheader = () => {
  return (
    <div className='bg-white m-0 p-0 w-full h-10 flex justify-between items-center'>
      <div><img src={User} width={35} alt="" /></div>
      <div className='font-bold text-3xl'>RedotPay</div>
      <div className='flex gap-5 items-center'>
        <div className='hover:cursor-pointer' ><img src={gift} width={25} alt="" /></div>
        <div  className='hover:cursor-pointer' ><img src={notification} width={25} alt="" /></div>
      </div>
    </div>
  )
}

export default Homeheader
