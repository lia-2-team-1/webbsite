import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element="{<HomePage />}" />
          <Route path="/about" element="{<AboutPage />}" />
          <Route path="/news" element="{<NewsPage />}" />
          <Route path="/match" element="{<MatchPage />}" />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
