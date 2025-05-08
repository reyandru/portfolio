import { Me1, MyResume } from '../assets/assests';
import '../styles/resume.css';
import '../styles/has_header.css';

function Resume() {
  return (
    <>
      <div className="resume has_header">
        <div className="profile">
          <img src={Me1} alt="Profile" width={350} height={380} className="picture" />
          <div className="contacts">
            <p className="name">Rei Andrew C. Bariata</p>
            <p>Purok 1 Brgy. Abulalas Hagonoy, Bulacan</p>
            <p>+93 947-6080-607</p>
            <a href="mailto:bariatareiandrew@gmail.com">bariatareiandrew@gmail.com</a><br />
            <a href="https://www.linkedin.com/in/rei-andrew-bariata-563512361/">LinkedIn</a><br />
            <a href="https://github.com/reyandru">Github</a>
          </div>
        </div>

        <div className="career-objective">
          <h1 className="componentsHeader">Career Objective</h1>
          <p>To achieve a highly discerning role, to be an efficient and productive Affiliate, and to put my social and interpersonal abilities as an IT student to use, adding value to organizational operations and contributing to the institution's common vision and purpose of excellence.</p>
        </div>

        <hr />

        <div className="skills">
          <h1 className="componentsHeader">Skills</h1>
          <ul className="skill-1">
            <h1>Soft Skills</h1>
            {["Excellent time management skills", "Strong interpersonal and communication skills", "Extremely organized and detail oriented", "Adaptability", "Fast-learner", "Problem-solving"].map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <ul className="skill-2">
            <h1>Technical Skills</h1>
            {["Web Development (Front-end)", "HTML, CSS, JAVASCRIPT, React.js, Tailwind, Java, PHP, Python", "Software Testing using selenium", "Photo and Video Editing", "Database management", "Have knowledge about Operating system"].map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <hr />

        <div className="education">
          <h1 className="componentsHeader">Education</h1>
          <div className="educations">
            <h1>College</h1>
            <b>Bachelor of Science in Information Technology, Major in Web and App Development | Bulacan State University - Hagonoy Campus</b>
            <p>A.Y 2021-2025</p>
          </div>
        </div>

        <hr />

        <div className="seminar">
          <h1 className="componentsHeader">Seminars</h1>

          <div className="semi-details">
            <h1>SAMBALARAN 2022 CAMP PROJECT VI - BulSU Hagonoy Campus</h1>
            <ul>
              <li><b>Cyber Security</b></li>
              <ul className="year"><li>October 03, 2022</li></ul>
              <li><b>Canva Photo Editing</b></li>
              <ul className="year"><li>October 05, 2022</li></ul>
            </ul>
          </div>

          <div className="semi-details-1">
            <h1>Solution Architecture - BulSU Hagonoy Campus</h1>
            <ul><li>December 13, 2024</li></ul>
          </div>

          <div className="semi-details-1">
            <h1>Cracking the Code: Choosing your IT Path - BulSU Hagonoy</h1>
            <ul><li>April 19, 2023</li></ul>
          </div>

          <hr />

          <div className="reference">
            <h1 className="componentsHeader">Character Reference</h1>
            <div className="reference-char">
              <ul>
                <h3>Mr. Nathaniel S. Marigsa</h3>
                <li>I.T Programmer</li>
              </ul>
              <ul>
                <h3>Mr. Dave Salvador</h3>
                <li>I.T Programmer</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="signature">
              <h4>REI ANDREW C. BARIATA</h4>
              <p>Applicant</p>
          </div>
        </div>
      </div>

      <div className="download-btn">
        <a href={MyResume} download>
          <button className="download-button">Download My Resume</button>
        </a>
      </div>
    </>
  );
}

export default Resume;
