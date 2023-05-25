import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Nav path={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
