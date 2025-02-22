import React from 'react'

import Cardheader from './Components/Cardheader'
import { Route, Routes } from 'react-router-dom';
import Cardone from './Components/Virtualcard';
import Physicalcard from './Components/Physicalcard';


const App = () => {
  return (
    <>
    <Cardheader/>
    <Routes>
        <Route path='/virtual card' element={<Cardone/>} />
        <Route path='/physical card' element={<Physicalcard />} />
      </Routes> </>
    
  )
}

export default App

