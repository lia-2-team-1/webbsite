import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen">
        <h1 className="text-center">Centered?</h1>
    </div>
    </>
  )
}

export default App
