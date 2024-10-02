
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path ='/About' element={<About/>}></Route>
      <Route path='/Contact/:id' Component={Contact}></Route> 
      </Routes>
      </BrowserRouter>
    </>
  )
}
