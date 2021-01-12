import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Navigation = () => {
    const location = useLocation();

    return (
            <Navbar sticky="top">
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

                <Navbar sticky="top" className="ml-auto">
                    <Nav className="spacing">
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={"nav-link active", "nav-link"}>
                            About
                        </Link>
                    </Nav>

                    <Nav className="spacing">
                        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={"nav-link active", "nav-link"}>
                            Projects
                        </Link>
                    </Nav>

                    <Nav className="spacing">
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className={"nav-link active", "nav-link"}>
                            Contact
                        </Link>
                    </Nav>
                </Navbar>
            </Navbar>
    );
}

export default Navigation;
