/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './CreateAccount.jsx/Create'
import Login from './Login/Login'
import Dashborad from './Components/Dashborad'  

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Create}></Route>
          <Route path='/Login' Component={Login}></Route>
          <Route path='/Dashborad' Component={Dashborad}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}