import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavTabs = () => {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
