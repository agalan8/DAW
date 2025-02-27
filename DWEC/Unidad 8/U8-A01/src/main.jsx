import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contador from './Contador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contador />
  </StrictMode>,
)
