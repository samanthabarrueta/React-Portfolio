import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const NavTabs = () => {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/React-Portfolio" className={location.pathname === "/React-Portfolio" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <a href="https://www.linkedin.com/in/samantha-barrueta/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } size="2x" /></a>
      </li>
      <li className="nav-item">
        <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <a href="https://github.com/samanthabarrueta" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } size="2x" /></a>
      </li>
    </ul>
  );
}

export default NavTabs;
