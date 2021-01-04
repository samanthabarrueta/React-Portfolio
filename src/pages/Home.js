import React from "react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../../src/images/IMG_2838edit.jpg";

const Home = () => {
    return (
        <Container>
            <Row>
                <Card>
                    <Row>
                        <Col lg={4}>      
                            <img src={Image} alt="Samantha" width="300" />          
                        </Col>
                        <Col lg={6}> 
                            <h2>Samantha Barrueta</h2> 
                            <p>
                            Full Stack Developer located in Chicago, IL. I have a strong desire for knowledge and I enjoy environments that foster learning. I've obtained a certificate in Full Stack Web Development, from Northwestern University's Coding Bootcamp. I have experience in JavaScript, Node.js, React, HTML, CSS, and MongoDB. View my projects for examples of my ability and skills. As a photography enthusiast, I appreciate the value in creativity, especially when applied with proper technique. This appreciation pushes me to be constantly learning and applying what I've learned to improve my code. 
                            </p>    
                        </Col>
                    </Row>

                    <Row className="row justify-content-md-center">
                        <h3>Contact Me</h3> 
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Row className="row justify-content-md-center"><FontAwesomeIcon icon={ faEnvelope } size="2x" /></Row>
                            <Row className="row justify-content-md-center">samanthabarrueta@gmail.com</Row>
                        </Col>
                        <Col lg={6}>
                            <Row className="row justify-content-md-center"><FontAwesomeIcon icon={ faPhone } size="2x" /></Row>
                            <Row className="row justify-content-md-center">(708) 566- 7183</Row>
                        </Col> 
                    </Row>
                </Card>
            </Row> 
        </Container>
    );
};

export default Home;
