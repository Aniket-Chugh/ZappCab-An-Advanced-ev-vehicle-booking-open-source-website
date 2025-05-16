import React from 'react';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import CurrentOffers from './Pages/CurrentOffers';
import SignUpPage from './Pages/SignUpPage';
import Loginpage from './Pages/Loginpage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/offers" element={<CurrentOffers></CurrentOffers>} />
      <Route path="/create-account" element={<SignUpPage></SignUpPage>} />
      <Route path="/login" element={<Loginpage></Loginpage>} />


    </Routes>
  );
};

export default App;
