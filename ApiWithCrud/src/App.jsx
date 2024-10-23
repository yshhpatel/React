// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Provider } from 'react-redux'
// import ApiRedux from './Redux/ApiRedux'
import { store } from './App/Store'
import ApiRedux from './Redux/ApiRedux'

export default function App() {
  return (
    <>
    <Provider store={store}>
      <ApiRedux/>
    </Provider>
    </>
  )
}