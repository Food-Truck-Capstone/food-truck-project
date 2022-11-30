import React from "react"
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ManageMenu} from "./ManageMenu.jsx";

export function ManageTruckData () {
    return (
        <>
            <Row className={"border border-dark rounded-2 py-3 mt-3"}>
                <Col md={1}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={1}>
                    <p>1</p>
                </Col>

                <Col md={3} >
                    <p>South of the Border</p>
                </Col>

                <Col md={3}>
                    <p>Mexican</p>
                </Col>

                <Col md={2}>
                    <Link><ManageMenu/></Link>
                </Col>

                <Col md={2}>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </Col>
            </Row>
        </>
    )
}