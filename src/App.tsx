import "./index.css";
import SponsorSection from "./components/SponsorSection.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import News from "./components/News.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="w-screen">
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
