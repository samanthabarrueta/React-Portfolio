import React from "react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../../src/images/IMG_2838edit.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <Container fluid="lg">
            <Row className="text-center">
                <Col lg={12}>      
                    <img src={Image} alt="Samantha" width="300" id="about"/>          
                </Col>
            </Row>

            <Row className="text-center">
                <Col lg={12}> 
                    <h1>Hi! I'm Samantha</h1> 
                    <h2>Full Stack Web Developer</h2>
                    <p>
                    Welcome, I'm Samantha Barrueta. I have a strong desire for knowledge and I enjoy environments that foster learning. I've obtained a certificate in Full Stack Web Development, from Northwestern University's Coding Bootcamp. I have experience in JavaScript, Node.js, React, HTML, CSS, and MongoDB. View my projects for examples of my ability and skills. As a photography enthusiast, I appreciate the value in creativity, especially when applied with proper technique. This appreciation pushes me to be constantly learning and applying what I've learned to improve my code. 
                    </p>    
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2 id="projects">Projects</h2>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <h3>Covid Bartender</h3>
                        <p>Quick Description</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p><a target='blank' href='https://github.com/samanthabarrueta/front-end-project-2'>View FE Github</a> | <a target='blank' href='https://github.com/samanthabarrueta/backend-project-2'>View BE Github</a></p>
                        <p>Images</p>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <h3>Space Adventurer</h3>
                        <p>Arcade shooter game made using HTML canvas and javascript</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p><a target='blank' href='https://github.com/samanthabarrueta/Space-Adventurer'>View Github</a></p>
                        <p>Images</p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <h3>Employee Management System</h3>
                        <p>Quick Description</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p><a target='blank' href='https://github.com/samanthabarrueta/React-Employee-Mngmt-System'>View Github</a></p>
                        <p>Images</p>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <h3>IQ Solutions</h3>
                        <p>Website for local mold, water, and fire restoration company.</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p><a target='blank' href='https://github.com/samanthabarrueta/IQ-Solutions'>View Github</a></p>
                        <p>Images</p>
                    </Card>
                </Col>
            </Row>

            <Row className="row justify-content-md-center">
                <Col>
                    <h2 id="contact">Contact Me</h2>
                </Col> 
            </Row>

            <Row>
                <Col sm={12} md={6}>
                    <Row className="row justify-content-center"><FontAwesomeIcon icon={ faEnvelope } size="2x" /></Row>
                    <Row className="row justify-content-center">samanthabarrueta@gmail.com</Row>
                </Col>
                <Col sm={12} md={6}>
                    <Row className="row justify-content-center"><FontAwesomeIcon icon={ faPhone } size="2x" /></Row>
                    <Row className="row justify-content-center">(708) 566- 7183</Row>
                </Col> 
            </Row>
        </Container>
    );
};

export default Home;
