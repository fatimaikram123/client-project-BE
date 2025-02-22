import React from 'react';
import { NavLink } from 'react-router-dom';
import Homebuttom from './Homebuttom';
const Cardheader = () => {
  return (
    <header>
      <div className="flex justify-center">
        <h5 className="font-bold text-4xl max-sm:text-2xl max-lg:text-3xl">Choose Card</h5>
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-200 flex w-200 mt-2 h-12 justify-center gap-80 rounded-4xl max-sm:w-100 max-sm:h-10 max-sm:gap-2 p-2">
          <NavLink
            to="/virtual-card"
            className={({ isActive }) =>
              `px-4 rounded-4xl transition-all duration-300 ease-in-out transform ${
                isActive ? 'bg-white text-black scale-105 shadow-md' : 'text-gray-700'
              }`
            }
          >
            Virtual Card
          </NavLink>
          <NavLink 
            to="/physical-card"
            className={({ isActive }) =>
              `px-4 rounded-4xl transition-all duration-300 ease-in-out transform ${
                isActive ? 'bg-white text-black scale-105 shadow-md' : 'text-gray-700' 
              }`
            }
          >
            Physical Card
          </NavLink>
        </div>
       
      </div>
      <Homebuttom />
     
    </header>
  );
};

export default Cardheader;


