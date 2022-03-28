import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Layout from './components/Layout';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoutes from './components/ProtectedRoutes';
import Main from './components/Main';
import Teams from './components/Teams';
import Profile from './components/Account/Profile';

const App = () => {

  return (
    <div className="app h-full">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}> 
          <Route index element={<Main />} />
          <Route path="/profile" element={<Profile />} />          
        </Route>
      </Routes>
    </div>
  );
}




export default App;
