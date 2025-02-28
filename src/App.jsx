import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import Homebuttom from './Components/Homebuttom';
import Cardone from './Components/Virtualcard';
import Physicalcard from './Components/Physicalcard';
import Cardheader from './Components/Cardheader';
import Currency from './Components/Currency';
import Deposit from './Components/Deposit';
import Profile from './Components/Profile';
import Setting from './Components/Setting';
import Hub from './Components/Hub';
import Community from './Components/Community';

const App = () => {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/card'  element={<Cardheader/>}  />
    <Route path='/virtual-card'  element={<Cardone/>}  />
    <Route path='/physical-card' element={<Physicalcard />}  />
    <Route path='/currency' element={<Currency />}  />
    <Route path='/deposit' element={<Deposit />}  />
    <Route path='/profile' element={<Profile />}  />
    <Route path='/settings' element={<Setting />}  />
    <Route path='/hub' element={<Hub />}  />
    <Route path='/community' element={<Community />}  />
  
   
      </Routes>
       </>
     
    
  )
}

export default App

