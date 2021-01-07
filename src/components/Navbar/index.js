import React from "react";
import Nav from "react-bootstrap/Nav"
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            <Nav defaultActiveKey="/home">
                <Nav.Item className="spacing">
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/samantha-barrueta/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
                    </li>
                </Nav.Item>

                <Nav.Item className="spacing">
                    <li className="nav-item">
                        <a href="https://github.com/samanthabarrueta" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
                    </li>
                </Nav.Item>
            </Nav>

            <Nav>
                <Nav.Item>
                    <Link to="/React-Portfolio" className={location.pathname === "/React-Portfolio" ? "nav-link active" : "nav-link"}>
                        About
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
                        Projects
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
  );
}

export default Navbar;
