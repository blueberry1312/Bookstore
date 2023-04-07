import { NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/icon.png';

function Navbar() {
  return (
    <nav className="nav-bar">
      <NavLink className="nav-brand" to="/">Bookstore CMS</NavLink>
      <ul className="nav-links">
        <li className="place-link">
          <NavLink className="nav-link" to="/" activeClassName="active-link">BOOKS</NavLink>
        </li>
        <li className="place-link">
          <NavLink className="nav-link" to="/categories" activeClassName="active-link">CATEGORIES</NavLink>
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
