import "./../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import pepidLogo from "../assets/pepid-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={pepidLogo} alt="Logo PEPID" />
      </div>

      <ul>
        <li>
          <NavLink to="/">Beranda</NavLink>
        </li>
        <li>
          <NavLink to="/survei">Mulai Survei</NavLink>
        </li>
        <li>
          <NavLink to="/about">Tentang</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;