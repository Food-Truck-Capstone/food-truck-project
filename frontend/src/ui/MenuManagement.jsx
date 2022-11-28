import React from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

export function MenuManagement() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Menu</h2>
                    </Col>

                    <Row>
                        <Col md={1}>Select</Col>
                        <Col md={2}>Item Name</Col>
                        <Col md={4}>Item Description</Col>
                        <Col md={1}>Item Price</Col>
                        <Col md={2}>Apply To ALL Trucks?</Col>
                        <Col md={2}></Col>
                    </Row>

                    <Row className={"border border-dark rounded-2"}>
                        <Col md={1}>
                            <Form>
                                <Form.Check type="checkbox"/>
                            </Form>
                        </Col>

                        <Col md={2}>Item Name Here</Col>
                        <Col md={4}>Item Description Here</Col>
                        <Col md={1}>0.00</Col>
                        <Col md={2}>
                            <Form>
                                <Form.Check type="checkbox"/>
                            </Form>
                        </Col>
                        <Col md={2}><Link href={"#"}>Save</Link></Col>
                    </Row>

                    <Col className={"text-center mt-2"}>
                        <Button href={"#"}>+</Button>
                    </Col>
                </Row>


            </Container>
        </>
    )
}