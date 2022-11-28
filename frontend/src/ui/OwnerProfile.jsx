import React from "react";
import {Col, Container, Row} from "react-bootstrap";



export function OwnerProfile() {
    return (
        <>
            <Container className="align-content-center">
                <h2>Truck Owner Profile</h2>
                <form id="OwnerLoginForm">
                    <label>
                        <Row id="OwnerLoginText">
                            Name
                            <input type="Text" name="Name"/>
                        </Row>
                        <Row id="OwnerLoginText">
                            Phone
                            <input type="Text" name="PhoneNumber"/>
                        </Row>
                        <Row id="OwnerLoginText">
                            Email
                            <input type="Text" name="Email"/>
                        </Row>
                        <Row className="m-4">
                            <Col>
                                <input id="acceptButton" type="Submit" value="Accept"/>
                            </Col>
                            <Col>
                                <input id="cancelButton" type="Submit" value="Cancel"/>
                            </Col>
                        </Row>
                    </label>
                </form>
            </Container>
        </>
    )
}