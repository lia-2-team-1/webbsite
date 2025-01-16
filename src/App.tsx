
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SponsorSection from './components/SponsorSection.tsx'
import './index.css'
import Button from './components/Button.tsx'
import Hero from './components/Hero.tsx'
import Footer from './components/Footer.tsx'
import AboutUs from './components/AboutUs.tsx'
import Navbar from "./components/Navbar.tsx";
import News from './components/News.tsx'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen">
        <h1 className="text-center">Centered?</h1>
      </div>
      <div>
        <Navbar />
        <Hero />
        <News />
        <SponsorSection />
      </div>
    <Footer/>
    </>
  );
}

export default App;
