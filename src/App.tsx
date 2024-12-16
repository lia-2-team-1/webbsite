import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Button from './components/Button.tsx' // *
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen">
        <h1 className="text-center">Centered?</h1>
        <Button text="ASDAASDASDASDLKJASLDJKALSKJDLKJDASLJKASDLKJASLJKD" linkTo="" fSize="1" ></Button>
    </div>
    </>
  )
}

export default App
