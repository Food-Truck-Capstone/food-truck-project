import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {OwnerProfile} from "./OwnerProfile";
import {ManageMenu} from "./ManageMenu";
import {ManageTruck} from "./ManageTruck";

export function ManageProfile () {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Manage Profile</h1>
                        <OwnerProfile/>
                        <ManageTruck/>
                        <ManageMenu/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}