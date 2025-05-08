import '../styles/App.css';
import Resume from './Resume.jsx';
import Home from './Home.jsx';
import Works from './Works.jsx';
import AboutMe from './AboutMe.jsx';
import Contacts from './Contact.jsx';

function SeeAll() {
  return (
    <div className="app-container">
      <div className="main-content">
        <Home />
        <Resume />
        <Works />
        <AboutMe />
        <Contacts />
      </div>
    </div>
  );
}

export default SeeAll;
