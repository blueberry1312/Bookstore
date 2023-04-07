import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/icon.png';

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link className="nav-brand" to="/">Bookstore CMS</Link>
      <ul className="nav-links">
        <li className="place-link">
          <Link className="nav-link" to="/">BOOKS</Link>
        </li>
        <li className="place-link">
          <Link className="nav-link" to="/categories">CATEGORIES</Link>
        </li>
        <li className="place-icon">
          <button className="icon-button" type="button">
            <img src={Logo} alt="Logo" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
