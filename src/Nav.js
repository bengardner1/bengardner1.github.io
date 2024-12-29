import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";

function NavItem({ to, label }) {
  const { pathname } = useLocation();
  return (
    <li className="nav-item">
    <Link
      to={to}
      className={`nav-link ${pathname.includes(to) ? "bg-link-active" : "bg-link-inactive"}`}>
      {label}
    </Link>
    </li>
  );
}

function Nav() {
  const [flipped, setFlipped] = useState(true);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <div className="d-flex justify-content-between align-items-center">
  <div className={`text-container ${flipped ? 'flipped' : ''}`}
  onClick={handleClick}>
    bengardner.dev
  </div>
  <nav className="navbar navbar-expand-lg">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <NavItem to="/home" label="Home" />
        <NavItem to="/about" label="About" />
        <NavItem to="/projects" label="Projects" />
        {/* <NavItem to="/pics" label="Pics" />
        <NavItem to="/writing" label="Writing" />
        <NavItem to="/fun" label="Fun" /> */}
      </ul>
    </div>
  </nav>
</div>
  );
}

export default Nav;
