import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Temporizador from './components/Temporizador'

function App() {

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <Temporizador />
    </div>
  )
}

export default App
