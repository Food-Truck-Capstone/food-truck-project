import React from "react"
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ManageMenu} from "./ManageMenu.jsx";

export function ManageTruckData () {
    return (
        <>
            <Row className={"border border-dark rounded-2 mb-2 py-3"}>
                <Col md={1} className={"my-auto"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={1} className={"my-auto"}>
                    <p className={"m-0"}>1</p>
                </Col>

                <Col md={3} className={"my-auto"}>
                    <input className="form-control" type="text" placeholder="Enter Truck Name"/>
                </Col>

                <Col md={3} className={"px-5 my-auto"}>
                    <div className="input-group">
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">Taco</option>
                            <option value="2">Burger</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </Col>

                <Col md={2}>
                    <Link><ManageMenu/></Link>
                </Col>

                <Col md={2} className={"my-auto"}>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </Col>
            </Row>
        </>
    )
}