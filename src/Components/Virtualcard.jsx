import React from 'react';
import virtualcard from '../assets/images/virtualcard.png';
import wifi from '../assets/images/wifi.png';
import custom from '../assets/images/custom.png';
const Cardone = () => {
  return <div> <div  className=' mt-2 flex justify-center'><img src={virtualcard} alt="" width={200} /></div>
  <div className='flex justify-center '><div className='bg-yellow-100 h-10 w-40 rounded-2xl gap-4  flex justify-center items-center hover:cursor-pointer'> <img src={custom} width={30} alt="" />Customizable</div>
 
  </div>
  <div className='flex justify-center mt-5 font-bold text-2xl'>Virtual Card</div>
  <div className='flex justify-center text-gray-500'><p className='flex'>Pay contactless online or in-store i <img className='invert flex items-center' src={wifi} alt="" width={20} /></p></div>
 <div className='flex justify-center'> <div  className='bg-[#0e024f] text-white w-100 h-15 rounded-4xl flex justify-center items-center hover:cursor-pointer' >Apply Card . 10 USD</div></div>
  </div>;
};

export default Cardone;

