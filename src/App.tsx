import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SponsorSection from './components/SponsorSection.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <SponsorSection></SponsorSection>
      </div>
    </>
  )
}

export default App
