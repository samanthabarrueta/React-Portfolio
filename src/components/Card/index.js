import React from "react";
import Card from "react-bootstrap/Card";
import "./index.css";

const CardContainer = (props) => {
    return (
        <div>
            <Card className="card">
                <Card.Body>{props.children}</Card.Body>
            </Card>
        </div>
    );
};

export default CardContainer;
