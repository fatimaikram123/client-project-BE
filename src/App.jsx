import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import Cardone from './Components/Virtualcard';
import Physicalcard from './Components/Physicalcard';
const App = () => {
  return (
    <>
    <Home />
    <Routes>
    
        <Route path='/virtual-card'  element={<Cardone/>}  />
        <Route path='/physical-card' element={<Physicalcard />}  />
      </Routes>
       </>
    
  )
}

export default App

