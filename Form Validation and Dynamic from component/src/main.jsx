import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FormValidation from './component/FormValidation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FormValidation/>
  </StrictMode>,
)
