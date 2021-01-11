import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Navigation = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            <Navbar defaultActiveKey="/home">
                <Nav className="spacing">
                    <Nav.Link href="#home">
                        <a href="https://www.linkedin.com/in/samantha-barrueta/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } /></a>
                    </Nav.Link>
                </Nav>

                <Nav className="spacing">
                    <Nav.Link href="#home">
                        <a href="https://github.com/samanthabarrueta" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faGithub } /></a>
                    </Nav.Link>
                </Nav>
            </Navbar>

            <Navbar>
                <Nav className="spacing">
                    <Nav.Link href="#about"  className={"nav-link active", "nav-link"}>
                        About
                    </Nav.Link>
                </Nav>

                <Nav className="spacing">
                    <Nav.Link href="#projects" className={"nav-link active", "nav-link"}>
                        Projects
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
  );
}

export default Navigation;
