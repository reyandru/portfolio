import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';
import Resume from './components/Resume.jsx';
import Home from './components/Home.jsx';
import Works from './components/Works.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contacts from './components/Contact.jsx';
import SeeAll from './components/SeeAll.jsx';

function App() {
  return (
    <Router>
      <div className="app-container"> 
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/see-all" element={<SeeAll />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
