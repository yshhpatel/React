/* eslint-disable no-unused-vars */
import React from 'react';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import User from './Context/User';

export default function App() {
  return (
    <>
      <User>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </User>
    </>
  );
}
