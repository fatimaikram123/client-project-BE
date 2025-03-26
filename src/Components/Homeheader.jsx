import React from 'react'
import { NavLink } from 'react-router-dom';
import User from '../assets/images/User.png';
import gift from '../assets/images/gift.png';
import notification from '../assets/images/notification.png';
import { useNavigate } from "react-router-dom";
const Homeheader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/", { replace: true }); // Redirect to login
    window.location.reload(); // Refresh page
  };
  return (
    
    <div className='bg-white m-0 p-0 w-full h-10 flex justify-between items-center'>
        <NavLink
                  to="/profile"
                >
              <div><img src={User} width={35} alt="" /></div>
                </NavLink>

      <div className='font-bold text-3xl'>RedotPay</div>
      <div className='flex gap-5 items-center'>
        <div className='hover:cursor-pointer' ><img src={gift} width={25} alt="" /></div>
        <div  className='hover:cursor-pointer' ><img src={notification} width={25} alt="" /></div>
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
      </div>
    </div>
  )
}

export default Homeheader
