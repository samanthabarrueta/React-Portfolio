import React from "react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Projects</h1>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <p>This is a description of project 1</p>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <p>This is a description of project 2</p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <p>This is a description of project 3</p>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <p>This is a description of project 4</p>
                    </Card>
                </Col>
            </Row>  
        </Container>
    );
};

export default Projects;
