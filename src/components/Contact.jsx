import React from "react";
import '../styles/contacts.css';
import { ContactEmail, MyLogo, FB, Instagram, Email, Github } from "../assets/assests";

function Contacts() {
  const socialLinks = [
    { href: 'https://www.facebook.com/REYANDRUBARIATA', img: FB, label: 'Rei Andrew C. Bariata' },
    { href: 'mailto:bariatareiandrew@gmail.com', img: Email, label: 'bariatareiandrew@gmail.com' },
    { href: 'https://github.com/reyandru', img: Github, label: 'Reyandru' }
  ];

  return (
    <section className="contact_section has_header">
      <div className="image">
        <h1>Contact Me</h1>
        <img src={ContactEmail} alt="Contact" />
      </div>

      <form className="contact_form" action="">

        <div className="forms-inputs">
        <label>
          Fullname:
          <input type="text" name="fullname" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Message:
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit" className="submit_btn">Send</button>

        </div>

        
        <div className="myContacts">
        <ul>
          {socialLinks.map(({ href, img, label }, idx) => (
            <li key={idx}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="social-logo" width={30} height={30} />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      </form>


    </section>
  );
}

export default Contacts;
