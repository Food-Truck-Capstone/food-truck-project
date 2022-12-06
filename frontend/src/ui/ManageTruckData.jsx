import React from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import {ManageMenu} from "./ManageMenu.jsx";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export function ManageTruckData({truckId}) {
    return (
        <>
            <Row className={"border border-dark rounded-2 mb-2 py-3"}>
                <Col md={1} className={"my-auto text-center"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={1} className={"my-auto text-center"}>
                    <p className={"m-0"}>1</p>
                </Col>

                <Col md={3} className={"my-auto text-center"}>
                    <input className="form-control" type="text" placeholder="Enter Truck Name"/>
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    <Container className="input-group">
                        <select className="form-select" id="truckType">
                            <option selected>Choose Type...</option>
                            <optgroup label="Truck Type by Food Culture">
                                <option>Chinese</option>
                                <option>German</option>
                                <option>Mexican</option>
                            </optgroup>

                            <optgroup label="Truck Type by Specific Food">
                                <option>Burger</option>
                                <option>Gordita</option>
                                <option>Salad</option>
                                <option>Taco</option>
                                <option>Tea</option>
                                <option>Torta</option>
                            </optgroup>

                        </select>
                    </Container>
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </Col>

                <Col md={1} className={"text-center"}>
                    <Button variant="primary">Save</Button>
                </Col>

            <Col md={2} className={"add-edit-menu my-auto text-center"}>
                <Nav.Link href={`manage-menu/${truckId}`}>Add/Edit Menu </Nav.Link>
            </Col>
            </Row>
        </>
    )
}