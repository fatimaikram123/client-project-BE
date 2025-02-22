import React from 'react';
import usdt from '../assets/images/usdt.png';
import usdc from '../assets/images/usdc.png';
import btc from '../assets/images/btc.png';
import eth from '../assets/images/eth.png';
import usd from '../assets/images/usd.png';
import leftarrow from '../assets/images/leftarrow.png';
import history from '../assets/images/history.png';


const Currency = () => {
  return (
    <div>
      <header className="w-full h-15  content-center ">
      <div className='flex justify-between'>
        <div className='pl-10 pt-2  max-sm:pl-2'><img className='max-sm:w-7' src={leftarrow} alt="" /></div>
        <div className='pr-10 pt-2  max-sm:pr-2'><img className='max-sm:w-7' src={history} alt="" /></div>
      </div>
      </header>
      <div>
        <h6 className="ml-7 text-2xl font-bold  text-black max-sm:ml-2 sm:flex justify-center sm:text-5xl   ">Select Currency</h6>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-150 h-20 mt-5 content-center border-2 rounded-2xl p-3 max-sm:m-3 max-sm:mt-5 border-gray-300 ">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center justify-center w-15 h-15">
              <img className="w-10 h-10 bg-[#067f7f] rounded-full" src={usdt} alt="USDT" width={5} height={5} />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div>USDT</div>
                <div className="pr-2">0.00</div>
              </div>
              <div className='w-full flex justify-between'>
                <div className="text-gray-500 text-sm">USDT</div>
                <div className="text-gray-500 text-sm pr-2" pr-100>=0.00</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-150 h-20 mt-5 content-center border-2 rounded-2xl p-3 max-sm:m-3 max-sm:mt-4  border-gray-300">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center justify-center w-15 h-15">
              <img className="w-10 h-10  bg-blue-700 rounded-full" src={usdc} alt="USDT" width={5} height={5} />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div>USDC</div>
                <div className="pr-2">0.00</div>
              </div>
              <div className='w-full flex justify-between'>
                <div className="text-gray-500 text-sm">USDC</div>
                <div className="text-gray-500 text-sm pr-2" pr-100>=0.00</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-150 h-20 mt-5 content-center border-2 rounded-2xl p-3 max-sm:m-3 max-sm:mt-4  border-gray-300">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center justify-center w-15 h-15">
              <img className="w-10 h-10 bg-yellow-500 rounded-full" src={btc} alt="USDT" width={5} height={5} />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div>BTC</div>
                <div className="pr-2">0.00</div>
              </div>
              <div className='w-full flex justify-between'>
                <div className="text-gray-500 text-sm">Bitcoin</div>
                <div className="text-gray-500 text-sm pr-2" pr-100>=0.00</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-150 h-20 mt-5 content-center border-2 rounded-2xl p-3 max-sm:m-3 max-sm:mt-4  border-gray-300">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center justify-center w-15 h-15">
              <img className="w-10 h-10 bg-sky-600 rounded-full" src={eth} alt="USDT" width={5} height={5} />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div>ETH</div>
                <div className="pr-2">0.00</div>
              </div>
              <div className='w-full flex justify-between'>
                <div className="text-gray-500 text-sm">Ethereum</div>
                <div className="text-gray-500 text-sm pr-2" pr-100>=0.00</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-150 h-20 mt-5 content-center border-2 rounded-2xl p-3 max-sm:m-3 max-sm:mt-4  border-gray-300">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center justify-center w-15 h-15">
              <img className="w-10 h-10 bg-green-600 rounded-full" src={usd} alt="USDT" width={5} height={5} />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div>USD$</div>
                <div className="pr-2">0.00</div>
              </div>
              <div className='w-full flex justify-between'>
                <div className="text-gray-500 text-sm">USD$</div>
                <div className="text-gray-500 text-sm pr-2" pr-100>=0.00</div>
              </div>
            </div>

          </div>
        </div>
      </div>




    </div>
  );
};

export default Currency;

