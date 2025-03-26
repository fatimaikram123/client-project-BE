import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Cardone from './Components/Virtualcard';
import Physicalcard from './Components/Physicalcard';
import Cardheader from './Components/Cardheader';
import Currency from './Components/Currency';
import Deposit from './Components/Deposit';
import Profile from './Components/Profile';
import Setting from './Components/Setting';
import Hub from './Components/Hub';
import Community from './Components/Community';
import LoginPage from './Components/LoginPage';

const App = () => {
  const token = localStorage.getItem("token"); // Check if user is logged in

  return (
    <Routes>
      {/* Redirect to Home if token exists, otherwise show LoginPage */}
      <Route path="/" element={token !== undefined && token !== null ? <Navigate to="/home" replace /> : <LoginPage />} />

      {/* Protected Routes (Only accessible if token exists) */}
      {token !== undefined && token !== null && (
      <>
          <Route path="/home" element={<Home />} />
          <Route path="/card" element={<Cardheader />} />
          <Route path="/virtual-card" element={<Cardone />} />
          <Route path="/physical-card" element={<Physicalcard />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/community" element={<Community />} />
        </>
      )}

      {/* Redirect unknown paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
