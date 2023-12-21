import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavItem({ to, label }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={`nav-link ${pathname.includes(to) ? "active" : ""}`}
    >
      {label}
    </Link>
  );
}

function Nav() {
  return (
    <nav className="nav nav-tabs mt-2">
      <NavItem to="/home" label="Home" />
      <NavItem to="/about" label="About" />
      <NavItem to="/projects" label="Projects" />
      <NavItem to="/pics" label="Pics" />
      <NavItem to="/writing" label="Writing" />
      <NavItem to="/fun" label="Fun" />
    </nav>
  );
}

export default Nav;
