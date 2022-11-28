import React from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

export function TruckManagement() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>My Truck(s)</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={1}>
                        <h5>Select</h5>
                    </Col>

                    <Col md={1}>
                        <h5>Truck #</h5>
                    </Col>

                    <Col md={3}>
                        <h5>Truck Name</h5>
                    </Col>

                    <Col md={3}>
                        <h5>Food Type</h5>
                    </Col>

                    <Col md={2}>
                        <h5>Menu</h5>
                    </Col>

                    <Col md={2}>
                        <h5>Card Accepted</h5>
                    </Col>
                </Row>

                <Row className={"border border-dark rounded-2"}>
                    <Col md={1} className={"my-auto"}>
                        <Form>
                            <Form.Check type="checkbox"/>
                        </Form>
                    </Col>

                    <Col md={1} className={"my-auto"}>
                        <p>1</p>
                    </Col>

                    <Col md={3} className={"my-auto"}>
                        <p>Truck Name Here</p>
                    </Col>

                    <Col md={3} className={"my-auto"}>
                        <p>Food Type Here</p>
                    </Col>

                    <Col md={2} className={"my-auto"}>
                        <Link href={"#"}>Add/Edit Menu</Link>
                    </Col>

                    <Col md={2} className={"my-auto"}>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </Col>
                </Row>
                <Col className={"text-center mt-2"}>
                    <Button href={"#"}>+</Button>
                </Col>
            </Container>
        </>
    )
}