import React from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {ManageTruckData} from "./ManageTruckData";

export function ManageTruck() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={1} className={"text-center"}><h5>Select</h5></Col>
                    <Col md={1} className={"text-center"}><h5>Truck #</h5></Col>
                    <Col md={3} className={"text-center"}><h5>Truck Name</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Truck Type</h5></Col>
                    <Col md={2} className={"text-center"}><h5>Card Accepted</h5></Col>
                    <Col md={1}></Col>
                    <Col md={2} className={"menu text-center"}><h5>Menu</h5></Col>
                </Row>

                {/*Insert ManageTruckData component here for the number of trucks the owner has.*/}
                <ManageTruckData truckId="56009db2-ccc2-42bd-90eb-827b5cb65fc4"/>
                <ManageTruckData/>

                <Col className={"text-center mb-3"}>
                    <Button href={"#"}>+</Button>
                </Col>
            </Container>
        </>
    )
}