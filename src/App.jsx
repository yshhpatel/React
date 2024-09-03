import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hooks from './Components/Hooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Hooks/>
    </div>
      
  )
}

export default App
