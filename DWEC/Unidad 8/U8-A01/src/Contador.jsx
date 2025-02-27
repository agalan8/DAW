import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Contador.css'

function Contador() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CONTADOR</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Has pulsado el botón: {count} veces.
        </button>
      </div>
    </>
  )
}

export default Contador
