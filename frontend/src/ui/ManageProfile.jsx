import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {OwnerProfile} from "./OwnerProfile";
import {TruckManagement} from "./TruckManagement";
import {MenuManagement} from "./MenuManagement";
import {IndividualTruck} from "./IndividualTruck.jsx";

export function ManageProfile () {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Manage Profile</h1>
                        <OwnerProfile/>
                        <TruckManagement/>
                        <MenuManagement/>
                    </Col>
                </Row>
                <IndividualTruck/>
            </Container>
        </>
    )
}