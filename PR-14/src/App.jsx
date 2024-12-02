// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../App/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allpage from './Components/Allpage'
import Mens from './Components/Mens'
import Jewelery from './Components/Jewelery'
import Electronic from './Components/Electronic'
import Women from './Components/Women'

export default function App() {
  return (
  <>
  <BrowserRouter>
  <Provider store={store}>
  <Routes>
  <Route path='/' element={<Allpage/>}></Route>
  <Route path='/Men' element={<Mens/>}></Route>
  <Route path='/Jewelery' element={<Jewelery/>}></Route>
  <Route path='/Electronic' element={<Electronic/>}></Route>
  <Route path='/Women' element={<Women/>}></Route>
  </Routes>
  </Provider>
  </BrowserRouter>
  </>
  )
}
