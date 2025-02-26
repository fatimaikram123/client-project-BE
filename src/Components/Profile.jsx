import React from 'react';
import leftarrow from '../assets/images/leftarrow.png';
import { NavLink } from 'react-router-dom';
import chevron from '../assets/images/Chevron.png';

import { 
    FaShieldAlt, 
    FaCog, 
    FaQuestionCircle, 
    FaUsers, 
    FaShareAlt, 
    FaInfoCircle, 
    FaMoneyCheckAlt 
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="w-full h-15 content-center">
      <div className='flex justify-between'>
        <NavLink to="/">
          <div className='pl-10 pt-2 max-sm:pl-2'>
            <img className='max-sm:w-7' src={leftarrow} alt="" />
          </div>
        </NavLink>
      </div>
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md w-full">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-lg font-semibold">👤</span>
        </div>

        {/* User Details */}
        <div className="ml-4 flex-1">
          <p className="text-gray-800 font-semibold text-lg">ars****@gmail.com</p>

          {/* Verified Badge */}
          <div className="flex items-center mt-1">
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-semibold flex items-center">
              ✅ Approved
            </span>
            <span className="text-gray-500 text-sm ml-3">ID: 1970640647</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="text-gray-400">
          <img src={chevron} width={20} alt="" />
        </div>
      </div>

      <div className="w-full mx-auto bg-white p-0 rounded-lg shadow-md">
        {/* Referral Card */}
        <div className="bg-gray-100 p-2 rounded-lg flex flex-col items-start">
          <p className="text-gray-700 font-medium">Referral</p>
          <p className="text-gray-500 text-sm">Refer & Earn Up to 40% Commission</p>
          <button className="mt-2 px-4 py-1 bg-gray-800 text-white text-sm rounded-md">Go referral</button>
        </div>

        {/* Security Settings */}
        <div className="mt-1">
          <h3 className="text-gray-500 text-sm uppercase">Security Settings</h3>
          <div className="flex justify-between items-center py-3 border-b">
            <div className="flex items-center">
              <FaShieldAlt className="text-gray-600 mr-3" />
              <p className="text-gray-800">Security</p>
            </div>
            <span className="text-orange-500 text-sm">Medium</span>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="mt-2">
          <h3 className="text-gray-500 text-sm uppercase">Payment settings</h3>
          <div className="flex justify-between items-center py-3 border-b">
            <div className="flex items-center">
              <FaMoneyCheckAlt className="text-gray-600 mr-3" />
              <p className="text-gray-800">Payment Priority</p>
            </div>
            <span className="text-gray-400"><img src={chevron} width={20} alt="" /></span>
          </div>
        </div>

        {/* General Settings */}
        <div className="mt-1.5">
          <h3 className="text-gray-500 text-sm uppercase">General</h3>
          {[
            { icon: <FaCog />, label: "Settings", link: "/settings" },  // Added NavLink for settings
            { icon: <FaQuestionCircle />, label: "Support Center", link: "/support" },
            { icon: <FaUsers />, label: "Community", link: "/community" },
            { icon: <FaShareAlt />, label: "Share", link: "/share" },
          ].map((item, index) => (
            <NavLink to={item.link} key={index} className="block">
              <div className="flex justify-between items-center py-3 border-b">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-3">{item.icon}</span>
                  <p className="text-gray-800">{item.label}</p>
                </div>
                <span className="text-gray-400">
                  <img src={chevron} width={20} alt="" />
                </span>
              </div>
            </NavLink>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-1 flex justify-between items-center text-gray-600">
          <div className="flex items-center">
            <FaInfoCircle className="mr-3" />
            <p>About Us</p>
          </div>
          <span className="text-gray-500 text-sm">v 2.4.1</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;

