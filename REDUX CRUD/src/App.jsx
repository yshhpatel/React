import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Redux from './Reduxcrud/Redux'

export default function App() {
  return (
    <div>
      <Provider store={store}>
       <Redux/>
      </Provider>
    </div>
  )
}