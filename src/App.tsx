import SponsorSection from "./components/SponsorSection.tsx";
import "./index.css";
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
        <Hero />
        <AboutUs />
        <News />
        <SponsorSection />
        <Match />
        <Footer />
      </div>
    </>
  );
}

export default App;
