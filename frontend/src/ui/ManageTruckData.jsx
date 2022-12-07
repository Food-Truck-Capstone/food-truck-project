import React, {useEffect} from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export function ManageTruckData({truck}) {
console.log(truck)

    return (
        <>
            <Row className={"rounded-2 mb-3 py-3"} id={"borderEffect"}>
                <Col md={1} className={"my-auto text-center"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={1} className={"my-auto text-center"}>
                    <p className={"m-0"}>1</p>
                </Col>

                <Col md={3} className={"my-auto text-center"}>
                    {truck.truckName}
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    <Container className="input-group">
                        {truck.truckFoodType}
                    </Container>
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    {/*<label className="switch">*/}
                    {/*    <input type="checkbox"/>*/}
                    {/*    <span className="slider round"></sgit pan>*/}
                    {/*</label>*/}
                    {truck.truckCardAccepted}
                </Col>

                <Col md={1} className={"text-center"}>
                    <Button variant="primary">Save</Button>
                </Col>

                <Col md={2} className={"add-edit-menu my-auto text-center"}>
                    <Nav.Link href={`manage-menu/${truck.truckId}`}>Add/Edit Menu </Nav.Link>
                </Col>
            </Row>
        </>
    )
}