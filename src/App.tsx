import './index.css';
import React from 'react';
import SponsorSection from './components/SponsorSection.tsx';
import Button from './components/Button.tsx';
import Hero from './components/Hero.tsx';
import Footer from './components/Footer.tsx';
import AboutUs from './components/AboutUs.tsx';
import Navbar from "./components/Navbar.tsx";
import LightDark from "./components/LightDark.tsx" ;


function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
       <SponsorSection />
      </div>
    <Footer/>
    </>
  );

}

export default App;
