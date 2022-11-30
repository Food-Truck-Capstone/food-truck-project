import React from "react"
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ManageMenu} from "./ManageMenu.jsx";

export function ManageTruckData () {
    return (
        <>
            <Row className={"border border-dark rounded-2 py-3 mt-2"}>
                <Col md={1} className={"pt-2"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={1} className={"pt-2"}>
                    <p>1</p>
                </Col>

                <Col md={3} >
                    <input className="form-control" type="text" placeholder="Enter Truck Name"/>
                </Col>

                <Col md={3} className={"ps-5 pe-5"}>
                    <input className="form-control text-center" type="text" placeholder="Food Type i.e. Taco, German, etc..."/>
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