import { NavLink } from 'react-router-dom';
import { MyLogo } from '../assets/assests';
import '../styles/header.css';
import '../styles/has_header.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/works', label: 'Works' },
  { to: '/portfolio', label: 'Resume' },
  { to: '/about', label: 'About Me' },
  { to: '/contact', label: 'Contact' },
  { to: '/see-all', label: 'See All' }
];

function Header() {
  return (
    <header className='has_scroll'>
      <img src={MyLogo} alt="logo" width={80} />
      <ul>
        {navLinks.map(({ to, label }, idx) => (
          <li key={idx}>
            <NavLink to={to} className="nav-link" end={to === '/'}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
