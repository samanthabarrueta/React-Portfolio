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
                        <h1>Project Name</h1>
                        <p>Quick Description</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p>Link to Github</p>
                        <p>Images</p>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <h1>Project Name</h1>
                        <p>Quick Description</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p>Link to Github</p>
                        <p>Images</p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <h1>Project Name</h1>
                        <p>Quick Description</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p>Link to Github</p>
                        <p>Images</p>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card>
                        <h1>Project Name</h1>
                        <p>Quick Description</p>
                        <p>Link to deployed App</p>
                        <p>Login Info if Applicable</p>
                        <p>Link to Github</p>
                        <p>Images</p>
                    </Card>
                </Col>
            </Row>  
        </Container>
    );
};

export default Projects;
