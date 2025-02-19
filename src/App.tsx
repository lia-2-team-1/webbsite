import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import MatchPage from './components/pages/MatchPage';
import NewsPage from './components/pages/NewsPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div className='w-screen'>
          <Navbar />
          <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/matches' element={<MatchPage />} />
            <Route path='/news' element={<NewsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
