import React from 'react';
import leftarrow from '../assets/images/leftarrow.png';
import history from '../assets/images/history.png';
import QR from '../assets/images/QR.jpg';
import { NavLink } from 'react-router-dom';
import copy from '../assets/images/copy.png';
import error from '../assets/images/error.png';


const Deposit = () => {
  const textToCopy = "TE9HR4ghD7gYgSQzTvNBsX82pkbGV89Kwp";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div>
      {/* Header Section */}
      <header className="w-full h-15 content-center">
        <div className="flex justify-between">
          <NavLink to="/">
            <div className="pl-10 pt-2 max-sm:pl-2">
              <img className="max-sm:w-7" src={leftarrow} alt="Back" />
            </div>
          </NavLink>
          <div className="ml-7 text-2xl font-bold text-black max-sm:ml-2 sm:flex justify-center sm:text-5xl">
            Deposit USDT
          </div>
          <div className="pr-10 pt-2 max-sm:pr-2">
            <img className="max-sm:w-7" src={history} alt="History" />
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section>
        <div className="flex justify-center text-gray-500 mt-5">Network</div>
        <div className="flex justify-center text-black mt-1">Tron(TRC20)</div>
        <div className="flex justify-center">
          <img src={QR} alt="QR Code" width={220} />
        </div>

        {/* Copyable Text Section */}
        <div className="flex justify-center mt-3">
          <div className="bg-gray-300 flex justify-between max-sm:w-70 w-150 h-15 items-center border rounded-2xl px-4 py-2">
            <span className="truncate  max-sm:text-xs">{textToCopy}</span>
            <button
              onClick={handleCopy}
              className=" px-3 py-1 rounded-lg text-sm font-medium hover: cursor-pointer"
            >
              <img className='max-sm:width-20' src={copy} width={30}  alt="" />
            </button>
          </div>
        </div>
      </section>
      <section>
        
   <div className='flex justify-center mt-5 '>
    <div className='w-150 h-20 rounded-2xl border border-gray-400   '>
        <div className='flex justify-between mt-3 '>
            <div className='text-gray-400'>Deposit network</div>
            <div>Tron(TRC20)</div>
        </div>
        <div className='flex justify-between mt-3 '>
            <div className='text-gray-400'>Minimum deposit</div>
            <div>1.00 USDT</div>
        </div>
    </div>
   </div>
      </section>
      <div className='flex justify-center w-full'><div className='bg-orange-200 mt-2 rounded-3xl flex items-center max-sm:text-[8px]'><img src={error} width={20} alt="" />The current address only support depositing USDT on Tron(TRC20) depositing other assets will result in loss</div></div>
      <div className='flex justify-center'> <div  className='bg-[#0e024f] text-white mt-2 w-100 h-15 rounded-4xl flex justify-center items-center hover:cursor-pointer' >Share</div>
      </div>
    </div>
  );
};

export default Deposit;

