import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import Homebuttom from './Components/Homebuttom';
import Cardone from './Components/Virtualcard';
import Physicalcard from './Components/Physicalcard';
import Cardheader from './Components/Cardheader';
const App = () => {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/card'  element={<Cardheader/>}  />
    <Route path='/virtual-card'  element={<Cardone/>}  />
    <Route path='/physical-card' element={<Physicalcard />}  />
      </Routes>
     
       </>
     
    
  )
}

export default App

