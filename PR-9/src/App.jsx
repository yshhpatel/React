// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import TaskRedux from './Redux/TaskRedux'

export default function App() {
  return (
    <>
      <Provider store={store}>
      <TaskRedux/>
      </Provider>
    </>
  )
}