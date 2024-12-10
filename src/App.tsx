import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SponsorSection from './components/SponsorSection.tsx'
import './index.css'
import Button from './components/Button.tsx' // *
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen">
        <h1 className="text-center">Centered?</h1>
        <Button text="Button" linkTo="" ></Button>
    </div>
      <div>
       <SponsorSection></SponsorSection>
      </div>
    </>
  )
}

export default App
