import React from 'react'
import physicalcard from '../assets/images/physical.png';
const Physicalcard = () => {
  return (
    <div>
      
      <div  className=' mt-2 flex justify-center'><img src={physicalcard} alt="" width={200} /></div>
        <div className='flex justify-center mt-12 font-bold text-2xl '>Physical Card</div>
        <div className='flex justify-center text-gray-500'><p className='flex'>Tap and Pay ATM withdrawal </p></div>
       <div className='flex justify-center'> <div  className='bg-[#0e024f] text-white w-100 h-15 rounded-4xl flex justify-center items-center hover:cursor-pointer' >Apply Card . 100 USD</div></div>
    </div>
  )
}

export default Physicalcard
