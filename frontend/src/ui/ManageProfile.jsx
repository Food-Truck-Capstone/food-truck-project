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
                    <Col className={"text-center"}>
                        <h1>Manage Profile</h1>
                        <OwnerProfile/>
                        <ManageTruck/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}