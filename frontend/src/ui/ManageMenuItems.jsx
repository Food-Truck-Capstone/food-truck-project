import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

// This is the template that will get used to create the list of menu items for a truck.
export function ManageMenuItems () {
    return (
        <>
            <Row className={"border border-dark rounded-2 py-3 mt-0"}>
                <Col md={1} className={"my-auto text-center"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    <input className="form-control" type="text" placeholder="Enter Item Name"/>
                </Col>

                <Col md={4} className={"my-auto text-center"}>
                    <textarea className="form-control" rows="1" placeholder="Enter Item Description"/>
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    <p className={"d-inline"}>$ </p>
                    <input className="form-control w-50 d-inline" type="text" placeholder="0.00"/>
                </Col>

                <Col md={3} className={"my-auto text-center"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>
            </Row>
        </>
    )
}