import { Me1 } from '../assets/assests';
import '../styles/home.css';


function Home() {
  return (
    <section className="home_section">
      <div className="text">
        <p>Hi! I’m Rei Andrew</p>
        <h1 className="iam"></h1>
      </div>
      <div className="profile_picture">
        <img src={Me1} alt="Profile" width={500} />
      </div>
    </section>
  );
}

export default Home;
