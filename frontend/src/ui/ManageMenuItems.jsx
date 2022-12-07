import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

// This is the template that will get used to create the list of menu items for a truck.
export function ManageMenuItems ({menuItem}) {

    return (
        <>
            <Row className={"border border-dark rounded-2 py-3 mt-0"}>
                <Col md={1} className={"my-auto text-center"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    {menuItem.menuName}
                </Col>

                <Col md={4} className={"my-auto text-center"}>
                    {menuItem.menuDescription}
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    ${menuItem.menuPrice}
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