import React, {useEffect} from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export function ManageTruckData({truck}) {

    return (
        <>
            <Row className={"rounded-2 mb-3 py-3"} id={"borderEffect"}>
                <Col md={1} className={"my-auto text-center"}>
                    <Form>
                        <Form.Check type="checkbox"/>
                    </Form>
                </Col>

                <Col md={1} className={"my-auto text-center"}>
                    {truck.truckId.slice(-4)}
                </Col>

                <Col md={3} className={"my-auto text-center"}>
                    {truck.truckName}
                </Col>

                <Col md={2} className={"my-auto text-center"}>
                    <Container className="input-group">
                        {truck.truckFoodType}
                    </Container>
                </Col>

                <Col md={2} className={"my-auto text-center"}>

                    <BootstrapSwitchButton
                        style=""
                    onstyle={"secondary"}
                    offstyle={"outline-secondary"}
                        onlabel='Yes'
                        offlabel='No'
                        checked={truck.truckCardAccepted === 'true'}
                        />

                </Col>

                <Col md={1} className={"text-center"}>
                    <Button id="ButtonBackgroundColor">Save</Button>
                </Col>

                <Col md={2} className={"add-edit-menu my-auto text-center"}>
                    <Button href={`manage-menu/${truck.truckId}`} id="ButtonBackgroundColor">Manage Menu </Button>
                </Col>
            </Row>
        </>
    )
}