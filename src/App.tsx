import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import SponsorSection from "./components/SponsorSection.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import News from "./components/News.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Footer from "./components/Footer.tsx";
import Match from "./components/Match.tsx";

function App() {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element="" />
          <Hero />
          <AboutUs />
          <News />
          <SponsorSection />
          <Match />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
