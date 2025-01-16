
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SponsorSection from './components/SponsorSection.tsx'
import './index.css'
import Button from './components/Button.tsx' // *
import Hero from './components/Hero.tsx'
import AboutUs from './components/AboutUs.tsx'
import Navbar from "./components/Navbar.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen"></div>
      <div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
       <SponsorSection />
      </div>
    </>
  );
}

export default App;
