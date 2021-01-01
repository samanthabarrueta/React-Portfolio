import React from "react";
import Nav from "react-bootstrap/Nav"
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Navbar = () => {
    const location = useLocation();

    return (
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Link to="/React-Portfolio" className={location.pathname === "/React-Portfolio" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item as="li">
                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/samantha-barrueta/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } size="2x" /></a>
                </li>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
                    Projects
                </Link>
            </Nav.Item>
            <Nav.Item as="li">
                <li className="nav-item">
                    <a href="https://github.com/samanthabarrueta" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } size="2x" /></a>
                </li>
            </Nav.Item>
        </Nav>
  );
}

export default Navbar;
