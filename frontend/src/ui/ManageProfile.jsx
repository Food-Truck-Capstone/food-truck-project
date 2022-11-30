import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {OwnerProfile} from "./OwnerProfile";
import {TruckManagement} from "./TruckManagement";
import {MenuManagement} from "./MenuManagement";
import {PostAllTrucks} from "./PostAllTrucks";

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
                <PostAllTrucks/>
            </Container>
        </>
    )
}