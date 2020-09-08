import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from '../../IMG_2838edit.jpg';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>      
        <img src={Image} alt="Samantha" width="300" />          
        </Col>
        <Col lg={6}> 
          <h1>About</h1> 
          <p>
            Full Stack Developer located in Chicago, IL. I have a strong desire for knowledge, and I enjoy environments that foster learning. I'm currently enrolled in Northwestern University's Full Stack Coding Bootcamp which is providing me with experience in JavaScript, Node.js, React, HTML, CSS, and MongoDB. View my projects for examples of my ability and skills. As a longtime hobbyist photographer, I appreciate the value in creativity, especially when applied with proper technique. This appreciation pushes me to be constantly learning and applying what I've learned to improve my code. 
          </p>    
        </Col>
      </Row>

      <Row className="row justify-content-md-center">
        <h1>Contact Me</h1> 
      </Row>
    </Container>
  );
}

export default Home;
