import React from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {ManageTruckData} from "./ManageTruckData";

export function ManageTruck() {
    return (
        <>
            <Container className={"text-center"}>
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

                {/*Insert ManageTruckData component here for the number of trucks the owner has.*/}
                <ManageTruckData/>
                <ManageTruckData/>

                <Col className={"text-center mt-3"}>
                    <Button href={"#"}>+</Button>
                </Col>
            </Container>
        </>
    )
}