import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import {ManageTruck} from "./ManageTruck.jsx";
import {ManageProfileData} from "./ManageProfileData.jsx";

//This is where the users profile data will get populated.
export function Manage () {
    return (
        <>
            {/*This is the Manage Profile Section*/}
            <Container className="justify-content-center">
                <Row className="text-center my-3">
                    <Col>
                        <h1>Manage Profile</h1>
                    </Col>
                </Row>
                <Row >
                    <ManageProfileData/>
                </Row>
                {/*This is the Manage Trucks Section*/}
                <Row className="text-center my-3">
                    <Col>
                        <h1>Manage Truck(s)</h1>
                    </Col>
                </Row>
                <Row>
                    <ManageTruck/>
                </Row>
            </Container>
        </>
    )
}