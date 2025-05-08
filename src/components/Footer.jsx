import { MyLogo, FB, Instagram, Email, Github } from '../assets/assests';
import '../styles/footer.css';

const socialLinks = [
  { href: 'https://www.facebook.com/REYANDRUBARIATA', img: FB, label: 'Rei Andrew C. Bariata' },
  { href: 'https://mail.google.com/mail/u/0/#spam?compose=CllgCJvqKGtNrRPFBRwtvJNGDpWXVnTqDWNLvqDlDNHDRZRgpFngJwDZBXCSvSNbdbTLjnpHfLB', img: Email, label: 'bariatareiandrew@gmail.com' },
  { href: 'https://github.com/reyandru', img: Github, label: 'Reyandru' }
];

function Footer() {
  return (
    <footer>
      <img src={MyLogo} alt="logo" width={120} />
      <ul>
        {socialLinks.map(({ href, img, label }, idx) => (
          <li key={idx}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img src={img} alt="social-logo" width={30} height={30} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
