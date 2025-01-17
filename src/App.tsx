import SponsorSection from "./components/SponsorSection.tsx";
import "./index.css";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import News from "./components/News.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="w-screen">
        <h1 className="text-center">Centered?</h1>
      </div>
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <News />
        <SponsorSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
