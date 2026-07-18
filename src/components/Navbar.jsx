import "./../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import pepidLogo from "../assets/pepid-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={pepidLogo} alt="Logo PEPID" />
      </div>

      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={open ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink to="/survei" onClick={() => setOpen(false)}>
            Mulai Survei
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            Tentang
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;