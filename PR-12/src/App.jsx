import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignIn from './Component/SignIn'
import SignUp from './Component/SignUp'
import Dashboard from './Component/Dashboard'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/login' Component={SignIn}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
