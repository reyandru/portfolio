import React from "react";
import "../styles/about_me.css";

import { Me2, Address, B_Day, College, Course, Major, Hobbies } from "../assets/assests";

const skills = [
  { name: "HTML", percent: 100 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 70 },
  { name: "Python", percent: 60 },
  { name: "Java", percent: 50 },
  { name: "PHP", percent: 60 },
  { name: "React", percent: 70 },
];

function AboutMe() {
  return (
    <section className="about_section has_header">
      <h1>About Me</h1>
      <div className="personal">
      <div className="first-row">
        <p>My name is Rei Andrew C. Bariata </p>
        <img src={B_Day} alt="" width={200}/>
        <p>I live in Brgy, Abulalas Hagonoy, Bulacan</p>
           <img src={College} alt="" width={600} height={250}/>
        <p>My course is Bachelor of Science Information Technology</p>
           <img src={Major} alt="" width={600} height={250}/>
        <p className="hobbies">
          My Hobbies:
          <span>
          ~ Playing video games<br/>
          ~ Coding<br/>
          ~ Reading books<br/>
          ~ Research new technologies
          </span>
       
        </p>
      </div>
          <div className="second-row">
             <img src={Me2} alt="" width={300} height={250}/>
        <p>My Birthday is on August 19, 2003</p>
           <img src={Address} alt="" width={200}/>
        <p>I studied College in Bulacan State University - Hagonoy Campus</p>
           <img src={Course} alt="" width={300} height={250}/>
        <p>My Major is Web & App Development</p>
           <img src={Hobbies} alt="" width={200}/>
          </div>
      </div>

      <div className="mySkills">
        <div className="title-skills">
          <h1>My Skills</h1>
        </div>
        <div className="container-skills">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-bar">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="bar-background">
                <div
                  className="bar-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
