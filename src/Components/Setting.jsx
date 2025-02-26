import React from 'react'
import leftarrow from '../assets/images/leftarrow.png';
import { NavLink } from 'react-router-dom';
import { FaDollarSign, FaGlobe, FaPalette, FaCommentDots, FaSignOutAlt } from "react-icons/fa";
import chevron from '../assets/images/Chevron.png';
const Setting = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-white p-4">
      <div className="flex items-center">
        <div className='flex justify-between'>
                <NavLink to="/profile">
                  <div className='pl-10 pt-2 max-sm:pl-2 flex justify-center items-center gap-2'>
                    <img className='max-sm:w-7' src={leftarrow} alt="" />
                    <h2 className="text-xl font-semibold">Settings</h2>
                  </div>
                </NavLink>
              </div>
        
       
      </div>

      <div className="mt-5">
        {[
          { icon: <FaDollarSign />, label: "Currency", value: "USD", link: "/currency", flag: "🇺🇸" },
          { icon: <FaGlobe />, label: "Language", value: "English US", link: "/language" },
          { icon: <FaPalette />, label: "Appearance", value: "System", link: "/appearance" },
          { icon: <FaCommentDots />, label: "Permissions", value: "", link: "/permissions" },
        ].map((item, index) => (
          <NavLink to={item.link} key={index} className="block">
            <div className="flex justify-between items-center py-4 border-b">
              <div className="flex items-center">
                <span className="text-gray-600 mr-3 text-lg">{item.icon}</span>
                <p className="text-gray-800">{item.label}</p>
              </div>
              <div className="flex items-center">
                {item.flag && <span className="mr-1">{item.flag}</span>}
                <span className="text-gray-500">{item.value}</span>
                <img src={chevron} alt=">" className="w-4 ml-2" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="mt-8">
        <button className="w-full flex items-center justify-center py-3 bg-gray-100 text-gray-800 text-lg font-medium rounded-lg">
          <FaSignOutAlt className="mr-2" /> Log out
        </button>
      </div>
    </div>
        
    </div>
  )
}

export default Setting

