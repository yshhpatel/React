import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Component/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
  </StrictMode>,
)
