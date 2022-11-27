import React from "react";
import {Col, Container, Row} from "react-bootstrap";



export function CustomerLogin() {
    return (
        <>
<Container className="align-content-center">
    <h1> Profile </h1>
    <form id="CustomerLoginForm">
        <label>
            <Row id="CustomerLoginText">
                Name
                <input type="Text" name="Name"/>
            </Row>
            <Row id="CustomerLoginText">
                Phone
                <input type="Text" name="PhoneNumber"/>
            </Row>
            <Row id="CustomerLoginText">
                Email
                <input type="Text" name="Email"/>
            </Row>
            <Row className="m-4">
                <Col>
                    <input id="accpetButton" type="Submit" value="Accept"/>
                </Col>
                <Col>
                    <input id="canelButton" type="Submit" value="Cancel"/>
                </Col>
            </Row>
        </label>
    </form>
</Container>
</>
)
}