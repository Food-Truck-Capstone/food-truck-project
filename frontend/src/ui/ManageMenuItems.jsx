import React from "react"
import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

// This is the template that will get used to create the list of menu items for a truck.
export function ManageMenuItems () {
    return (
        <>
            <Row className={"border border-dark rounded-2 py-3 center mt-3"}>
                <Col md={1} className={"my-auto"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={2} className={"my-auto"}>
                    <p>Carne Asada Tacos</p>
                </Col>

                <Col md={4} className={"my-auto"}>
                    <p>Flank steak marinated in juices served on corn tortillas.</p>
                </Col>

                <Col md={2} className={"my-auto"}>
                    <p>$12.99</p>
                </Col>

                <Col md={3} className={"my-auto"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

            </Row>
        </>
    )
}